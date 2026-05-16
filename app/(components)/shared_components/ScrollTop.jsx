"use client";
const ScrollTop = ({ customClass = "", scrollText }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <p className={customClass} onClick={handleClick}>
      {scrollText}
    </p>
  );
};

export default ScrollTop;
