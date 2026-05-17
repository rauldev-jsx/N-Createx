"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const HomeTeamCards = ({ cardData }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {cardData?.homePageTeam?.team?.map((item) => {
        return (
          <SwiperSlide key={item?.id}>
            <div className="bg-[#FFCF2D] px-[2rem] pt-[2rem] mb-[1.6rem]">
              <Image
                src={item?.teamImg}
                alt={item?.teamImgAlt}
                width={245}
                height={320}
              />
            </div>
            <div className="text-center">
              <p className="text-[2rem] text-[#424551] font-[700]">
                {item?.title}
              </p>
              <p className="text-[1.6rem] text-[#787A80] font-[400]">{item?.text}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeTeamCards;
