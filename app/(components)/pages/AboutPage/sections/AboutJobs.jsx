import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import TitleHeader from "@/app/(components)/shared_components/TitleHeader";

const AboutJobs = ({ data }) => {
  return (
    <section>
      <MaxWidth>
        <TitleHeader
          titleUp={data?.aboutJobs?.titleUp}
          titleBottom={data?.aboutJobs?.titleBottom}
          customClass="mb-[6rem]"
        />
      </MaxWidth>
    </section>
  );
};

export default AboutJobs;
