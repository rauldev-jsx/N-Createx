"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
const HomeTestimonialCards = ({ cardData }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
      className="mySwiper"
    >
      {cardData?.homePageTestimonial?.testimonial?.map((item) => {
        return (
          <SwiperSlide
            className="bg-[#FFFFFF] px-[10rem] py-[6.4rem]"
            key={item?.id}
          >
            <div className="person-text flex gap-[1rem] mb-[2.4rem]">
              <p className="text-[2rem] text-[#424551] font-[400]">
                {item?.content}
              </p>
            </div>
            <div className="flex flex-row items-center gap-[2rem]">
              <Image
                src={item?.personImg}
                alt={item?.personImgAlt}
                width={72}
                height={72}
              />

              <div className="flex flex-col">
                <p className="text-[1.6rem] text-[#1E212C] font-[700]">
                  {item?.personTitle}
                </p>
                <p className="text-[1.4rem] text-[#787A80] font-[400]">
                  {item?.personText}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeTestimonialCards;
