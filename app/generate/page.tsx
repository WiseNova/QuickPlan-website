"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BusinessForm from "@/components/generator/business-form";
import { useLanguage } from "@/lib/language-context";
import { Card } from "@/components/ui/card";
import { Loader2, CheckCircle2 } from "lucide-react";

const sections = [
  { id: "executive", title: "Executive Summary" },
  { id: "market", title: "Market Analysis" },
  { id: "product", title: "Product/Service Description" },
  { id: "strategy", title: "Marketing Strategy" },
  { id: "operations", title: "Operations Plan" },
  { id: "financial", title: "Financial Projections" },
  { id: "risks", title: "Risk Analysis" },
];

export default function GeneratePage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentSection, setCurrentSection] = useState<number>(-1);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const handleGenerate = async (formData: any) => {
    setIsGenerating(true);
    
    // Simulate section-by-section generation
    for (let i = 0; i < sections.length; i++) {
      setCurrentSection(i);
      
      // Simulate AI generation time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setCompletedSections(prev => [...prev, sections[i].id]);
    }

    // Simulate completion and redirect
    setTimeout(() => {
      router.push("/preview");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen pt-28 pb-16 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t("generate.title") || "Generate Your Business Plan"}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("generate.description") || "Fill in the details below and our AI will create a comprehensive business plan tailored to your needs."}
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <BusinessForm onSubmit={handleGenerate} />

          {isGenerating && (
            <Card className="w-full max-w-3xl p-6 mt-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Generating Your Business Plan</h2>
                <div className="space-y-3">
                  {sections.map((section, index) => (
                    <div
                      key={section.id}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        currentSection === index
                          ? "bg-primary/10"
                          : completedSections.includes(section.id)
                          ? "bg-muted"
                          : ""
                      }`}
                    >
                      {completedSections.includes(section.id) ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : currentSection === index ? (
                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2" />
                      )}
                      <span className="flex-1">{section.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}