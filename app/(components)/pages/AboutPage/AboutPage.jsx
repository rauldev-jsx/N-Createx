import Subscribe from "../../shared_components/Subscribe";
import AboutProcess from "./sections/AboutProcess";
import AboutScholl from "./sections/AboutScholl";
import AboutTeach from "./sections/AboutTeach";
import AboutValues from "./sections/AboutValues";
import AboutVideo from "./sections/AboutVideo";

const AboutPage = ({ aboutData }) => {
  return (
    <main>
      <AboutScholl data={aboutData} />
      <AboutVideo data={aboutData} />
      <AboutValues data={aboutData} />
      <AboutTeach data={aboutData} />
      <AboutProcess data={aboutData}/>
      <Subscribe data={aboutData} />
    </main>
  );
};

export default AboutPage;
