import Image from "next/image";
import SubscribeForm from "../forms/SubscribeForm";

const Subscribe = ({ data }) => {
  return (
    <section className="bg-[#FDDDD4] pt-[12rem]">
      <div className="flex justify-center items-center flex-col">
        <div className="mb-[6rem] text-center">
          <p className="uppercase text-[1.6rem] text-[#1E212C] font-[700] mb-[0.8rem]">
            {data?.subscribeData?.titleUp}
          </p>
          <h3 className="max-w-[670px] text-[4.6rem] text-[#1E212C] font-[900]">
            {data?.subscribeData?.titleBittom}
          </h3>
        </div>
        <div>
          <SubscribeForm formData={data} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={data?.subscribeData?.subscribeImg}
            alt={data?.subscribeData?.subscribeImgAlt}
            width={354}
            height={246}
          />
        </div>
        <div>
          <Image
            src={data?.subscribeData?.subscribeImg}
            alt={data?.subscribeData?.subscribeImgAlt}
            width={354}
            height={246}
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
