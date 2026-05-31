import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import TitleHeader from "@/app/(components)/shared_components/TitleHeader";
import Image from "next/image";
import Link from "next/link";

const AboutJobs = ({ data }) => {
  return (
    <section className="bg-[#F4F5F6] pb-[10rem]">
      <MaxWidth>
        <TitleHeader
          titleUp={data?.aboutJobs?.titleUp}
          titleBottom={data?.aboutJobs?.titleBottom}
          customClass="pb-[6rem] text-center"
        />

        <div className="grid grid-cols-12 gap-x-[10rem] gap-y-[4rem]">
          {data?.aboutJobs?.jobs?.map((item) => {
            return (
              <div
                key={item?.id}
                className="col-span-2 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2"
              >
                <Link href={"/"}>
                  <Image
                    src={item?.jobImg}
                    alt={item?.jobImgAlt}
                    width={188}
                    height={144}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutJobs;
