import "./orderOnline.scss";
import Image from "next/image";

const deliveryOptions = [
  {
    id: "just-eat",
    name: "Just Eat",
    description: "Order your favorites with fast, reliable delivery",
    url: "https://www.just-eat.co.uk/restaurants-maddys-bakery-stevenage/menu#category_216b14dc-9844-4d0b-a7f1-9794aee8c1b2",
    icon: "🚚",
    deliveryTime: "30-45 mins"
  },
  {
    id: "uber-eats",
    name: "Uber Eats",
    description: "Quick delivery straight to your door",
    url: "https://www.ubereats.com/gb/store/maddys-bakery/HUxhJ3kyS2-E1AyrI15bSw",
    icon: "🛵",
    deliveryTime: "25-40 mins"
  }
];

export default function OrderOnlinePage() {
  return (
    <div className="order-online-page">
      <section className="order-hero container">
        <div className="order-hero-content">
          <span className="order-eyebrow">Order Online</span>
          <h1 className="order-title">Fresh Baked Goods Delivered to Your Door</h1>
          <p className="order-description">
            Craving our signature pastries and cakes? Order online through our trusted delivery partners 
            or call us directly for custom orders and special celebrations.
          </p>
        </div>
        <div className="hero-visual">
          <Image src="/images/food_delivery_guy.png" alt="Delivery person with fresh baked goods" width={350} height={350} />
        </div>
      </section>

      <section className="order-options container">
        <h2 className="section-title">Order Your Favorite Treats</h2>
        <div className="options-grid">
          {deliveryOptions.map((option) => (
            <div key={option.id} className="delivery-card">
              <div className="delivery-header">
                <span className="delivery-icon">{option.icon}</span>
                <h3 className="delivery-name">{option.name}</h3>
                <span className="delivery-time">{option.deliveryTime}</span>
              </div>
              <p className="delivery-description">{option.description}</p>
              <a 
                href={option.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="delivery-button"
              >
                Order on {option.name}
                <span className="button-arrow">→</span>
              </a>
            </div>
          ))}
          
          <div className="delivery-card custom-card">
            <div className="delivery-header">
              <span className="delivery-icon">📞</span>
              <h3 className="delivery-name">Call Us Directly</h3>
              <span className="delivery-time">Custom Orders</span>
            </div>
            <p className="delivery-description">
              Planning a celebration or need special dietary options? Our bakers are here to create exactly what you&apos;re dreaming of.
            </p>
            <a href="tel:01438592576" className="delivery-button phone-button">
              <svg className="phone-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
              </svg>
              01438 592576
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
