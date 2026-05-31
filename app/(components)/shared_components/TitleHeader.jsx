const TitleHeader = ({ titleUp, titleBottom, customClass = "" }) => {
  return (
    <div className={`${customClass}`}>
      <p className="text-[1.6rem] text-[#1E212C] font-[700]">
        {titleUp}
      </p>
      <h3 className="text-[4.6rem] text-[#1E212C] font-[900]">{titleBottom}</h3>
    </div>
  );
};

export default TitleHeader;
