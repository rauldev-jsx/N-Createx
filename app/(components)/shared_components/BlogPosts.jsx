import Image from "next/image";
import Link from "next/link";
import MaxWidth from "./MaxWidth";

const BlogPosts = ({ data }) => {
  return (
    <section className="mb-[18rem]">
      <MaxWidth>
        <div className="flex justify-between items-end mt-[8rem] mb-[6rem]">
          <div>
            <p className="text-[1.6rem] text-[#1E212C] font-[700] mb-[0.8rem]">
              {data?.titleUp}
            </p>
            <h3 className="text-[4.6rem] text-[#1E212C] font-[900]">
              {data?.titleBottom}
            </h3>
          </div>

          <Link
            className="btn-gradient text-[1.6rem] text-[#FFFFFF] font-[700] px-[4rem] py-[1rem] rounded-[0.4rem]"
            href={"/blog"}
          >
            {data?.button}
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-[3rem]">
          {data?.blog?.map((item) => {
            return (
              <div className="col-span-4 flex flex-col" key={item?.id}>
                <div className="relative">
                  <Image
                    src={item?.blogImg}
                    alt={item?.blogImgAlt}
                    width={390}
                    height={390}
                  />
                  <div className="absolute top-[1.2rem] left-[1.2rem] flex items-center gap-[0.4rem] bg-[#FFFFFF] px-[0.8rem] py-[0.3rem] rounded-[0.4rem]">
                    <Image
                      src={item?.positionImg}
                      alt={item?.positionImgAlt}
                      width={16}
                      height={16}
                    />
                    <span>{item?.position}</span>
                  </div>
                </div>

                <div className="mt-[1.6rem]">
                  <div className="flex flex-row mb-[0.8rem]">
                    <p className="text-before text-[1.4rem] text-[#787A80] font-[700] pr-[1.2rem]">
                      {item?.positionDate?.text}
                    </p>
                    <div className="flex items-center gap-[0.8rem]">
                      <Image
                        src={item?.positionDate?.calendarImg}
                        alt={item?.positionDate?.calendarImgAlt}
                        width={16}
                        height={16}
                      />
                      <p className="text-before text-[1.4rem] text-[#787A80] font-[400] pr-[1.2rem]">
                        {item?.positionDate?.date}
                      </p>
                    </div>
                    {item?.positionDate?.time && (
                      <div className="flex items-center gap-[0.8rem]">
                        <Image
                          src={item?.positionDate?.timeimg}
                          alt={item?.positionDate?.timeImgAlt}
                          width={16}
                          height={16}
                        />
                        <p className="text-[1.4rem] text-[#787A80] font-[400]">
                          {item?.positionDate?.time}
                        </p>
                      </div>
                    )}
                  </div>
                  <h4 className="text-[2rem] text-[#1E212C] font-[700] mb-[0.8rem]">
                    {item?.title}
                  </h4>
                  <p className="text-[1.6rem] text-[#424551] font-[400] mb-[1.6rem]">
                    {item?.text}
                  </p>

                  <Link
                    className="text-[1.6rem] text-[#1E212C] font-[700] inline-flex items-center gap-[0.8rem] hover:text-[#FF3F3A] transition"
                    href={"/blog"}
                  >
                    {item?.link}
                    <Image
                      src={item?.arrowimg}
                      alt={item?.arrowimgAlt}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default BlogPosts;
