"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function TextAnimate({
  words,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TextAnimateProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingDelay(deletingSpeed);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingDelay(typingSpeed);
      }

      if (!isDeleting && text === currentWord) {
        // Word is complete, wait and then start deleting
        setTypingDelay(pauseTime);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // Word is deleted, move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingDelay, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={cn("relative", className)}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-[2px] animate-blink align-middle" />
    </span>
  );
}