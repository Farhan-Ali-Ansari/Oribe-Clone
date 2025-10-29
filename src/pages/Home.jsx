// src/pages/Home.jsx
import React, { useState } from "react";
import "./Home.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

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
    </div>
  );
}

export default Home;
