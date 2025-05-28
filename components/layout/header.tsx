"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, Brain, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">PlanGenius</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#features" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            {t('nav.features')}
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            {t('nav.howItWorks')}
          </Link>
          <Link 
            href="#pricing" 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            {t('nav.pricing')}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Smartphone className="h-4 w-4" />
                Mobile App
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem asChild>
                <Link 
                  href="https://apps.apple.com/app/plangenius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-8"
                  />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.plangenius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-8"
                  />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="gap-2">
                <span className="text-xl">{languages.find(l => l.code === language)?.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
          <Button asChild variant="outline">
            <Link href="/login">{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href="/generate">{t('nav.getStarted')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="gap-2">
                <span className="text-xl">{languages.find(l => l.code === language)?.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-md py-4 animate-in slide-in-from-top-5 duration-300">
          <div className="container flex flex-col gap-4">
            <Link 
              href="#features" 
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.features')}
            </Link>
            <Link 
              href="#how-it-works" 
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.howItWorks')}
            </Link>
            <Link 
              href="#pricing" 
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.pricing')}
            </Link>
            <div className="py-2 flex flex-col gap-2">
              <Link 
                href="https://apps.apple.com/app/plangenius"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </Link>
              <Link 
                href="https://play.google.com/store/apps/details?id=com.plangenius"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">{t('nav.login')}</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/generate">{t('nav.getStarted')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}