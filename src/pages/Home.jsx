// src/pages/Home.jsx
import React, { useState } from "react";
import "./Home.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import authenticity from "../assets/authenticity.png";
import deluxe from "../assets/deluxe-samples.png";
import shipping from "../assets/free-shipping.png";
import gift from "../assets/gift-card.png";
import featured1 from "../assets/featured1.jpg";
import featured2 from "../assets/featured2.jpg";
import featured3 from "../assets/featured3.jpg";
import featured4 from "../assets/featured4.jpg";

function Home() {
  const slides = [
    {
      image: hero1,
      title: "oribe x kustaa saksi",
      subtitle: "Golden Threads. \n  Shared Moments",
      description:
        "Celebrate timeless craft and modern elegance with Oribe's \n limited-edition holiday collection designed by Kustaa Saksi.",
      button: "Shop Now",
    },
    {
      image: hero2,
      title: "BestSeller",
      subtitle: "One Spray.\n Infinite Impact.",
      description:
        "The Original Dry texture Spray.More Texture.More Volume.More Iconic.",
      button: "Discover",
    },
    {
      image: hero3,
      title: "Bestseller",
      subtitle: "The Gold Standard",
      description:
        "Repair,nourish, and transform damaged hair with our \n best-selling Gold Lust Collection.",
      button: "Shop Now",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="home-page">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""} 
            ${index === 1 ? "center-content" : ""} 
            ${index === 2 ? "dark-text" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h4 className="hero-subtitle">{slide.title}</h4>
              <h1 className="hero-title">{slide.subtitle}</h1>
              <p className="hero-desc">{slide.description}</p>
              <button className="hero-btn">{slide.button}</button>
            </div>
          </div>
        ))}

        {/* --- Arrows --- */}
        <button className="arrow left" onClick={prevSlide}>
          &lt;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &gt;
        </button>
      </section>
      {/* --- FEATURES SECTION --- */}
      <section className="icons-section">
        <div className="icon">
          <img src={authenticity} alt="Authenticity" />
          <div className="icon-text">
            <h4>AUTHENTICITY</h4>
            <p>guaranteed</p>
          </div>
        </div>

        <div className="icon">
          <img src={deluxe} alt="Deluxe Samples" />
          <div className="icon-text">
            <h4>DELUXE SAMPLES</h4>
            <p>available at checkout</p>
          </div>
        </div>

        <div className="icon">
          <img src={shipping} alt="Free Shipping" />
          <div className="icon-text">
            <h4>FREE SHIPPING</h4>
            <p>with any $100+ order</p>
          </div>
        </div>

        <div className="icon">
          <img src={gift} alt="Gift Cards" />
          <div className="icon-text">
            <h4>DIGITAL</h4>
            <p>gift cards</p>
          </div>
        </div>
      </section>
      {/* Before Featured Section */}
      <section className="para">
        <h1>
          THESE ARE THE PRODUCTS OF <br /> THE HAIR OBSESSED
        </h1>
      </section>
      {/* --- FEATURED PRODUCTS SECTION --- */}
      <section className="featured-products">
        <div className="featured-header">
          <h2>FEATURED</h2>
          <a href="#" className="view-all">
            VIEW ALL
          </a>
        </div>

        <div className="featured-grid">
          <div className="featured-card">
            <span className="featured-badge">New</span>
            <img src={featured1} alt="Gold Lust Collection" />
             <div className="featured-info">
            <h4 className="featured-name">Gold Lust Collection</h4>
            <p className="featured-price">$115.00</p>
            </div>
          </div>

          <div className="featured-card">
            <span className="featured-badge">New</span>
            <img src={featured2} alt="Gold Lust Liter Set" />
            <div className="featured-info">
            <h4 className="featured-name">Gold Lust Liter Set</h4>
            <p className="featured-price">$295.00</p>
            </div>
          </div>

          <div className="featured-card">
            <span className="featured-badge">New</span>
            <img src={featured3} alt="Hair Alchemy Heatless Styling Set" />
            <div className="featured-info">
            <h4 className="featured-name">Hair Alchemy Heatless Styling Set</h4>
            <p className="featured-price">$49.00</p>
            </div>
          </div>

          <div className="featured-card">
            <span className="featured-badge">New</span>
            <img src={featured4} alt="Côte d’Azur Hand Wash and Crème Set" />
            <div className="featured-info">
            <h4 className="featured-name">
              Côte d’Azur Hand Wash and Crème Set
            </h4>
            <p className="featured-price">$78.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
