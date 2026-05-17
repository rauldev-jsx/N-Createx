import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAbout = ({ data }) => {
  return (
    <section>
      <MaxWidth>
        <div className="grid grid-cols-12 gap-[8rem] mt-[10rem]">
          <div className="col-span-6">
            <Image
              src={data?.homePageAbout?.aboutImg}
              alt={data?.homePageAbout?.aboutImgAlt}
              width={705}
              height={560}
            />
          </div>
          <div className="col-span-6">
            <p className="text-[1.6rem] text-[#1E212C] font-[700]">
              {data?.homePageAbout?.titleUp}
            </p>
            <h2 className="text-[4.6rem] text-[#1E212C] font-[900] mb-[4rem]">
              {data?.homePageAbout?.titleBottom}
            </h2>
            <ul className="flex flex-col gap-[1.2rem] mb-[4.8rem]">
              {data?.homePageAbout?.selectAbout?.map((item) => (
                <li key={item?.id} className="flex items-center gap-[1.6rem]">
                  <Image
                    src={item?.ico}
                    alt={item?.icoAlt}
                    height={16}
                    width={16}
                  />
                  <p className="text-[1.6rem] text-[#424551] font-[400] select-ico">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <Link
              className="btn-gradient text-[1.4rem] text-[#FFFFFF] font-[700] py-[1.5rem] px-[4rem] rounded-[0.4rem]"
              href={"/about"}
            >
              {data?.homePageAbout?.button}
            </Link>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeAbout;
