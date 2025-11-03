import Link from "next/link";
import Image from "next/image";
import AboutBakerySection from "./components/about/about";
import BakeryGallery from "./components/gallery/gallery";
import TestimonialsSection from "./components/testimonials/page";
import VisitUsSection from "./components/visitUs/page";
import Footer from "./components/footer/footer";
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
  return (
    <div className="homepage-container">
      <header className="header container">
        <Link href="/" className="logo">
          <Image src="/images/maddys_logo.png" alt="Maddy's Bakery logo" width={150} height={150} />
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/products" className="nav-link">Products</Link>
          <a href="#categories" className="nav-link">Categories</a>
          <Link href="/custom-order" className="nav-link">Custom Order</Link>
          <Link href="/ingredients" className="nav-link">Ingredients</Link>
          <span className="nav-icons" aria-hidden>
            <svg className="icon" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 8h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z" strokeLinecap="round" />
              <path d="M8 8c0-2.5 1.75-4 4-4s4 1.5 4 4" strokeLinecap="round" />
            </svg>
          </span>
        </nav>
      </header>

      <main className="main">
        <section className="hero container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span>Welcome to</span>
              <span>Maddy&apos;s Bakery</span>
            </h1>
            <p className="hero-description">Baked with <span className="accent-desc">love</span>, shared with <span className="accent-desc">joy</span>.<br/><span className="accent-desc">Every</span> loaf, pastry, and cake is made from <span className="accent-desc">scratch</span>, filled with care, and meant to bring <span className="accent-desc">smiles</span> with every bite.</p>
            <Link href="/order" className="cta-button">Order Now</Link>
          </div>
          <div className="hero-image">
            <div className="pink-cloud" aria-hidden />
            <Image src="/images/goodies_basket.png" alt="Basket of pastries" width={500} height={600} className="basket-image" />
          </div>
        </section>
        <AboutBakerySection />

        <section id="categories" className="categories container" aria-label="Categories">
          <h3 className="categories-title">Categories</h3>
          <div className="categories-grid">
            <a className="category-card" href="/products#pastries">
              <Image src="/images/pastries.png" alt="Pastries" width={140} height={160} className="category-image" />
              <div className="category-info">
                <span className="category-label">Pastries</span>
                <span className="category-arrow" aria-hidden>→</span>
              </div>
            </a>
            <a className="category-card" href="/products#cakes">
              <Image src="/images/cakes.png" alt="Cakes" width={140} height={160} className="category-image" />
              <div className="category-info">
                <span className="category-label">Cakes</span>
                <span className="category-arrow" aria-hidden>→</span>
              </div>
            </a>
            <a className="category-card" href="/products#bread">
              <Image src="/images/bread.png" alt="Bread" width={140} height={160} className="category-image" />
              <div className="category-info">
                <span className="category-label">Bread</span>
                <span className="category-arrow" aria-hidden>→</span>
              </div>
            </a>
            <a className="category-card" href="/products#cookies">
              <Image src="/images/cookies.png" alt="Cookies" width={140} height={160} className="category-image" />
              <div className="category-info">
                <span className="category-label">Cookies</span>
                <span className="category-arrow" aria-hidden>→</span>
              </div>
            </a>
          </div>
        </section>

        <section className="todays-specials container">
          <div className="todays-specials-header">
            <h3 className="todays-specials-title">Today&apos;s Specials</h3>
            <p className="todays-specials-intro">We mark each treat with simple icons so you can quickly see the key ingredients and choose the perfect delight for your day.</p>
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
          </div>
          <div className="todays-specials-grid">
            <div className="special-card">
              <Image src="/images/cremsnit.png" alt="Special Cake" width={200} height={200} className="special-image" />
              <h4 className="special-name">Custard Cake “Cremsnit”</h4>
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
              <h4 className="special-name">Chocolate Cake “Amandina”</h4>
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
  <BakeryGallery />
  <TestimonialsSection />
        <VisitUsSection />
      </main>
      <Footer />
    </div>
  );
}
