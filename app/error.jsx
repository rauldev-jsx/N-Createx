"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-[#FDDDD4] flex flex-col items-center justify-center min-h-screen gap-[2rem]">
      <h2 className="text-[3rem] font-[600] text-[#000000]">
        {"Something went wrong!"}
      </h2>
      <button onClick={reset} className="btn-6">
        <span className="text-[2rem]">{"Try again"}</span>
      </button>
    </div>
  );
};
export default Error;
