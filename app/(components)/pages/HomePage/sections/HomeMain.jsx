import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const HomeMain = ({ data }) => {
  return (
    <section className="bg-[#FDDDD4] mt-[-8rem]">
      <MaxWidth>
        <div className="grid grid-cols-12 gap-[8rem] pt-[180px] pb-[90px]">
          <div className="col-span-6">
            <Link
              className="text-[#1E212C] text-[1.4rem] font-[700] flex items-center gap-[1.6rem] group mb-[2.4rem]"
              href={"/"}
            >
              <Image
                src={data?.homePageMain?.titlePlayIco}
                alt={data?.homePageMain?.titlePlayAlt}
                width={52}
                height={52}
                className="transition rounded-full group-hover:shadow-[0_0_0_14px_rgba(231,99,88,0.2)]"
              />
              {data?.homePageMain?.titlePlay}
            </Link>

            <h1 className="text-[6.4rem] text-[#1E212C] font-[900] mb-[6rem] max-w-[500px]">
              {data?.homePageMain?.title}
            </h1>

            <div className="flex items-center gap-[2.4rem]">
              <Link
                className="text-[1.6rem] text-[#FF3F3A] font-[700] py-[1rem] px-[4rem] main-link-out"
                href={"/about"}
              >
                {data?.homePageMain?.btn1}
              </Link>
              <Link
                className="text-[1.6rem] text-[#FFFFFF] font-[700] py-[1rem] px-[4rem] bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] rounded-[0.4rem] btn-gradient"
                href={"/courses"}
              >
                {data?.homePageMain?.btn2}
              </Link>
            </div>
          </div>
          <div className="col-span-6">
            <Image
              src={data?.homePageMain?.titleImg}
              alt={data?.homePageMain?.titleImgAlt}
              width={602}
              height={551}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 pb-[6rem]">
          {data?.homePageMain?.explore?.map((item) => {
            return (
              <div className="col-span-3 flex items-center gap-[1.2rem] justify-center">
                <p className="text-[4.6rem] text-[#1E212C] font-[900]">
                  {item?.num}
                </p>
                <p className="text-[1.6rem] text-[#1E212C] font-[400]">
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

export default HomeMain;
