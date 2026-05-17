import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCertificate = ({ data }) => {
  return (
    <section>
      <MaxWidth>
        <div className="grid grid-cols-12 my-[10rem]">
          <div className="col-span-6">
            <span className="text-[1.6rem] text-[#1E212C] font-[700] mb-[0.8rem]">
              {data?.homePageCertificate?.titleUp}
            </span>
            <h4 className="text-[4.6rem] text-[#1E212C] font-[900] mb-[4.8rem]">
              {data?.homePageCertificate?.titleBottom}
            </h4>

            <p className="text-[1.6rem] text-[#424551] font-[400] mb-[3.2rem]">
              {data?.homePageCertificate?.text}
            </p>
            <div className="flex gap-[4rem]">
              {data?.homePageCertificate?.company?.map((item) => {
                return (
                  <div key={item?.id}>
                    <Link href={item?.companyUrl}>
                      <Image
                        src={item?.companyImg}
                        alt={item?.companyImgAlt}
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-6">
            <Image
              src={data?.homePageCertificate?.certificateImg}
              alt={data?.homePageCertificate?.certificateImgAlt}
              width={705}
              height={500}
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeCertificate;
