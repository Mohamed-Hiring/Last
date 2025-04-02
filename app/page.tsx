"use client";

import { useState } from "react";
import Image from "next/image";

// Ensure the paths to your components are correct
import { Card, CardContent } from "../components/ui/card";
import Input from "../components/ui/input";
import Label from "../components/ui/label";
import Textarea from "../components/ui/textarea";
import Button from "../components/ui/button";

export default function HiringCardForm() {
  // State for tracking hours and rate
  const [hours, setHours] = useState(0);
  const [rate, setRate] = useState(0);
  
  // Calculate the total
  const total = (hours * rate).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Add logo */}
      <div className="flex justify-center mb-4">
        <Image
          src="/logo_1-removebg-preview.png"
          alt="Al Haidariya Logo"
          width={280}
          height={80}
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-center text-purple-800">
        Al Haidariya Heavy Equipment Hiring
      </h1>

      {/* Card containing the form */}
      <Card className="shadow-xl">
        <CardContent className="grid gap-4 p-4">
          
          {/* Input fields */}
          <div>
            <Label>Customer Name</Label>
            <Input placeholder="Enter customer name" />
          </div>

          <div>
            <Label>Machinery Name</Label>
            <Input placeholder="e.g. Excavator 30 Ton With Breaker" />
          </div>

          <div>
            <Label>Location</Label>
            <Input placeholder="Enter worksite location" />
          </div>

          {/* Date fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Start Date</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Return Date</Label>
              <Input type="date" />
            </div>
          </div>

          {/* Hours and rate */}
          <div className="grid grid-cols-2 gap-4">
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
          </div>

          {/* Calculated amount */}
          <div>
            <Label>Calculated Amount</Label>
            <Input value={`BHD ${total}`} readOnly />
          </div>

          {/* Notes */}
          <div>
            <Label>Notes</Label>
            <Textarea placeholder="Any special instructions or notes..." />
          </div>

          {/* Submit button */}
          <Button className="mt-4">Submit Hiring Card</Button>
        </CardContent>
      </Card>
    </div>
  );
}
