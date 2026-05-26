import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";

const AboutVideo = ({ data }) => {
  return (
    <section className="mb-[18rem]">
      <MaxWidth>
        <div className="flex items-center gap-[1.6rem] mb-[3.2rem]">
          <Image
            src={data?.aboutVideo?.titleUpImg}
            alt={data?.aboutVideo?.titleUpImgAlt}
            width={52}
            height={52}
          />

          <p className="text-[1.4rem] text-[#1E212C] font-[700]">
            {data?.aboutVideo?.titleUp}
          </p>
        </div>
        <div className="flex gap-[13rem]">
          <div className="">
            <Image
              src={data?.aboutVideo?.aboutVideoImg}
              alt={data?.aboutVideo?.aboutVideoImgAlt}
              width={810}
              height={500}
              className="max-w-[75rem]"
            />
          </div>
          <div className="flex flex-col justify-center">
            {data?.aboutVideo?.student?.map((item) => {
              return (
                <div key={item?.id} className="flex items-center gap-[1.6rem]">
                  <p className="text-[4.8rem] text-[#FF3F3A] font-[900]">
                    {item?.num}
                  </p>
                  <p className="text-[1.8rem] text-[#1E212C] font-[700]">
                    {item?.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutVideo;
