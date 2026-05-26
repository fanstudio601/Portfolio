import type { Metadata } from "next";
import { Montserrat, Noto_Sans_SC, Long_Cang } from "next/font/google";
import { PageNav } from "@/components/PageNav";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const longCang = Long_Cang({
  variable: "--font-long-cang",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
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
      className={`${montserrat.variable} ${notoSansSC.variable} ${longCang.variable} antialiased`}
    >
      <body className="bg-black text-white">
        {children}
        <PageNav />
      </body>
    </html>
  );
}
