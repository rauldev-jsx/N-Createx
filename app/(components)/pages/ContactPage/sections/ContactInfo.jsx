import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = ({ data }) => {
  return (
    <section className="mt-[8rem] mb-[18rem]">
      <MaxWidth>
        <div className="flex justify-between">
          <div>
            <p className="text-[1.6rem] text-[#1E212C] font-[700] uppercase">
              {data?.titleUp}
            </p>
            <h3 className="text-[4.6rem] text-[#1E212C] font-[900] mb-[4rem]">
              {data?.titleBottom}
            </h3>

            <div className="flex flex-col gap-[2.4rem] mb-[4.8rem]">
              {data?.contact?.map((item) => {
                return (
                  <div
                    className="flex flex-row items-center gap-[1.3rem]"
                    key={item?.id}
                  >
                    <Image
                      src={item?.icoImg}
                      alt={item?.icoImgAlt}
                      width={24}
                      height={24}
                    />
                    <div className="flex flex-col">
                      <span className="text-[1.4rem] text-[#787A80] font-[700]">
                        {item?.titleUp}
                      </span>
                      <p className="text-[1.8rem] text-[#1E212C] font-[400]">
                        {item?.titleBottom}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h4 className="text-[1.6rem] text-[#1E212C] font-[700] uppercase mb-[2.4rem]">
              {data?.socialTtitle}
            </h4>
            <div className="flex gap-[3.2rem]">
              {data?.social?.map((item) => {
                return (
                  <Link key={item?.id} href={item?.url}>
                    <Image
                      src={item?.iconImg}
                      alt={item?.iconImgAlt}
                      width={24}
                      height={24}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <Image
              src={data?.mapImg}
              alt={data?.mapImgAlt}
              width={705}
              height={412}
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ContactInfo;
