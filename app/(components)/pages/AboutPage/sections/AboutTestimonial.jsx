import HomeTestimonialCards from "@/app/(components)/shared_components/HomeTestimonialCards";
import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import TitleHeader from "@/app/(components)/shared_components/TitleHeader";

const AboutTestimonial = ({ data }) => {
  return (
    <section className="bg-[#F4F5F6] pt-[10rem] pb-[18rem]">
      <MaxWidth>
        <TitleHeader
          titleUp={data?.aboutTesimonial?.titleUp}
          titleBottom={data?.aboutTesimonial?.titleBottom}
          customClass="mb-[6rem] text-center"
        />

        <HomeTestimonialCards cardData={data?.aboutTesimonial?.testimonial} />
      </MaxWidth>
    </section>
  );
};

export default AboutTestimonial;
