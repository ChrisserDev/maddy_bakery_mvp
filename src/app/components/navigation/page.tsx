import Link from "next/link";
import Image from "next/image";
import "./navigation.scss";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/order-online", label: "Order Online" },
  { href: "/visit-us", label: "Visit Us" },
];

export default function Navigation() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo" aria-label="Maddy's Bakery home">
          <Image src="/images/maddys_logo.png" alt="Maddy's Bakery logo" width={120} height={120} priority />
        </Link>
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
      </div>
    </header>
  );
}
