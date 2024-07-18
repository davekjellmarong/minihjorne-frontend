"use client";
import HvordanTaBilder from "@/components/features/minSide/lastOpp/Tips/HvordanTaBilder";
import HvorMangeBilder from "@/components/features/minSide/lastOpp/Tips/HvorMangeBilder";
import Størrelse from "@/components/features/minSide/lastOpp/Tips/Størrelse";
import Tilstand from "@/components/features/minSide/lastOpp/Tips/Tilstand";
import React, { useState } from "react";

const Page = () => {
  const tabsData = [
    {
      title: "Ta bilder",
      component: <HvordanTaBilder />,
      borderClass: "border-l",
    },
    {
      title: "Antall bilder",
      component: <HvorMangeBilder />,
      borderClass: "border-x",
    },
    {
      title: "Størrelse",
      component: <Størrelse />,
      borderClass: "border-r",
    },
    {
      title: "Tilstand",
      component: <Tilstand />,
      borderClass: "border-r",
    },
  ];
  const Tabs = {
    Hvordan_ta_bilder: tabsData[0],
    Hvor_mange_bilder: tabsData[1],
    Størrelse: tabsData[2],
    Tilstand: tabsData[3],
  };
  const [tab, setTab] = useState(Tabs.Hvordan_ta_bilder);
  return (
    <div className="mx-4">
      <div className="flex justify-center pb-6">
        {tabsData.map((tabData) => (
          <button
            key={tabData.title}
            onClick={() => setTab(tabData)}
            className={`${tabData.borderClass} border-y  border-brand-200  p-2 py-4 text-sm ${tab.title === tabData.title ? "bg-brand-500 text-white" : "bg-brand-100"}`}
          >
            {tabData.title}
          </button>
        ))}
      </div>
      {tab.component}
    </div>
  );
};

export default Page;
