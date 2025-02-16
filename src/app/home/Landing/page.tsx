"use client";

import React from "react";
import HeroSection from "../../../components/Herosection";
import ContributorCard from "@/components/ContributorCard";

const Landing = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSection />
      </section>
      {/* Contributor Card */}
      <section className="w-full">
        <ContributorCard />
      </section>
    </main>
  );
};

export default Landing;
