"use client";
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
  const handleSubmit = async (e) => {};
  return (
    <div className={`${customClass}`}>
      <form onChange={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          maxLength={30}
          placeholder={formData?.footerUp?.footerForm?.placeholder}
          value={form.email}
          className="w-full text-[#FFFFFF] text-[1.2rem] text-[400] outline-none pl-[1.2rem] py-[0.9rem] bg-[#FFFFFF1F] border-[1px] border-[#FFFFFF33]"
        />
      </form>
    </div>
  );
};

export default FooterForm;
