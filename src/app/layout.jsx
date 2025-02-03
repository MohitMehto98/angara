import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Antara | Classic Aquamarine and Diamond Three Stone Engagement Ring",
  description:
    "Explore the exquisite jewelry collection with detailed product information, including price breakdown, variations, and reviews.",
  keywords: "engagement ring, jewelry, aquamarine, diamond, gold, luxury",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Classic Aquamarine and Diamond Three Stone Engagement Ring",
    image: "https://via.placeholder.com/500x500?text=Main+Image",
    description:
      "A beautiful three-stone engagement ring featuring aquamarine and diamond.",
    sku: "SR0160AQ",
    brand: {
      "@type": "Brand",
      name: "Angara",
    },
  };

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProductProvider>
          <CartProvider>
            <Header />
            <div className="mt-16">{children}</div>
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
