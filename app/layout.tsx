import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sand Springs Methodist Church | Sand Springs, OK",
  description:
    "Welcome to Sand Springs Methodist Church — a community rooted in faith, scripture, and service. Join us Sunday at 10:30 AM in Sand Springs, Oklahoma.",
  keywords: [
    "Sand Springs Methodist Church",
    "Methodist Church Sand Springs OK",
    "Church Sand Springs Oklahoma",
    "Christian Church Tulsa area",
  ],
  openGraph: {
    title: "Sand Springs Methodist Church",
    description:
      "A community rooted in faith, scripture, and service. Join us Sunday at 10:30 AM.",
    siteName: "Sand Springs Methodist Church",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#f9f7f4] text-slate-800">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
