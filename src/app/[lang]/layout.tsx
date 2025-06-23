import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import GlobalVideoModal from "@/components/Popup/GlobalVideoModal";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import ReduxProvider from "@/redux/provider";
import "slick-carousel/slick/slick.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "swiper/css/bundle";
import "./globals.scss";


// Load Plus Jakarta Sans from Google Fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Load Geist Sans & Geist Mono
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Zone – Real Estate Platform",
  description:
    "Top Zone is a modern, customizable Next.js platform for real estate listings, agencies, and property businesses. Explore properties with ease.",
  keywords: [
    "real estate",
    "property listings",
    "buy apartment",
    "rent house",
    "Next.js real estate site",
    "Top Zone",
  ],
  authors: [{ name: "TopZone Team", url: "https://topzone.uz" }],
  openGraph: {
    title: "Top Zone – Modern Real Estate Listings",
    description:
      "Explore, buy or rent properties effortlessly with Top Zone – a sleek real estate platform powered by Next.js.",
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
    title: "Top Zone – Real Estate Made Simple",
    description:
      "Find your dream home or investment property with Top Zone.",
    creator: "@topzone",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <VideoProvider>
            <AppProvider>
              {children}
            </AppProvider>
            <Toaster position="top-center" richColors />
            <GlobalVideoModal />
          </VideoProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
