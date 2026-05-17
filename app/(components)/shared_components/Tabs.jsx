"use client";
import Image from "next/image";
import React, { useState } from "react";

const Tabs = ({ tabData, customClass = "" }) => {
  const [activeTab, setActiveTab] = useState("tutors");

  const filteredCards = tabData?.homePageBenefits?.benefitsContent?.filter(
    (item) => item?.filterValue === activeTab,
  );
  return (
    <div className={customClass}>
      <div className="flex justify-center mb-[6rem] gap-[1rem]">
        {tabData?.homePageBenefits?.menu?.map((tab) => {
          return (
            <button
              className={`outline-none flex items-center gap-[0.5rem] text-[1.6rem] font-[700] px-[7rem] py-[1rem] rounded-[0.4rem] ${activeTab === tab?.filterValue ? "btn-tab-acvite" : "btn-tab-hov"}`}
              key={tab?.id}
              onClick={() => setActiveTab(tab.filterValue)}
            >
              <Image
                src={tab?.icoImg}
                alt={tab?.icoAlt}
                width={16}
                height={16}
              />
              {tab?.title}
            </button>
          );
        })}
      </div>

      <div
        key={activeTab}
        className="grid grid-cols-12 items-center gap-[8rem] fade-in"
      >
        {filteredCards?.map((item) => {
          return (
            <React.Fragment key={item?.id}>
              <div className="col-span-6">
                <h4 className="text-[3.2rem] text-[#1E212C] font-[900] mb-[2.4rem]">
                  {item?.title}
                </h4>
                <p className="text-[1.6rem] text-[#424551] font-[400]">
                  {item?.text}
                </p>
              </div>

              <div className="col-span-6">
                <Image
                  src={item?.img}
                  alt={item?.alt}
                  width={600}
                  height={440}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
