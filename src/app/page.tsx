"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BakeryGallery from "./components/gallery/gallery";
import TestimonialsSection from "./components/testimonials/page";
import CategoriesSection from "./components/categories/page";
import VisitUsSection from "./components/visitUs/page";
import "./home.scss";

const GlutenIcon = () => (
  <svg className="dietary-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 5c1.6-.3 2.9-1.4 3.5-2.9l-1.2.2c-.9.2-1.7.7-2.3 1.3-.6-.6-1.4-1.1-2.3-1.3l-1.2-.2c.6 1.5 1.9 2.6 3.5 2.9Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2" strokeLinejoin="round" />
    <path d="M12 9c1.4-.3 2.5-1.2 3.1-2.5l-1.1.2c-.8.2-1.4.6-1.9 1.1-.5-.5-1.1-.9-1.9-1.1l-1.1-.2c.6 1.3 1.7 2.2 3.1 2.5Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2" />
    <path d="M12 13c1.2-.3 2.1-1 2.6-2.1l-.9.2c-.6.2-1.1.5-1.5.9-.4-.4-.9-.7-1.5-.9l-.9-.2c.5 1.1 1.4 1.8 2.6 2.1Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2" />
  </svg>
);

const DairyIcon = () => (
  <svg className="dietary-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M9 4.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 2h3v2.3c0 .7.3 1.4.8 1.9l.2.3v9.6a2.8 2.8 0 0 1-2.8 2.8h-1.4a2.8 2.8 0 0 1-2.8-2.8V6.5l.2-.3c.5-.5.8-1.2.8-1.9V2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AlcoholIcon = () => (
  <svg className="dietary-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M8 3h8l-.6 4.8c-.3 2.1-2.1 3.6-4 3.6s-3.7-1.5-4-3.6L8 3Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 11.4V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 19h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  const [navDirection, setNavDirection] = useState<"down" | "up" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const visitSection = document.getElementById("visit-us");
      const heroSection = document.querySelector<HTMLElement>(".hero");
      const categoriesSection = document.getElementById("categories");

      let navActive = true;

      if (heroSection) {
        // Delay showing the floating control until the hero is mostly out of view.
        const heroRect = heroSection.getBoundingClientRect();
        navActive = heroRect.bottom < viewportHeight * 0.6;
      } else {
        navActive = scrollY > viewportHeight * 0.2;
      }

      if (!navActive) {
        setNavDirection(null);
        return;
      }

      let direction: "down" | "up" | null = null;

      const visitTop = visitSection ? visitSection.getBoundingClientRect().top + scrollY : null;

      if (visitTop !== null) {
        const nearVisit = scrollY + viewportHeight >= visitTop - 140;
        if (!nearVisit) {
          direction = "down";
        }
      } else if (scrollY + viewportHeight < documentHeight - 320) {
        direction = "down";
      }

      if (categoriesSection) {
        // Switch to an "up" affordance once the categories section is mostly behind the user.
        const categoriesRect = categoriesSection.getBoundingClientRect();
        const categoriesTop = categoriesRect.top + scrollY;
        const categoriesHeight = categoriesRect.height;
        const upThreshold = categoriesTop + categoriesHeight * 0.4;

        if (scrollY > upThreshold) {
          direction = "up";
        }
      } else if (scrollY > viewportHeight * 0.75) {
        direction = "up";
      }

      if (visitTop !== null) {
        const pastVisit = scrollY >= visitTop - viewportHeight * 0.2;
        if (pastVisit) {
          direction = "up";
        }
      }

      setNavDirection(direction);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="homepage-container" id="page-top">
      <main className="main">
        <section className="hero container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span>At Maddy&apos;s Bakery, every pastry tells a story.</span>
            </h1>
            <p className="hero-description">What started as a <span className="accent-desc">small kitchen dream</span> has grown into a <span className="accent-desc">local favorite</span> - baking daily with <span className="accent-desc">love</span>, <span className="accent-desc">tradition</span>, and a <span className="accent-desc">sprinkle of joy</span>. From the <span className="accent-desc">crackle</span> of fresh loaves to the <span className="accent-desc">swirl</span> of frosting on a custom cake, we pour our <span className="accent-desc">hearts</span> into every batch.</p>
            <div className="hero-actions">
              <Link href="/order-online" className="cta-button" aria-label="Order from Maddy's Bakery">Order Online</Link>
              <a href="#visit-us" className="about-cta" aria-label="Jump to Visit Us section">Visit Us</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="pink-cloud" aria-hidden />
            <Image src="/images/goodies_basket.png" alt="Basket of pastries" width={500} height={600} className="basket-image" />
          </div>
        </section>

        <CategoriesSection />

        <section className="todays-specials container">
                <div className="todays-specials-header">
                  <span className="todays-specials-eyebrow">Fresh Daily</span>
                  <h3 className="todays-specials-title">Today&apos;s Specials</h3>
                  <p className="todays-specials-intro">We mark each treat with simple icons so you can quickly see the key ingredients and choose the perfect delight for your day.</p>
                </div>
                <ul className="todays-specials-legend" aria-label="Ingredient and allergen legend">
                    <li className="legend-item" aria-label="Contains gluten">
                      <span className="dietary-icon icon-gluten" aria-hidden="true">
                        <GlutenIcon />
                      </span>
                      <span className="legend-label">Contains Gluten</span>
                    </li>
                    <li className="legend-item" aria-label="Contains dairy">
                      <span className="dietary-icon icon-dairy" aria-hidden="true">
                        <DairyIcon />
                      </span>
                      <span className="legend-label">Contains Dairy</span>
                    </li>
                    <li className="legend-item" aria-label="Contains alcohol">
                      <span className="dietary-icon icon-alcohol" aria-hidden="true">
                        <AlcoholIcon />
                      </span>
                      <span className="legend-label">Contains Alcohol</span>
                    </li>
                  </ul>
                <div className="todays-specials-grid">
                  <div className="special-card">
                    <Image src="/images/cremsnit.png" alt="Special Cake" width={200} height={200} className="special-image" />
                    <h4 className="special-name">Custard Cake "Cremsnit"</h4>
                    <p className="special-price">£3.50</p>
                    <p className="special-description">Lovely puff pastry, <span className="special-ingredient">#cremapasticcera</span> custard filling with double cream <span className="special-ingredient">#cremadiplomatica</span> with true vanilla.</p>
                    <ul className="special-attributes" aria-label="Cremsnit contains gluten and dairy">
                      <li className="special-attribute" aria-label="Contains gluten">
                        <span className="dietary-icon icon-gluten" aria-hidden="true">
                          <GlutenIcon />
                        </span>
                      </li>
                      <li className="special-attribute" aria-label="Contains dairy">
                        <span className="dietary-icon icon-dairy" aria-hidden="true">
                          <DairyIcon />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="special-card">
                    <Image src="/images/blackforest.png" alt="Special Pastry" width={200} height={200} className="special-image" />
                    <h4 className="special-name">Black Forest</h4>
                    <p className="special-price">£4.25</p>
                    <p className="special-description">Fluffy chocolate sponge, fresh filling made with mascarpone, double cream and sour cream, sour cherry.</p>
                    <ul className="special-attributes" aria-label="Black forest cake contains gluten and dairy">
                      <li className="special-attribute" aria-label="Contains gluten">
                        <span className="dietary-icon icon-gluten" aria-hidden="true">
                          <GlutenIcon />
                        </span>
                      </li>
                      <li className="special-attribute" aria-label="Contains dairy">
                        <span className="dietary-icon icon-dairy" aria-hidden="true">
                          <DairyIcon />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="special-card">
                    <Image src="/images/eclairs.png" alt="Special Bread" width={200} height={200} className="special-image" />
                    <h4 className="special-name">Eclairs</h4>
                    <p className="special-price">£2.75</p>
                    <p className="special-description">Crunchy shells made by us, true vanilla filling <span className="special-ingredient">#cremapasticcera</span> made with yolks, milk, double cream and vanilla, dipped in Callebaut chocolate <span className="special-ingredient">#callebaut</span>.</p>
                    <ul className="special-attributes" aria-label="Eclairs contain gluten and dairy">
                      <li className="special-attribute" aria-label="Contains gluten">
                        <span className="dietary-icon icon-gluten" aria-hidden="true">
                          <GlutenIcon />
                        </span>
                      </li>
                      <li className="special-attribute" aria-label="Contains dairy">
                        <span className="dietary-icon icon-dairy" aria-hidden="true">
                          <DairyIcon />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="special-card">
                    <Image src="/images/amandina.png" alt="Chocolate cake Amandina" width={200} height={200} className="special-image" />
                    <h4 className="special-name">Chocolate Cake "Amandina"</h4>
                    <p className="special-price">£3.95</p>
                    <p className="special-description">Fluffy chocolate sponge, moist in a caramel syrup made from caramelised sugar, rum, true rum, chocolate filling made with yolks, milk, double cream, butter and chocolate <span className="special-ingredient">#callebaut</span>, chocolate fondant icing on top.</p>
                    <ul className="special-attributes" aria-label="Amandina contains gluten, dairy and alcohol">
                      <li className="special-attribute" aria-label="Contains gluten">
                        <span className="dietary-icon icon-gluten" aria-hidden="true">
                          <GlutenIcon />
                        </span>
                      </li>
                      <li className="special-attribute" aria-label="Contains dairy">
                        <span className="dietary-icon icon-dairy" aria-hidden="true">
                          <DairyIcon />
                        </span>
                      </li>
                      <li className="special-attribute" aria-label="Contains alcohol">
                        <span className="dietary-icon icon-alcohol" aria-hidden="true">
                          <AlcoholIcon />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="special-card">
                    <Image src="/images/tiramisu.png" alt="Tiramisu cheesecake" width={200} height={200} className="special-image" />
                    <h4 className="special-name">Tiramisu Cheesecake</h4>
                    <p className="special-price">£3.25</p>
                    <p className="special-description">Lady fingers sponge made by us, coffee, creamy filling made with mascarpone and double cream.</p>
                    <ul className="special-attributes" aria-label="Tiramisu cheesecake contains gluten and dairy">
                      <li className="special-attribute" aria-label="Contains gluten">
                        <span className="dietary-icon icon-gluten" aria-hidden="true">
                          <GlutenIcon />
                        </span>
                      </li>
                      <li className="special-attribute" aria-label="Contains dairy">
                        <span className="dietary-icon icon-dairy" aria-hidden="true">
                          <DairyIcon />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
        </section>
        {/* <BakeryGallery /> */}
        <TestimonialsSection />
        <VisitUsSection />

        {navDirection && (
          <nav className="page-nav-floating" aria-label="Quick page navigation">
            {navDirection === "up" ? (
              <a href="#page-top" className="page-nav-button" aria-label="Scroll to top of page">
                <span aria-hidden>↑</span>
              </a>
            ) : (
              <a href="#visit-us" className="page-nav-button" aria-label="Jump to Visit Us section">
                <span aria-hidden>↓</span>
              </a>
            )}
          </nav>
        )}
      </main>
    </div>
  );
}
