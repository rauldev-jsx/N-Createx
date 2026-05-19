import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import TitleHeader from "@/app/(components)/shared_components/TitleHeader";
import Link from "next/link";

const HomeEvents = ({ data }) => {
  return (
    <section className="bg-[#FDDDD4] py-[8rem]">
      <MaxWidth>
        <TitleHeader
          titleUp={data?.homePageEvents?.titleUp}
          titleBottom={data?.homePageEvents?.titleBottom}
          customClass="mb-[6rem]"
        />

        <div className="flex flex-col gap-[2.4rem] pb-[6rem]">
          {data?.homePageEvents?.eventList?.map((item) => {
            return (
              <div
                className="card-shadow bg-[#ffffff] justify-between flex flex-row items-center p-[3.2rem]"
                key={item?.id}
              >
                <div className="flex flex-row items-center gap-[2rem] shrink-0">
                  <span className="text-[4.8rem] text-[#FF3F3A] font-[900]">
                    {item?.num}
                  </span>
                  <div className="flex flex-col">
                    <p className="text-[2rem] text-[#1E212C] font-[700] mb-[0.4rem]">
                      {item?.month}
                    </p>
                    <p className="text-[1.6rem] text-[#787A80] font-[400]">
                      {item?.time}
                    </p>
                  </div>
                </div>
                <div className="flex-1 mx-[4rem]">
                  <p className="text-[2rem] text-[#1E212C] font-[700] mb-[0.4rem]">
                    {item?.title}
                  </p>
                  <p className="text-[1.6rem] text-[#787A80] font-[400]">
                    {item?.text}
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    className="text-[1.4rem] text-[#FF3F3A] font-[700] px-[3.2rem] py-[1.2rem] main-link-out"
                    href={"/events"}
                  >
                    {item?.button}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center flex-wrap gap-[4rem]">
          <p className="text-[2.8rem] text-[#1E212C] font-[700]">
            {data?.homePageEvents?.eventButtonText}
          </p>
          <Link
            className="text-[1.6rem] text-[#FFFFFF] font-[700] py-[1rem] px-[4rem] rounded-[0.4rem] btn-gradient"
            href={"/events"}
          >
            {data?.homePageEvents?.button}
          </Link>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeEvents;
