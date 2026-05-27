import type { Metadata } from "next";
import { Montserrat, Noto_Sans_SC } from "next/font/google";
import localFont from "next/font/local";
import { PageNav } from "@/components/PageNav";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  preload: false,
});

const alimama = localFont({
  src: "../../public/fonts/AlimamaShuHeiTi-Bold.woff2",
  variable: "--font-alimama",
  weight: "700",
  style: "normal",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "范云云 Portfolio",
  description: "6年 UI/UX Designer · Design Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${montserrat.variable} ${notoSansSC.variable} ${alimama.variable} antialiased`}
      style={{ backgroundColor: "#000" }}
    >
      <body
        className="bg-black text-white"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        {children}
        <PageNav />
      </body>
    </html>
  );
}
