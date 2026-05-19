import Subscribe from "../../shared_components/Subscribe";
import HomeAbout from "./sections/HomeAbout";
import HomeBenefits from "./sections/HomeBenefits";
import HomeBlog from "./sections/HomeBlog";
import HomeCertificate from "./sections/HomeCertificate";
import HomeCourses from "./sections/HomeCourses";
import HomeEvents from "./sections/HomeEvents";
import HomeMain from "./sections/HomeMain";
import HomeTeam from "./sections/HomeTeam";
import HomeTestimonial from "./sections/HomeTestimonial";

const HomePage = ({ homeData }) => {
  return (
    <main>
      <HomeMain data={homeData} />
      <HomeAbout data={homeData} />
      <HomeCourses data={homeData} />
      <HomeBenefits data={homeData} />
      <HomeEvents data={homeData} />
      <HomeCertificate data={homeData} />
      <HomeTeam data={homeData} />
      <HomeTestimonial data={homeData} />
      <HomeBlog data={homeData} />
      <Subscribe data={homeData}/>
    </main>
  );
};

export default HomePage;
