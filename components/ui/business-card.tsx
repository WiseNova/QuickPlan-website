"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  title: string;
  description: string;
  industry: string;
  avatarSrc?: string;
  avatarFallback: string;
  className?: string;
}

export function BusinessCard({
  title,
  description,
  industry,
  avatarSrc,
  avatarFallback,
  className,
}: BusinessCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer group", 
        className
      )}
    >
      <CardHeader className="relative p-6">
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {industry}
          </Badge>
        </div>
        <Avatar className="h-12 w-12 mb-2">
          <AvatarImage src={avatarSrc} alt={title} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">12 pages</span>
        <span className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </CardFooter>
    </Card>
  );
}