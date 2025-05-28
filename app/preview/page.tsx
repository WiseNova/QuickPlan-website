"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download, CreditCard } from "lucide-react";

export default function PreviewPage() {
  const router = useRouter();
  const [isFreePlan] = useState(true); // In a real app, this would come from auth state

  const handleDownload = (format: "pdf" | "word") => {
    if (isFreePlan) {
      router.push("/signup?plan=professional");
    } else {
      // Handle actual download
      console.log(`Downloading in ${format} format`);
    }
  };

  return (
    <div className="flex min-h-screen pt-28 pb-16 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Your Business Plan</h1>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => handleDownload("word")}
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                Export as Word
                {isFreePlan && <CreditCard className="h-4 w-4 ml-2" />}
              </Button>
              <Button
                onClick={() => handleDownload("pdf")}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF
                {isFreePlan && <CreditCard className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          </div>

          <Card className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* This would be the actual business plan content */}
              <h2>Executive Summary</h2>
              <p>Your business plan content would appear here...</p>
              
              <h2>Market Analysis</h2>
              <p>Market analysis content would appear here...</p>
              
              {/* Add more sections */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}