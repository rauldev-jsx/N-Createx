import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Tabs from "@/app/(components)/shared_components/Tabs";
import TitleHeader from "@/app/(components)/shared_components/TitleHeader";

const HomeBenefits = ({ data }) => {
  return (
    <section className="mb-[12rem]">
      <MaxWidth>
        <TitleHeader
          titleUp={data?.homePageBenefits?.titleUp}
          titleBottom={data?.homePageBenefits?.titleBottom}
          customClass="mb-[6rem]"
        />

        <Tabs tabData={data}/>
      </MaxWidth>
    </section>
  );
};

export default HomeBenefits;
