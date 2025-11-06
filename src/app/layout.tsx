"use client";

import { Geist, Geist_Mono, Playfair_Display, Dancing_Script, Lato } from "next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.scss";
import Navigation from "./components/navigation/page";
import Footer from "./components/footer/footer";

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

// export const metadata: Metadata = {
//   title: "Maddy's Bakery | Fresh Bakes in Stevenage",
//   description:
//     "Warm, handcrafted cakes, pastries, and breads available to pre-order for collection in Stevenage.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Show scroll-to-top button after scrolling down 75% of viewport
      setShowScrollTop(scrollY > viewportHeight * 0.75);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" id="page-top">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancing.variable} ${lato.variable}`}>
        <Navigation />
        {children}
        <Footer />
        
        {showScrollTop && (
          <nav className="page-nav-floating" aria-label="Quick page navigation">
            <a href="#page-top" className="page-nav-button" aria-label="Scroll to top of page">
              <span aria-hidden>↑</span>
            </a>
          </nav>
        )}
      </body>
    </html>
  );
}
