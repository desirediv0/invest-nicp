import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocialButtons from "@/components/FloatingSocialButtons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const brushScriptMT = localFont({
  src: "./fonts/BrushScriptStd.otf",
  variable: "--font-brush-script-mt",
  weight: "400",
});

export const metadata = {
  title: "INVEST NICP",
  description: "Your Gateway to Smart Investments in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brushScriptMT.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingSocialButtons />
      </body>
    </html>
  );
}
