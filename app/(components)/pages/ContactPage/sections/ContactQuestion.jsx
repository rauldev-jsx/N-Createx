import QuestionForm from "@/app/(components)/forms/QuestionForm";
import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import React from "react";

const ContactQuestion = ({ data }) => {
  return (
    <section className="mb-[18rem]">
      <MaxWidth>
        <div className="flex gap-[10rem]">
          <div>
            <Image
              src={data?.img}
              alt={data?.imgAlt}
              width={435}
              height={481}
            />
          </div>
          <div>
            <p className="text-[1.6rem] text-[#1E212C] font-[700] uppercase">
              {data?.titleUp}
            </p>
            <h3 className="text-[4.6rem] text-[#1E212C] font-[900]">
              {data?.titleBottom}
            </h3>

            <QuestionForm formData={data} />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ContactQuestion;
