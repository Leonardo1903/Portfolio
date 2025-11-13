import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import OgImage from "../../public/OgImage.png";
import "./globals.css";

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Fernandes",
  description: "A portfolio showcasing my work and skills.",
  metadataBase: new URL("https://leonardo1903.me"),
  openGraph: {
    title: "Leonardo Fernandes",
    description: "A portfolio showcasing my work and skills.",
    url: "https://leonardo1903.me/",
    siteName: "Leonardo Fernandes",
    images: [
      {
        url: OgImage.src,
        width: 1200,
        height: 630,
        alt: "Leonardo Fernandes — Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Fernandes",
    description: "A portfolio showcasing my work and skills.",
    images: ["https://leonardo1903.me/Leonardo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased overflow-hidden`}>
        <div className="flex min-h-screen">
          <Navbar />
          <main className="w-full md:w-3/4 h-screen overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
