"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "../components/ui/card";
import CardContent from "../components/ui/cardContent";
import Input from "../components/ui/input";
import Label from "../components/ui/label";
import Button from "../components/ui/button";

const cardsData = [
  {
    cardNumber: "106767",
    customerName: "BAHRAIN STEEL BSCC",
    machineryName: "FORKLIFT 5 TON",
    location: "BAHRAIN STEEL",
    status: "Received",
    returnDate: "04-Feb-25",
    invoice: "AH/25/036",
    date: "02-Jan-25",
  },
  {
    cardNumber: "106885",
    customerName: "TAHA INTERNATIONAL",
    machineryName: "ROCK BREAKER",
    location: "MAAMEER",
    status: "Running",
    returnDate: "",
    invoice: "",
    date: "01-Jan-25",
  },
  {
    cardNumber: "106896",
    customerName: "GENFIRE",
    machineryName: "GRADER 14G",
    location: "ALDUR",
    status: "Cancel",
    returnDate: "27-Jan-25",
    invoice: "CANCEL / S.H",
    date: "01-Jan-25",
  },
];

export default function HiringCardList() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const filtered = cardsData.filter((card) => {
    const searchMatch =
      card.cardNumber.includes(search) ||
      card.customerName.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "" || card.status === statusFilter;

    const monthMatch =
      monthFilter === "" ||
      new Date(card.date).getMonth() + 1 === parseInt(monthFilter);

    return searchMatch && statusMatch && monthMatch;
  });

  const exportToExcel = () => {
    alert("Exporting to Excel (dummy action)");
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        Hiring Cards Dashboard
      </h1>

      <div className="flex flex-wrap gap-4 mb-4">
        <Input
          placeholder="Search by Card Number or Customer Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Status</option>
          <option value="Received">Received</option>
          <option value="Cancel">Cancel</option>
          <option value="Running">Running</option>
        </select>
        <select
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Months</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
            <option key={m} value={m}>
              {new Date(2025, m - 1).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>
        <Button onClick={exportToExcel} className="bg-purple-700 text-white">
          Export to Excel
        </Button>
      </div>

      <div className="grid gap-4">
        {filtered.map((card) => (
          <Card
            key={card.cardNumber}
            className={`cursor-pointer border px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition duration-200 ${
              card.status === "Received"
                ? "text-green-700 border-green-300"
                : card.status === "Cancel"
                ? "text-red-600 border-red-300"
                : "text-black border-gray-300"
            }`}
            onClick={() => setSelectedCard(card)}
          >
            <CardContent className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div>
                <Label>Card #</Label>
                <div>{card.cardNumber}</div>
              </div>
              <div>
                <Label>Customer</Label>
                <div>{card.customerName}</div>
              </div>
              <div>
                <Label>Machine</Label>
                <div>{card.machineryName}</div>
              </div>
              <div>
                <Label>Location</Label>
                <div>{card.location}</div>
              </div>
              <div>
                <Label>Status</Label>
                <div>{card.status}</div>
              </div>
              <div>
                <Label>Invoice</Label>
                <div>{card.invoice || "Not Invoiced"}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
            <h2 className="text-xl font-semibold mb-4 text-purple-700">
              Card Details - {selectedCard.cardNumber}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(selectedCard).map(([key, value]) => (
                <div key={key}>
                  <Label className="uppercase text-sm font-bold">
                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                  </Label>
                  <div>{value || "-"}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button
                onClick={() => setSelectedCard(null)}
                className="bg-gray-300 text-black"
              >
                Cancel
              </Button>
              <Button className="bg-purple-700 text-white">Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
