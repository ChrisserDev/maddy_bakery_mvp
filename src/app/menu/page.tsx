"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Category, categories, products } from "./menuData";
import "./menu.scss";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as Category | null;
  
  // Initialize with URL parameter if valid, otherwise "all"
  const getInitialCategory = (): Category => {
    if (categoryParam && ["all", "pastries", "cakes", "bread", "cookies"].includes(categoryParam)) {
      return categoryParam;
    }
    return "all";
  };
  
  const [selectedCategory, setSelectedCategory] = useState<Category>(getInitialCategory());

  useEffect(() => {
    const newCategory = getInitialCategory();
    if (newCategory !== selectedCategory) {
      setSelectedCategory(newCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParam]);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <section className="products-hero container">
        <div className="products-hero-content">
          <span className="products-eyebrow">Our Menu</span>
          <h1 className="products-title">Baked Daily with Love</h1>
          <p className="products-description">
            From flaky croissants to celebration cakes, every item in our bakery is made fresh using traditional techniques and the finest ingredients.
          </p>
        </div>
      </section>

      <section className="shop-by-category container">
        <h2 className="category-filter-title">Shop by Category</h2>
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug as Category)}
              className={`category-filter ${selectedCategory === category.slug ? 'active' : ''}`}
              aria-pressed={selectedCategory === category.slug}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <section className="products-grid-section container">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-media">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-price">{product.price}</span>
                <div className="product-order-info">
                  <a href="https://www.ubereats.com/gb/store/maddys-bakery/HUxhJ3kyS2-E1AyrI15bSw" target="_blank" rel="noopener noreferrer" className="order-label">🛵 Uber Eats</a>
                  <a href="https://www.just-eat.co.uk/restaurants-maddys-bakery-stevenage/menu" target="_blank" rel="noopener noreferrer" className="order-label">🚚 Just Eat</a>
                  <a href="tel:01438592576" className="order-label">📞 Custom</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </section>

      <section className="custom-order-section container">
        <div className="custom-order-content">
          <p className="custom-order-text">
            Don&apos;t see what you&apos;re looking for? We&apos;d love to create something special just for you.
          </p>
          <div className="custom-order-action">
            <p className="custom-order-title">Place a Custom Order</p>
            <a href="tel:01438592576" className="custom-order-link">
              <svg className="phone-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
              </svg>
              Call &nbsp; 01438 592576
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
