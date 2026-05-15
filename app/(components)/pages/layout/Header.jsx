"use client";
import Image from "next/image";
import MaxWidth from "../shared_components/MaxWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ headerData }) => {
  const pathName = usePathname();
  return (
    <header className="mt-[3.5rem]">
      <MaxWidth customClass="grid grid-cols-12 items-center">
        <div className="col-span-2 justify-end">
          <Link href={"/"}>
            <Image
              src={headerData?.logoImg}
              width={130}
              height={22}
              alt={headerData?.logoImgAlt}
            />
          </Link>
        </div>

        <div className="col-span-6">
          <nav className="flex gap-[4rem]">
            {headerData?.links?.map((item) => {
              return (
                <Link
                  className={`${pathName === item?.url ? "text-[#FF3F3A] text-[1.6rem]  font-[700] outline-none" : "text-[1.6rem] text-[#424551] font-[700] outline-none"}`}
                  key={item?.id}
                  href={item?.url}
                >
                  {item?.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="col-span-4 justify-end gap-[3.6rem] flex items-center">
          <Link
            className="text-[1.6rem] text-[#FFFFFF] font-[700] bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] py-[1rem] px-[4rem] rounded-[0.4rem]"
            href={"/"}
          >
            {headerData?.buttons?.btn1}
          </Link>
          <div className="flex gap-[0.3rem] items-center">
            <div>
              <Image
                width={18}
                height={18}
                src={headerData?.buttons?.buttonIcoimg}
                alt={headerData?.buttons?.buttonIcoimgAlt}
              />
            </div>
            <Link
              className="text-[1.6rem] text-[#424551] font-[700]"
              href={"/"}
            >
              {headerData?.buttons?.btn2}
            </Link>
            <span className="text-[1.6rem] text-[#424551]">{"/"}</span>
            <Link
              className="text-[1.6rem] text-[#424551] font-[700]"
              href={"/"}
            >
              {headerData?.buttons?.btn3}
            </Link>
          </div>
        </div>
      </MaxWidth>
    </header>
  );
};

export default Header;
