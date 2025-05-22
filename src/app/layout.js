import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leonardo Fernandes",
  description: "A portfolio showcasing my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <div className="flex min-h-screen">
          <Navbar />
          <main className="w-full md:w-3/4 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
