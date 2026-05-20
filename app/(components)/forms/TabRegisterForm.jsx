"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TabRegisterForm = ({ formData, setType }) => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputsData = [
    {
      inputTitle: formData?.regForm?.fullName,
      type: "text",
      name: "fullname",
      id: "fullname",
      maxLength: 30,
      minLength: 2,
      pattern: "[A-Za-zА-Яа-яЁёƏəĞğİiIıÖöÜüÇçŞş\s]+",
      placeholder: formData?.regForm?.placeholderFullName,
      value: form.fullname,
    },
    {
      inputTitle: formData?.regForm?.email,
      type: "email",
      name: "email",
      id: "email",
      maxLength: 30,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
      placeholder: formData?.regForm?.placeholderEmail,
      value: form.email,
    },
    {
      inputTitle: formData?.regForm?.password,
      type: "password",
      name: "password",
      id: "password",
      pattern: "[A-Za-z0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]+",
      placeholder: formData?.regForm?.placeholderPassword,
      maxLenght: 30,
      value: form.password,
    },
    {
      inputTitle: formData?.regForm?.confirmPassword,
      type: "password",
      name: "confirm",
      id: "confirm",
      pattern: "[A-Za-z0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]+",
      placeholder: formData?.regForm?.placeholderConfirmPassword,
      maxLength: 30,
      value: form.confirm,
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullname") {
      const cleaned = value.replace(/[^A-Za-zА-Яа-яЁёƏəĞğİiIıÖöÜüÇçŞş\s]/g, "");
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "email") {
      const cleaned = value.replace(/[^A-Za-z0-9@\._\-]/g, "").toLowerCase();
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "password") {
      const cleaned = value.replace(
        /[^A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
        "",
      );
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "confirm") {
      const cleaned = value.replace(
        /[^A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
        "",
      );
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullname || !form.email || !form.password || !form.confirm) {
      alert("TEST:Please fill in all fields!");
      return;
    }

    if (form.password !== form.confirm) {
      alert("TEST:passwords don't match!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setForm({
        fullname: "",
        email: "",
        password: "",
        confirm: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };
  return (
    <>
      <div className="text-center">
        <h3 className="text-[2.8rem] text-[#1E212C] font-[700] mb-[2.4rem]">
          {formData?.regForm?.title}
        </h3>
        <p className="text-[1.4rem] text-[#787A80] font-[400] mb-[2.4rem]">
          {formData?.regForm?.text}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          {inputsData?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <p className="text-[1.4rem] text-[#424551] font-[400] mb-[0.8rem]">
                  {item?.inputTitle}
                </p>
                <input
                  onChange={handleChange}
                  id={item?.id}
                  type={item?.type}
                  name={item?.name}
                  maxLength={item?.maxLenght}
                  minLength={item?.minLength}
                  pattern={item?.pattern}
                  placeholder={item?.placeholder}
                  value={item?.value}
                  className="border-[1px] border-[#D7DADD] pl-[1.6rem] py-[1.2rem] text-[1.4rem] text-[#9A9CA5] font-[400] mb-[3.2rem] outline-none"
                />
              </React.Fragment>
            );
          })}
          {success && (
            <p className="text-[1.6rem] mb-[1.6rem]">{"Successfully sent!"}</p>
          )}
          <div className="flex items-center gap-[1rem] mb-[2.4rem]">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="w-[1.6rem] h-[1.6rem] accent-[#FF3F3A] cursor-pointer"
            />
            <label
              htmlFor="remebmer"
              className="text-[1.4rem] text-[#424551] font-[400]"
            >
              {formData?.regForm?.rememberMe}
            </label>
          </div>
          <button
            className="text-[1.4rem] text-[#FFFFFF] font-[700] btn-gradient py-[1.1rem] rounded-[0.4rem]"
            type="submit"
            disabled={loading}
          >
            {loading ? "Waiting..." : formData?.regForm?.signUp}
          </button>
        </div>
      </form>
      <div className="flex items-center my-[2.4rem]">
        <p className="text-[1.4rem] text-[#424551] font-[400]">
          {formData?.regForm?.account}
        </p>

        <button
          type="button"
          onClick={() => setType("login")}
          className="text-[1.4rem] text-[#FF3F3A] font-[400] pl-[0.2rem]"
        >
          {formData?.regForm?.signUp}
        </button>
      </div>
      <div className="text-center">
        <p className="text-[1.4rem] text-[#787A80] font-[400] mb-[1.6rem]">
          {formData?.regForm?.orSignUpWith}
        </p>
        <div className="flex items-center justify-center gap-[1.3rem]">
          {formData?.regForm?.social?.map((item) => {
            return (
              <Link key={item?.id} href={item?.url}>
                <Image src={item?.img} alt={item?.alt} height={24} width={24} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TabRegisterForm;
