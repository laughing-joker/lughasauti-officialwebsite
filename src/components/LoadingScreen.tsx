"use client";
import { useState, useEffect } from "react";
import React from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white text-gold z-50">
      <div className="animate-pulse text-2xl font-bold">Loading</div>
    </div>
  );
};

export default LoadingScreen;
