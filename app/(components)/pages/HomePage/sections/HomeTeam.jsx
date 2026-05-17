import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import HomeTeamCards from "../components/HomeTeamCards";

const HomeTeam = ({ data }) => {
  return (
    <section className="bg-[#F4F5F6] py-[10rem]">
      <MaxWidth>
        <div className="mb-[6rem]">
          <p className="mb-[0.8rem] text-[1.6rem] text-[#1E212C] font-[700]">
            {data?.homePageTeam?.titleUp}
          </p>
          <h3 className="text-[4.6rem] text-[#1E212C] font-[900]">{data?.homePageTeam?.titleBottom}</h3>
        </div>
        <div>
            <HomeTeamCards cardData={data}/>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeTeam;
