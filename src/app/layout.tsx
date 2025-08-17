import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Fernandes",
  description: "A portfolio showcasing my work and skills."
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
