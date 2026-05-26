import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const AboutScholl = ({ data }) => {
  return (
    <section>
      <MaxWidth>
        <div className="grid grid-cols-12 my-[12rem]">
          <div className="col-span-6">
            <p className="text-[1.6rem] text-[#1E212C] font-[700]">
              {data?.aboutSchool?.titleUp}
            </p>
            <h3 className="text-[4.6rem] text-[#1E212C] font-[900] mb-[4.8rem]">
              {data?.aboutSchool?.titleBottom}
            </h3>
            <p className="text-[2rem] text-[#1E212C] font-[700] mb-[2.4rem]">
              {data?.aboutSchool?.text1}
            </p>
            <p className="text-[1.6rem] text-[#424551] font-[400] mb-[6rem]">
              {data?.aboutSchool?.text2}
            </p>

            <div className="flex items-center gap-[2.4rem]">
              <Link
                className="text-[1.6rem] text-[#FF3F3A] font-[700] main-link-out py-[1rem] px-[4rem]"
                href={"/events"}
              >
                {data?.aboutSchool?.btnLink1}
              </Link>
              <Link
                className="text-[1.6rem] text-[#FFFFFF] font-[700] btn-gradient py-[1rem] px-[4rem]"
                href={"/cources"}
              >
                {data?.aboutSchool?.btnLink2}
              </Link>
            </div>
          </div>
          <div className="col-span-6 flex justify-end">
            <Image
              src={data?.aboutSchool?.aboutTitleImg}
              alt={data?.aboutSchool?.aboutTitleImgAlt}
              width={465}
              height={400}
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutScholl;
