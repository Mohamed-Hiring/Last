"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "../components/ui/card";
import Input from "../components/ui/input";
import Label from "../components/ui/label";
import Textarea from "../components/ui/textarea";
import Button from "../components/ui/button";

export default function HiringCardForm() {
  const [hours, setHours] = useState(0);
  const [rate, setRate] = useState(0);
  const total = (hours * rate).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 border border-purple-200">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo_1-removebg-preview.png"
            alt="Al Haidariya Logo"
            width={280}
            height={80}
          />
        </div>

        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          Al Haidariya Equipment Hiring Form
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-full">
            <Label>Customer Name</Label>
            <Input placeholder="Enter customer name" />
          </div>

          <div className="col-span-full">
            <Label>Machinery Name</Label>
            <Input placeholder="e.g. Excavator 30 Ton With Breaker" />
          </div>

          <div className="col-span-full">
            <Label>Location</Label>
            <Input placeholder="Enter worksite location" />
          </div>

          <div>
            <Label>Start Date</Label>
            <Input type="date" />
          </div>

          <div>
            <Label>Return Date</Label>
            <Input type="date" />
          </div>

          <div>
            <Label>Total Hours</Label>
            <Input
              type="number"
              value={hours}
              onChange={(e) => setHours(parseFloat(e.target.value))}
            />
          </div>

          <div>
            <Label>Rate per 8 Hours</Label>
            <Input
              type="number"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
            />
          </div>

          <div className="col-span-full">
            <Label>Calculated Amount</Label>
            <Input value={`BHD ${total}`} readOnly className="bg-gray-100" />
          </div>

          <div className="col-span-full">
            <Label>Notes</Label>
            <Textarea placeholder="Any special instructions or notes..." />
          </div>

          <div className="col-span-full">
            <Button className="w-full bg-purple-700 text-white hover:bg-purple-800 transition rounded-xl py-3 text-lg">
              Submit Hiring Card
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
