import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import TitleHeader from "@/app/(components)/shared_components/TitleHeader";
import Image from "next/image";

const AboutValues = ({ data }) => {
  return (
    <section className="mb-[18rem]">
      <MaxWidth>
        <TitleHeader
          titleUp={data?.aboutValues?.titleUp}
          titleBottom={data?.aboutValues?.titleBottom}
          customClass="mb-[6rem] text-center"
        />
        <div className="grid grid-cols-12 gap-[8rem]">
          {data?.aboutValues?.cards?.map((item) => {
            return (
              <div
                className="col-span-3 flex flex-col items-center line-after"
                key={item?.id}
              >
                <div className="mb-[2.4rem]">
                  <Image
                    src={item?.cardImg}
                    alt={item?.cardImgAlt}
                    width={48}
                    height={48}
                  />
                </div>

                <h4 className="text-[2rem] text-[#1E212C] font-[700]">
                  {item?.title}
                </h4>
                <p className="text-center text-[1.6rem] text-[#787A80] font-[400]">
                  {item?.text}
                </p>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutValues;
