import HomeAbout from "./sections/HomeAbout";
import HomeCourses from "./sections/HomeCourses";
import HomeMain from "./sections/HomeMain";

const HomePage = ({ homeData }) => {
  return (
    <main>
      <HomeMain data={homeData}/>
      <HomeAbout data={homeData}/>
      <HomeCourses data={homeData}/>
    </main>
  );
};

export default HomePage;
