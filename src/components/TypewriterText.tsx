'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
}

export default function TypewriterText({ texts }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }, 2000);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, texts]);

  return (
    <span className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
