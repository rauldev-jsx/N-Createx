import meta from "@/public/data/metadata.json";
import contactPageData from "@/public/data/contactpage_data.json";
import Header from "@/app/(components)/layout/Header";
import Footer from "@/app/(components)/layout/Footer";
import ContactPage from "@/app/(components)/pages/ContactPage/ContactPage";

const getData = () => {
  const metaData = meta?.metaData?.contact;
  const contactPage = contactPageData;
  const header = meta?.header;
  const footer = meta?.footer;

  return { metaData, contactPage, header, footer };
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
  const { contactPage, header, footer } = getData();

  return (
    <>
      <Header headerData={header} />
      <ContactPage contactData={contactPage} />
      <Footer footerData={footer} />
    </>
  );
}
