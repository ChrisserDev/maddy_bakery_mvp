import Link from "next/link";
import Image from "next/image";
import "./categories.scss";

const categories = [
  {
    slug: "pastries",
    name: "Pastries",
    description: "Flaky croissants, fruit-filled danishes, and morning treats baked before sunrise.",
    image: "/images/pastries.png",
  },
  {
    slug: "cakes",
    name: "Cakes",
    description: "Layered cakes topped with buttercream swirls, mousse, and seasonal accents.",
    image: "/images/cakes.png",
  },
  {
    slug: "bread",
    name: "Bread",
    description: "Crusty European loaves, golden focaccia, and everyday sandwich staples.",
    image: "/images/bread.png",
  },
  {
    slug: "cookies",
    name: "Cookies",
    description: "Small-batch cookies, butter shortbread, and chocolate-dipped delights.",
    image: "/images/cookies.png",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="categories-full-width" aria-label="Categories">
      <div className="categories container">
        <div className="categories-header">
          <span className="categories-eyebrow">Our Menu</span>
          <h3 className="categories-title">Menu</h3>
          <p className="categories-intro">
            Explore the favorites our customers come back for—from crisp pastries to celebration cakes, each crafted
            fresh in our kitchen.
          </p>
        </div>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link key={category.slug} className="category-card" href={`/menu#${category.slug}`}>
              <div className="category-media">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={140}
                  height={160}
                  className="category-image"
                />
              </div>
              <div className="category-body">
                <span className="category-label">{category.name}</span>
                <p className="category-summary">{category.description}</p>
              </div>
              <span className="category-arrow" aria-hidden>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
