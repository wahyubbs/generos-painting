import type { Metadata } from "next";
import { Bangers, Roboto, Quicksand } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { FacebookPixelEvents } from "./component/PixelEvent";

const banger = Bangers({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-banger",
});

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Generos",
  description: "Website Resmi Generos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${roboto.variable} ${banger.variable}`}
    >
      <body>
        {children}
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  );
}
