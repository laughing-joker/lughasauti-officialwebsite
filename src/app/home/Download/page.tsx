import React from "react";
import LargeCardWithNestedCard from "@/components/LargeCard";
import FullScreenCard from "@/components/DownloadCard2";

const page = () => {
  return (
    <div>
      <LargeCardWithNestedCard />
      <FullScreenCard />
    </div>
  );
};

export default page;
