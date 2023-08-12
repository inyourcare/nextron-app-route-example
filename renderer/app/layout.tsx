import "./globals.css";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
const nanumGothic = Nanum_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={nanumGothic.className}>
        {children}
      </body>
    </html>
  );
}
