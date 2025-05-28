'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChevronRight, LineChart, Settings, UserCircle2, Wand2 } from "lucide-react";
import AIAnimation from "@/components/animation/ai-animation";
import TextAnimate from "@/components/animation/text-animate";
import { FeatureCard } from "@/components/ui/feature-card";
import { BusinessCard } from "@/components/ui/business-card";
import { useLanguage } from "@/lib/language-context";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [formStep, setFormStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  // Simulated form fields that will be "typed"
  const formFields = [
    "TechFusion Solutions",
    "AI-powered analytics platform for e-commerce businesses...",
    "Small to medium-sized online retailers...",
    "$500,000"
  ];

  // Simulated generated content
  const generatedText = `Executive Summary:
TechFusion Solutions is an innovative AI-powered analytics platform...

Market Analysis:
The e-commerce analytics market is projected to reach...

Financial Projections:
Year 1: $1.2M revenue
Year 2: $2.8M revenue
Year 3: $5.5M revenue`;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (formStep < formFields.length) {
      timeout = setTimeout(() => {
        setFormStep(prev => prev + 1);
      }, 2000);
    } else if (formStep === formFields.length && !isGenerating) {
      timeout = setTimeout(() => {
        setIsGenerating(true);
        // Start generating content
        let text = "";
        let index = 0;
        
        const generateInterval = setInterval(() => {
          if (index < generatedText.length) {
            text += generatedText[index];
            setGeneratedContent(text);
            index++;
          } else {
            clearInterval(generateInterval);
            setTimeout(() => {
              setFormStep(0);
              setIsGenerating(false);
              setGeneratedContent("");
            }, 3000);
          }
        }, 50);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [formStep]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative container z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              {t('hero.badge')}
            </Badge>
            <h1 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {t('hero.title')} <span className="text-primary relative">
                <TextAnimate
                  words={t('hero.titleWords')}
                  className="text-primary"
                />
              </span> {t('hero.titleEnd')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/generate">{t('nav.getStarted')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="#how-it-works">
                  {t('nav.howItWorks')}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Mockup/Preview */}
          <div className="relative max-w-5xl mx-auto mt-12 rounded-xl overflow-hidden shadow-2xl border bg-card">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/10 pointer-events-none" />
            <div className="py-3 px-4 border-b flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="text-xs text-muted-foreground mx-auto">Business Plan Generator</div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="md:col-span-2 bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="h-8 w-3/4 bg-muted/50 rounded overflow-hidden">
                          {formStep >= 1 && (
                            <div className="h-full bg-primary/10 px-3 py-1.5 animate-in slide-in-from-left">
                              {formFields[0]}
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="h-20 bg-muted/40 rounded overflow-hidden">
                            {formStep >= 2 && (
                              <div className="h-full bg-primary/10 px-3 py-1.5 animate-in slide-in-from-left">
                                {formFields[1]}
                              </div>
                            )}
                          </div>
                          <div className="h-20 bg-muted/40 rounded overflow-hidden">
                            {formStep >= 3 && (
                              <div className="h-full bg-primary/10 px-3 py-1.5 animate-in slide-in-from-left">
                                {formFields[2]}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="h-10 bg-muted/40 rounded overflow-hidden">
                          {formStep >= 4 && (
                            <div className="h-full bg-primary/10 px-3 py-1.5 animate-in slide-in-from-left">
                              {formFields[3]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="h-5 w-1/2 bg-muted/50 rounded" />
                      {isGenerating ? (
                        <div className="h-[300px] overflow-hidden font-mono text-xs">
                          {generatedContent}
                          <span className="inline-block w-2 h-4 bg-primary animate-blink ml-1" />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="h-24 bg-muted/30 rounded animate-pulse" />
                          <div className="h-24 bg-muted/30 rounded animate-pulse" />
                          <div className="h-4 bg-muted/40 rounded animate-pulse" />
                          <div className="h-4 w-3/4 bg-muted/40 rounded animate-pulse" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 w-full h-full">
          <AIAnimation />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">{t('nav.features')}</Badge>
            <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('features.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Wand2}
              title={t('features.aiWriting.title')}
              description={t('features.aiWriting.description')}
            />
            <FeatureCard
              icon={LineChart}
              title={t('features.financials.title')}
              description={t('features.financials.description')}
            />
            <FeatureCard
              icon={UserCircle2}
              title={t('features.audience.title')}
              description={t('features.audience.description')}
            />
            <FeatureCard
              icon={Settings}
              title={t('features.templates.title')}
              description={t('features.templates.description')}
            />
            <FeatureCard
              icon={CheckCircle}
              title={t('features.documents.title')}
              description={t('features.documents.description')}
            />
            <FeatureCard
              icon={ChevronRight}
              title={t('features.guidance.title')}
              description={t('features.guidance.description')}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">{t('nav.howItWorks')}</Badge>
            <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('howItWorks.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div className="relative">
              <div className="absolute -left-4 -top-4 md:left-1/2 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                1
              </div>
              <Card className="h-full">
                <CardContent className="pt-8 pb-6 px-6">
                  <h3 className="text-xl font-semibold mb-2">{t('howItWorks.steps.step1.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('howItWorks.steps.step1.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 md:left-1/2 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                2
              </div>
              <Card className="h-full">
                <CardContent className="pt-8 pb-6 px-6">
                  <h3 className="text-xl font-semibold mb-2">{t('howItWorks.steps.step2.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('howItWorks.steps.step2.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 md:left-1/2 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                3
              </div>
              <Card className="h-full">
                <CardContent className="pt-8 pb-6 px-6">
                  <h3 className="text-xl font-semibold mb-2">{t('howItWorks.steps.step3.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('howItWorks.steps.step3.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/generate">{t('nav.getStarted')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">{t('examples.badge')}</Badge>
            <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t('examples.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('examples.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/examples/tech-fusion">
              <BusinessCard
                title={t('examples.plans.techFusion.title')}
                description={t('examples.plans.techFusion.description')}
                industry={t('examples.plans.techFusion.industry')}
                avatarFallback="TF"
              />
            </Link>
            <Link href="/examples/green-earth">
              <BusinessCard
                title={t('examples.plans.greenEarth.title')}
                description={t('examples.plans.greenEarth.description')}
                industry={t('examples.plans.greenEarth.industry')}
                avatarFallback="GE"
              />
            </Link>
            <Link href="/examples/urban-style">
              <BusinessCard
                title={t('examples.plans.urbanStyle.title')}
                description={t('examples.plans.urbanStyle.description')}
                industry={t('examples.plans.urbanStyle.industry')}
                avatarFallback="UB"
              />
            </Link>
            <Link href="/examples/mindful-space">
              <BusinessCard
                title={t('examples.plans.mindfulSpace.title')}
                description={t('examples.plans.mindfulSpace.description')}
                industry={t('examples.plans.mindfulSpace.industry')}
                avatarFallback="MT"
              />
            </Link>
            <Link href="/examples/inno-learn">
              <BusinessCard
                title={t('examples.plans.innoLearn.title')}
                description={t('examples.plans.innoLearn.description')}
                industry={t('examples.plans.innoLearn.industry')}
                avatarFallback="IL"
              />
            </Link>
            <Link href="/examples/smart-home">
              <BusinessCard
                title={t('examples.plans.smartHome.title')}
                description={t('examples.plans.smartHome.description')}
                industry={t('examples.plans.smartHome.industry')}
                avatarFallback="SH"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">{t('nav.pricing')}</Badge>
            <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('pricing.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{t('pricing.starter.title')}</h3>
                  <p className="text-muted-foreground mt-1">{t('pricing.starter.description')}</p>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{t('pricing.starter.price')}</span>
                  <span className="text-muted-foreground ml-1">{t('pricing.starter.period')}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {(t<string[]>('pricing.starter.features')).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/signup?plan=starter">{t('nav.getStarted')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary">
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="pt-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{t('pricing.professional.title')}</h3>
                  <p className="text-muted-foreground mt-1">{t('pricing.professional.description')}</p>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{t('pricing.professional.price')}</span>
                  <span className="text-muted-foreground ml-1">{t('pricing.professional.period')}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {(t<string[]>('pricing.professional.features')).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/signup?plan=professional">{t('nav.getStarted')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{t('pricing.lifetime.title')}</h3>
                  <p className="text-muted-foreground mt-1">{t('pricing.lifetime.description')}</p>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{t('pricing.lifetime.price')}</span>
                  <span className="text-muted-foreground ml-1">{t('pricing.lifetime.period')}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {(t<string[]>('pricing.lifetime.features')).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/signup?plan=lifetime">{t('nav.getStarted')}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to transform your business idea into reality?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of entrepreneurs who&apos;ve accelerated their journey with our AI-powered business plan generator.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/generate">{t('nav.getStarted')}</Link>
            </Button>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_30%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_30%)]" />
        </div>
      </section>
    </div>
  );
}