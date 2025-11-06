"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./navigation.scss";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/order-online", label: "Order Online" },
  { href: "/visit-us", label: "Visit Us" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo" aria-label="Maddy's Bakery home">
          <Image src="/images/maddys_logo.png" alt="Maddy's Bakery logo" width={100} height={100} priority />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </Link>
          ))}
          <span className="site-nav__icons" aria-hidden>
            <svg className="site-nav__icon" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 8h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z" strokeLinecap="round" />
              <path d="M8 8c0-2.5 1.75-4 4-4s4 1.5 4 4" strokeLinecap="round" />
            </svg>
          </span>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="mobile-menu__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu__overlay" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
