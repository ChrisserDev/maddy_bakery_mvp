import Link from "next/link";
import Image from "next/image";
import "./about.scss";

export default function AboutBakerySection() {
  return (
    <section className="about-bakery container" aria-labelledby="about-bakery-title">
      <div className="about-content">
        <span className="about-eyebrow">About Our Bakery</span>
        <h3 id="about-bakery-title" className="about-title">At Maddy&apos;s Bakery, every pastry tells a story.</h3>
        <p className="about-text">What started as a small kitchen dream has grown into a local favorite — baking daily with love, tradition, and a sprinkle of joy. From the crackle of fresh loaves to the swirl of frosting on a custom cake, we pour our hearts into every batch.</p>
        <Link href="/about" className="about-cta">Read Our Story</Link>
      </div>
      <div className="about-media">
        <div className="about-photo-frame">
          <Image src="/images/pastries.png" alt="Fresh pastries from Maddy's Bakery" width={380} height={420} className="about-image" />
        </div>
        <div className="about-badge" aria-hidden="true">
          <span className="badge-title">Since 2025</span>
          <span className="badge-text">Family owned &amp; loved</span>
        </div>
      </div>
    </section>
  );
}
