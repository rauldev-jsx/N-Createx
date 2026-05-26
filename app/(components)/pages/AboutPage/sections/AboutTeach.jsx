import React from "react";

const AboutTeach = ({ data }) => {
  return (
    <section>
      <div className="text-center">
        <p className="text-[1.6rem] text-[#1E212C] font-[700]">
          {data?.aboutTeach?.titleUp}
        </p>
        <h3 className="text-[4.6rem] text-[#1E212C] font-[900]">
          {data?.aboutTeach?.titleBottom}
        </h3>
      </div>
    </section>
  );
};

export default AboutTeach;
