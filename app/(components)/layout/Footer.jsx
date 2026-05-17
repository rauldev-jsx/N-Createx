import Image from "next/image";
import MaxWidth from "../shared_components/MaxWidth";
import Link from "next/link";
import FooterForm from "../forms/FooterForm";
import ScrollTop from "../shared_components/ScrollTop";

const Footer = ({ footerData }) => {
  return (
    <footer className="bg-[#1E212C]">
      <MaxWidth>
        <div className="grid grid-cols-12 gap-[8rem] pt-[8rem] pb-[6rem]">
          <div className="col-span-4">
            <div className="mb-[2.4rem]">
              <Link href={"/"}>
                <Image
                  src={footerData?.footerUp?.footerLogoImg}
                  alt={footerData?.footerUp?.footerLogoAlt}
                  width={130}
                  height={20}
                />
              </Link>
            </div>
            <div className="mb-[3.8rem]">
              <p className="text-[#ffffff72] text-[1.2rem] font-[400]">
                {footerData?.footerUp?.footerDesc}
              </p>
            </div>
            <div className="flex items-center gap-[2rem]">
              {footerData?.footerUp?.footerSocialIcons?.map((item) => (
                <Link href={item?.imgUrl} key={item?.id}>
                  <Image
                    src={item?.img}
                    alt={item?.alt ?? ""}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-4 grid grid-cols-12 gap-[5rem]">
            <div className="col-span-3">
              <p className="text-[1.6rem] font-[700] text-white uppercase mb-[1.2rem]">
                {footerData?.footerUp?.footerSiteMap?.title}
              </p>
              <div className="flex flex-col gap-[0.8rem]">
                {footerData?.footerUp?.footerSiteMap?.links?.map((item) => (
                  <Link
                    className="text-[1.6rem] text-[#ffffff72] transition hover:text-white"
                    key={item?.id}
                    href={item?.url}
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-3">
              <p className="text-[1.6rem] font-[700] text-white uppercase mb-[1.2rem]">
                {footerData?.footerUp?.footerCourses?.title}
              </p>
              <div className="flex flex-col gap-[0.8rem]">
                {footerData?.footerUp?.footerCourses?.links?.map((item) => (
                  <Link
                    className="text-[1.6rem] text-[#ffffff72] font-[400] transition hover:text-white"
                    key={item?.id}
                    href={item?.url}
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-5">
              <p className="text-[1.6rem] font-[700] text-white uppercase mb-[1.2rem]">
                {footerData?.footerUp?.footerContact?.title}
              </p>
              <div className="flex flex-col gap-[0.8rem] mb-[3rem]">
                <div className="flex flex-row items-center gap-[1.1rem]">
                  <Image
                    src={footerData?.footerUp?.footerContact?.telIcoImg}
                    width={16}
                    height={16}
                    alt={footerData?.footerUp?.footerContact?.telIcoImgAlt}
                  />

                  <a
                    className="text-[1.6rem] text-[#ffffff72] font-[400]"
                    href={footerData?.footerUp?.footerContact?.tel}
                  >
                    {footerData?.footerUp?.footerContact?.tel}
                  </a>
                </div>
                <div className="flex flex-row items-center gap-[1.1rem]">
                  <Image
                    src={footerData?.footerUp?.footerContact?.emailIcoImg}
                    alt={footerData?.footerUp?.footerContact?.emailIcoImgAlt}
                    width={16}
                    height={16}
                  />

                  <a
                    className="text-[1.6rem] text-[#ffffff72] font-[400]"
                    href={footerData?.footerUp?.footerContact?.email}
                  >
                    {footerData?.footerUp?.footerContact?.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col ml-[8rem]">
            <p className="text-[1.6rem] font-[700] text-white uppercase mb-[2.4rem]">
              {footerData?.footerUp?.footerForm?.title}
            </p>

            <FooterForm formData={footerData} customClass="mb-[2.4rem]" />

            <p className="w-full text-[1rem] text-[#FFFFFF] font-[400]">
              {footerData?.footerUp?.footerForm?.desc}
            </p>
          </div>
        </div>
      </MaxWidth>
      <div className="bg-[#ffffff18] py-[2rem]">
        <MaxWidth>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[1.2rem] text-[#FFFFFF] font-[400]">
                {footerData?.footerBottom?.copyright}
              </p>
            </div>
            <div>
              <ScrollTop
                scrollText={footerData?.footerBottom?.gotop}
                customClass="cursor-pointer uppercase text-[1.4rem] text-[#FFFFFF] font-[700] hover:underline transition"
              />
            </div>
          </div>
        </MaxWidth>
      </div>
    </footer>
  );
};

export default Footer;
