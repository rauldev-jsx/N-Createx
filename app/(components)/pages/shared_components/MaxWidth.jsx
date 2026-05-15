const MaxWidth = ({ children, maxWidth = "", customClass = "" }) => {
  return (
    <div className={`max-w-[1232px] m-auto ${maxWidth}, ${customClass}`}>
      {children}
    </div>
  );
};

export default MaxWidth;
