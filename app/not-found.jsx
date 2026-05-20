import Link from "next/link";

const NotFound = async () => {
  return (
    <div className="bg-[#FDDDD4] flex flex-col items-center justify-center min-h-screen gap-[2rem]">
      <h1 className="text-[8rem] font-[700] text-[#000000]">{"404"}</h1>
      <h2 className="text-[3rem] font-[600] text-[#000000]">
        {"Page not found"}
      </h2>
      <p className="text-[1.8rem] text-[#000000]">
        {"The page you are looking for does not exist or has been removed."}
      </p>
      <Link href="/">
        <span className="text-[2rem]">{"Home"}</span>
      </Link>
    </div>
  );
};
export default NotFound;
