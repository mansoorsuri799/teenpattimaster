import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ORGANIZATION_JSON_LD } from "@/lib/appFacts";
import { IMAGES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#071412",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Teen Patti Master APK Pakistan — JazzCash Download",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Install Teen Patti Master v1.4(1) from teenpattimastergame.com.pk. Open Teen Patti, Dragon vs Tiger, and Rummy, then move PKR on JazzCash or EasyPaisa.",
  authors: [{ name: `${SITE_NAME} Team` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
      { url: IMAGES.logo, type: "image/webp", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    title: "Teen Patti Master APK Pakistan — JazzCash Download",
    description:
      "Teen Patti Master APK for Android in Pakistan. JazzCash and EasyPaisa wallets, on-domain install steps, and a 3Patti Master lobby.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.og}`,
        width: 512,
        height: 512,
        alt: "Teen Patti Master official APK icon for Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Master APK Pakistan — JazzCash Download",
    description:
      "Teen Patti Master APK for Android in Pakistan. JazzCash and EasyPaisa wallets, on-domain install steps, and a 3Patti Master lobby.",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.twitter}`,
        width: 512,
        height: 512,
        alt: "Teen Patti Master official APK icon for Pakistan",
      },
    ],
  },
  applicationName: SITE_NAME,
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href={IMAGES.logo} type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(14, 31, 28, 0.55) 0%, rgba(7, 20, 18, 0.02) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
