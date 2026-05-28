import MaxWidth from "@/app/(components)/shared_components/MaxWidth";

const AboutProcess = ({ data }) => {
  return (
    <section>
      <MaxWidth>
        <div className="mb-[6rem]">
          <p className="text-[1.6rem] text-[#1E212C] font-[700]">
            {data?.aboutProcess?.titleUp}
          </p>
          <h3 className="text-[4.6rem] text-[#1E212C] font-[900]">
            {data?.aboutProcess?.titleBottom}
          </h3>
        </div>
        <div className="grid grid-cols-12">
          {data?.aboutProcess?.steps?.map((item) => {
            return <div key={item?.id}></div>;
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutProcess;
