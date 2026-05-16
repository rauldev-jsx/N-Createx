import meta from "@/public/data/metadata.json";
import Header from "./(components)/layout/Header";
import Footer from "./(components)/layout/Footer";
import "./globals.css";

const getData = () => {
  const header = meta?.header;
  const footer = meta?.footer;
  return { header, footer };
};

export default function RootLayout({ children }) {
  const { header, footer } = getData();
  return (
    <html lang="en">
      <body>
        <Header headerData={header} />
        {children}
        <Footer footerData={footer} />
      </body>
    </html>
  );
}
