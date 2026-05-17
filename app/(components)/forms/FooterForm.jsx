"use client";
import Image from "next/image";
import { useState } from "react";

const FooterForm = ({ formData, customClass = "" }) => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const cleaned = value.replace(/[^A-Za-z0-9@\._\-]/g, "").toLowerCase();
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-[1.2rem]">
      <input
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        maxLength={30}
        placeholder={formData?.footerUp?.footerForm?.placeholder}
        value={form.email}
        className="w-full text-[#FFFFFF] text-[1.2rem] font-[400] outline-none pl-[1.2rem] py-[0.9rem] bg-[#FFFFFF1F] border-[1px] border-r-0 border-[#FFFFFF33]"
      />
      <button
        type="submit"
        className="flex bg-[#FFFFFF1F] items-center justify-center px-[1.2rem] shrink-0 border-[1px] border-l-0 border-[#FFFFFF33]"
      >
        <Image
          src={formData?.footerUp?.footerForm?.formArrowImg}
          alt={formData?.footerUp?.footerForm?.formArrowAlt}
          width={16}
          height={16}
        />
      </button>
    </form>
  );
};

export default FooterForm;
