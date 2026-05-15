import meta from "@/public/data/metadata.json";
import homepageData from "@/public/data/homepage_data.json";
import Header from "./(components)/pages/layout/Header";
import HomePage from "./(components)/pages/HomePage/HomePage";
import Footer from "./(components)/pages/layout/Footer";

const getData = () => {
  const metaData = meta?.metaData?.homePage;
  const header = meta?.header;
  const footer = meta?.footer;
  const homePage = homepageData;

  return { metaData, header, footer, homePage };
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
  const { homePage, header, footer } = getData();
  return (
    <>
      <Header headerData={header} />
      <HomePage />
      <Footer footerData={footer} />
    </>
  );
}
