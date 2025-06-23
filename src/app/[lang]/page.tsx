import HeaderOne from "@/layouts/Headers/HeaderOne";
import HomeOnePage from "./(homes)/home-one/page";
import BackToTop from "@/components/Common/BackToTop";
import Wrapper from "@/layouts/Wrapper";
import CommonFooter from "@/layouts/Footers/CommonFooter";

import "@/styles/common.scss"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Zone – Find Property to Buy or Rent",
  description:
    "Discover real estate opportunities with Top Zone. Buy, sell, or rent properties with a user-friendly interface and powerful search.",
  keywords: [
    "real estate",
    "property",
    "apartments for sale",
    "houses for rent",
    "Top Zone real estate",
    "buy property Uzbekistan",
  ],
  openGraph: {
    title: "Top Zone – Real Estate Listings",
    description:
      "Browse and discover the latest property listings for rent and sale. Powered by Next.js.",
    url: "https://topzone.uz",
    siteName: "Top Zone",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Zone Real Estate",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Zone – Property Search Platform",
    description: "Find your dream property with Top Zone.",
    creator: "@topzone",
    images: ["/og-image.jpg"],
  },
};

const Home = () => {
  return (
    <>
      <Wrapper>
        <HeaderOne />
        <main>
          <HomeOnePage />
        </main>
        <BackToTop />
        <CommonFooter />
      </Wrapper>
    </>
  );
};

export default Home;
