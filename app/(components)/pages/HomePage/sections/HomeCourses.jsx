import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCourses = ({ data }) => {
  const badgeColors = {
    Marketing: "#03CEA4",
    Management: "#6A4DFF",
    Design: "#FF4081",
    "HR & Recruiting": "#FF8C00",
  };
  return (
    <section className="mb-[18rem]">
      <MaxWidth>
        <div className="flex justify-between items-end mb-[6rem]">
          <div>
            <p className="text-[1.6rem] text-[#1E212C] font-[700]">
              {data?.homePageCourses?.titleUp}
            </p>
            <p className="text-[4.6rem] text-[#1E212C] font-[900]">
              {data?.homePageCourses?.titleBottom}
            </p>
          </div>

          <Link
            className="main-link-out text-[1.6rem] text-[#FF3F3A] font-[700] py-[1rem] px-[4rem]"
            href={"/courses"}
          >
            {data?.homePageCourses?.button}
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-[3rem]">
          {data?.homePageCourses?.cards?.map((item) => {
            return (
              <div key={item?.id} className="col-span-6">
                <div className="flex flex-row gap-[1rem] border-[1px] border-[#E5E8ED]  hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={item?.cardImg}
                    alt={item?.cardAlt}
                    width={214}
                    height={214}
                    className="shrink-0"
                  />

                  <div className="flex flex-col p-[3.2rem] gap-[2rem] flex-1 min-w-0">
                    <span
                      className="self-start text-[1.4rem] text-[#FFFFFF] font-[400] px-[0.8rem] py-[0.1rem] rounded-[0.4rem]"
                      style={{ backgroundColor: badgeColors[item?.position] }}
                    >
                      {item?.position}
                    </span>

                    <p className="text-[2rem] text-[#1E212C] font-[700]">
                      {item?.title}
                    </p>

                    <div className="flex gap-[0.3rem] items-center">
                      <p className="text-[1.8rem] text-[#FF4242] font-[700]">
                        {item?.price}
                      </p>
                      <p className="text-[1.8rem] text-[#787A80] font-[400]">
                        {item?.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeCourses;
