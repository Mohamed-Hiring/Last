"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function HiringCardForm() {
  const [hours, setHours] = useState(0);
  const [rate, setRate] = useState(0);
  const total = (hours * rate).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo_1-removebg-preview.png"
            alt="Al Haidariya Logo"
            width={280}
            height={80}
          />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          Al Haidariya Heavy Equipment Hiring
        </h1>

        <Card className="shadow-2xl rounded-2xl border border-purple-200">
          <CardContent className="grid gap-6 p-6">

            <div>
              <Label className="text-sm font-medium text-gray-700">Customer Name</Label>
              <Input placeholder="Enter customer name" />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Machinery Name</Label>
              <Input placeholder="e.g. Excavator 30 Ton With Breaker" />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Location</Label>
              <Input placeholder="Enter worksite location" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">Start Date</Label>
                <Input type="date" />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Return Date</Label>
                <Input type="date" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">Total Hours</Label>
                <Input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Rate per 8 Hours</Label>
                <Input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Calculated Amount</Label>
              <Input value={`BHD ${total}`} readOnly className="bg-gray-100" />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Notes</Label>
              <Textarea placeholder="Any special instructions or notes..." />
            </div>

            <Button className="bg-purple-700 text-white hover:bg-purple-800 transition mt-2">
              Submit Hiring Card
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
