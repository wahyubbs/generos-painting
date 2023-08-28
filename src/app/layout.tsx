import type { Metadata } from "next";
import { Inter, Bangers, Quicksand } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const banger = Bangers({
  subsets: ["latin"],
  variable: "--font-banger",
  weight: "400",
});

export const quicksand = Bangers({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: "400",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
