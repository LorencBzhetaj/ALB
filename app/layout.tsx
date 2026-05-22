import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ALB Custom Painting & Remodeling LLC | Metro Detroit",
    template: "%s | ALB Custom Painting & Remodeling",
  },
  description: "Metro Detroit's trusted remodeling experts. Kitchen, bathroom, painting, tile, fire & water restoration, home building. Family-owned. Free estimates. Call 248-245-5220.",
  keywords: ["remodeling", "painting", "bathroom remodel", "kitchen remodel", "Metro Detroit", "tile installation"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ALB Custom Painting & Remodeling LLC",
    title: "ALB Custom Painting & Remodeling LLC | Metro Detroit",
    description: "Metro Detroit's trusted remodeling experts. Kitchen, bathroom, painting, tile, fire & water restoration, home building.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://albremodeling.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
