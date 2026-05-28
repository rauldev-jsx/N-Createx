import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutTeach = ({ data }) => {
  const badgeColors = {
    Marketing: "#03CEA4",
    Management: "#6A4DFF",
    Design: "#FF4081",
    Development: "#7772F1",
    "HR & Recruting": "#FF8C00",
  };
  return (
    <section className="mb-[18rem]">
      <MaxWidth>
        <div className="text-center mb-[6rem]">
          <p className="text-[1.6rem] text-[#1E212C] font-[700]">
            {data?.aboutTeach?.titleUp}
          </p>
          <h3 className="text-[4.6rem] text-[#1E212C] font-[900]">
            {data?.aboutTeach?.titleBottom}
          </h3>
        </div>

        <div className="grid grid-cols-12 gap-[3rem]">
          {data?.aboutTeach?.cards?.slice(0, 5).map((item) => {
            return (
              <div
                key={item?.id}
                className="col-span-4 flex flex-col hover:shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div>
                  <Image
                    src={item?.cardImg}
                    alt={item?.cardImgAlt}
                    width={390}
                    height={200}
                  />
                </div>
                <div className="p-[2.4rem] card-outline">
                  <span
                    className="self-start text-[1.4rem] text-[#FFFFFF] font-[400] px-[0.8rem] py-[0.1rem] rounded-[0.4rem]"
                    style={{ backgroundColor: badgeColors[item?.position] }}
                  >
                    {item?.position}
                  </span>

                  <p className="text-[1.6rem] text-[#787A80] font-[400] py-[2rem]">
                    {item?.text}
                  </p>

                  <Link
                    href={"/cources"}
                    className="text-[1.6rem] text-[#1E212C] font-[700] flex items-center gap-[0.8rem] hover:text-[#FF3F3A] transition"
                  >
                    {item?.linkText}
                    <Image
                      src={item?.linkArrowImg}
                      alt={item?.linkArrowImgAlt}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
          {/* {data.aboutTeach?.cards?.slice(0, 6).map((item) => {
            return (
              <div className="col-span-4" key={item?.id}>
                <p>{item?.title}</p>
              </div>
            );
          })} */}
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutTeach;
