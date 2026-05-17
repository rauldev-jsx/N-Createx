import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import TitleHeader from "@/app/(components)/shared_components/TitleHeader";
import HomeTestimonialCards from "../components/HomeTestimonialCards";

const HomeTestimonial = ({ data }) => {
  return (
    <section className="bg-[#F4F5F6]">
      <MaxWidth>
        <TitleHeader
          titleUp={data?.homePageTestimonial?.titleUp}
          titleBottom={data?.homePageTestimonial?.titleBottom}
          customClass="mb-[6rem]"
        />

        <div className="pb-[8rem]">
            <HomeTestimonialCards cardData={data}/>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeTestimonial;
