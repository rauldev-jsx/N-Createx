"use client";
import { useState } from "react";

const SubscribeForm = ({ formData }) => {
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
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-[3.2rem]">
      <input
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        maxLength={30}
        placeholder={formData?.subscribeData?.placeholder}
        value={form.email}
        className="flex-1 text-[1.6rem] text-[#9A9CA5] font-[400] py-[1.3rem] pl-[1.6rem] outline-none w-[42rem]"
      />
      <button
        className="btn-gradient text-[1.6rem] text-[#FFFFFF] font-[700] px-[4rem] py-[1.3rem] rounded-[0.4rem] whitespace-nowrap"
        type="submit"
      >
        {formData?.subscribeData?.button}
      </button>
    </form>
  );
};

export default SubscribeForm;
