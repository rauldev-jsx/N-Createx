import meta from "@/public/data/metadata.json";
import homepageData from "@/public/data/homepage_data.json";
import HomePage from "./(components)/pages/HomePage/HomePage";


const getData = () => {
  const metaData = meta?.metaData?.homePage;
  const homePage = homepageData;

  return { metaData, homePage };
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
  const { homePage} = getData();
  return (
    <>
      <HomePage homeData={homePage} />
    </>
  );
}
