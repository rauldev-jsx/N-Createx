import BlogPosts from "../../shared_components/BlogPosts";
import Subscribe from "../../shared_components/Subscribe";
import AboutJobs from "./sections/AboutJobs";
import AboutProcess from "./sections/AboutProcess";
import AboutScholl from "./sections/AboutScholl";
import AboutTeach from "./sections/AboutTeach";
import AboutTeam from "./sections/AboutTeam";
import AboutTestimonial from "./sections/AboutTestimonial";
import AboutValues from "./sections/AboutValues";
import AboutVideo from "./sections/AboutVideo";

const AboutPage = ({ aboutData }) => {
  return (
    <main>
      <AboutScholl data={aboutData} />
      <AboutVideo data={aboutData} />
      <AboutValues data={aboutData} />
      <AboutTeach data={aboutData} />
      <AboutProcess data={aboutData} />
      <AboutTeam data={aboutData} />
      <AboutTestimonial data={aboutData} />
      <AboutJobs data={aboutData} />
      <BlogPosts data={aboutData?.aboutBlog} />
      <Subscribe data={aboutData} />
    </main>
  );
};

export default AboutPage;
