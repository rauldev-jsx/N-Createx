import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import TitleHeader from "@/app/(components)/shared_components/TitleHeader";
import Image from "next/image";

const AboutProcess = ({ data }) => {
  return (
    <section className="mb-[18rem]">
      <MaxWidth>
        <TitleHeader
          titleUp={data?.aboutProcess?.titleUp}
          titleBottom={data?.aboutProcess?.titleBottom}
          customClass="mb-[6rem]"
        />

        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col gap-[3.2rem]">
            {data?.aboutProcess?.steps?.map((item) => {
              return (
                <div key={item?.id}>
                  <span className="text-[1.2rem] text-[#787A80] font-[900] uppercase">
                    {item?.titleUp}
                  </span>
                  <h4 className="text-[2rem] text-[#1E212C] font-[700]">
                    {item?.titleBottom}
                  </h4>
                  <p className="text-[1.6rem] text-[#787A80] font-[400]">
                    {item?.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="col-span-6 flex justify-end">
            <Image
              src={data?.aboutProcess?.aboutProcessImg}
              alt={data?.aboutProcess?.aboutProcessImgAlt}
              width={525}
              height={620}
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutProcess;
