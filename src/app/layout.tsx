import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Dancing_Script, Lato } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Maddy's Bakery | Fresh Bakes in Stevenage",
  description:
    "Warm, handcrafted cakes, pastries, and breads available to pre-order for collection in Stevenage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancing.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
