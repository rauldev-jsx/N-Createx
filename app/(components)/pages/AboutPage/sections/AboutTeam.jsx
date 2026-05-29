import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";

const AboutTeam = ({ data }) => {
  return (
    <section className="mb-[18rem]">
      <MaxWidth>
        <div className="mb-[6rem] text-center">
          <p className="text-[1.6rem] text-[#1E212C] font-[700]">
            {data?.aboutTeam?.titleUp}
          </p>
          <h3 className="text-[4.6rem] text-[#1E212C] font-[900]">
            {data?.aboutTeam?.titleBottom}
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-y-[6rem] gap-x-[3rem]">
          {data?.aboutTeam?.teamCard?.map((item) => {
            return (
              <div key={item?.id} className="col-span-3">
                <div className="bg-[#FFCF2D] px-[2rem] pt-[2rem] mb-[1.6rem] col-span-3">
                  <Image
                    src={item?.teamImg}
                    alt={item?.teamImgAlt}
                    width={245}
                    height={320}
                  />
                </div>
                <div className="text-center">
                  <p className="text-[2rem] text-[#424551] font-[700]">
                    {item?.title}
                  </p>
                  <p className="text-[1.6rem] text-[#787A80] font-[400]">
                    {item?.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutTeam;
