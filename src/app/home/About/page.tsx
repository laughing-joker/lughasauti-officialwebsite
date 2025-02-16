"use client";
import SplitCard from "@/components/explore1";
import Card from "@/components/explore2";
import Explore3 from "@/components/explore3";
import React from "react";

const About = () => {
  return <div className="w-screen min-h-screen flex flex-col">
    <SplitCard />
    <Card/>
    <Explore3 />
  </div>;
};

export default About;
