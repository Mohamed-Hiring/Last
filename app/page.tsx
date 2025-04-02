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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 border border-purple-300">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo_1-removebg-preview.png"
            alt="Al Haidariya Logo"
            width={280}
            height={80}
          />
        </div>

        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-10 tracking-tight">
          Al Haidariya Heavy Equipment Hiring
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Label className="text-base font-semibold text-gray-700">Customer Name</Label>
            <Input placeholder="Enter customer's full name" />
          </div>

          <div className="md:col-span-2">
            <Label className="text-base font-semibold text-gray-700">Machinery Name</Label>
            <Input placeholder="e.g. Excavator 30 Ton With Breaker" />
          </div>

          <div className="md:col-span-2">
            <Label className="text-base font-semibold text-gray-700">Location</Label>
            <Input placeholder="Enter worksite location" />
          </div>

          <div>
            <Label className="text-base font-semibold text-gray-700">Start Date</Label>
            <Input type="date" />
          </div>

          <div>
            <Label className="text-base font-semibold text-gray-700">Return Date</Label>
            <Input type="date" />
          </div>

          <div>
            <Label className="text-base font-semibold text-gray-700">Total Hours</Label>
            <Input
              type="number"
              value={hours}
              onChange={(e) => setHours(parseFloat(e.target.value))}
              min={0}
            />
          </div>

          <div>
            <Label className="text-base font-semibold text-gray-700">Rate per 8 Hours (BHD)</Label>
            <Input
              type="number"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              min={0}
            />
          </div>

          <div className="md:col-span-2">
            <Label className="text-base font-semibold text-gray-700">Calculated Amount</Label>
            <Input value={`BHD ${total}`} readOnly className="bg-gray-100 text-gray-700 font-medium" />
          </div>

          <div className="md:col-span-2">
            <Label className="text-base font-semibold text-gray-700">Notes</Label>
            <Textarea placeholder="Any special instructions or notes..." />
          </div>

          <div className="md:col-span-2">
            <Button className="w-full bg-purple-700 text-white hover:bg-purple-800 transition duration-300 rounded-xl py-3 text-lg font-semibold">
              Submit Hiring Card
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
