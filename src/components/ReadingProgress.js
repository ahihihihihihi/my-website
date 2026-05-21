// src/components/ReadingProgress.js
import React, { useState, useEffect } from 'react';

export default function ReadingProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 'var(--ifm-navbar-height, 60px)', left: 0,
      width: `${scrollProgress}%`, height: '4px',
      background: 'linear-gradient(90deg, #2f6fe2, #00ced1, #2ecc71)',
      zIndex: 1000, transition: 'width 0.1s ease-out'
    }} />
  );
}