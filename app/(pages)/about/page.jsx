import meta from "@/public/data/metadata.json";
import aboutPageData from "@/public/data/aboutpage_data.json";
import Header from "@/app/(components)/layout/Header";
import Footer from "@/app/(components)/layout/Footer";
import AboutPage from "@/app/(components)/pages/AboutPage/AboutPage";

const getData = () => {
  const metaData = meta?.metaData?.about;
  const aboutPage = aboutPageData;
  const header = meta?.header;
  const footer = meta?.footer;

  return { metaData, aboutPage, header, footer };
};

export async function generateMetadata() {
  try {
    const { metaData } = getData();

    return {
      title: metaData?.title,
      description: metaData?.description,
      keywords: metaData?.keywords,
      icons: {
        icon: metaData?.favicon,
        apple: metaData?.favicon,
      },
      url: metaData?.url,
    };
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}

export default function page() {
  const { aboutPage, header, footer } = getData();
  return (
    <>
      <Header headerData={header} />
      <AboutPage aboutData={aboutPage} />
      <Footer footerData={footer} />
    </>
  );
}
