import HomeMain from "./sections/HomeMain";

const HomePage = ({ homeData }) => {
  return (
    <main>
      <HomeMain data={homeData}/>
    </main>
  );
};

export default HomePage;
