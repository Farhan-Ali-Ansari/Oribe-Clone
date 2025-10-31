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
import featureImg from "../assets/feature-bg3.jpg";
import prod1 from "../assets/prod1.jpg";
import prod2 from "../assets/prod2.jpg";
import prod3 from "../assets/prod3.jpg";
import prod4 from "../assets/prod4.jpg";
import BS1 from "../assets/BS1.jpg";
import BS2 from "../assets/BS2.jpg";
import BS3 from "../assets/BS3.jpg";
import BS4 from "../assets/BS4.jpg";

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
              <h4 className="featured-name">
                Hair Alchemy Heatless Styling Set
              </h4>
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
      {/* --- EXPERIENCE SECTION --- */}
      <section className="experience-section">
        {/* Left Section with Background Image */}
        <div className="experience-block left-block">
          <div className="experience-content">
            <h2 className="experience-title1">Bestsellers</h2>
            <p className="experience-desc1">
              Our most-loved hair care and styling icons
            </p>
            <button className="experience-btn1">SHOP NOW</button>
          </div>
        </div>

        {/* Right Section with Background Video */}
        <div className="experience-block right-block">
          <div className="experience-content">
            <h2 className="experience-title2">Oribe on Film</h2>
            <p className="experience-desc2">
              Elevate your Oribe routine with step-by-step tutorials and expert{" "}
              <br /> hair care and styling tips.
            </p>
            <button className="experience-btn2">WATCH NOW</button>
          </div>
        </div>
      </section>
      {/* --- NEWSLETTER SECTION --- */}
      <section className="newsletter-section">
        <div className="newsletter-wrapper">
          <h2 className="newsletter-heading">
            Let’s get this straight into your inbox.
          </h2>
          <p className="newsletter-text">
            By subscribing, you agree to receive Marketing Emails from Oribe.
            You may unsubscribe at any time. To find out more, visit our{" "}
            <a href="#">Privacy Policy</a>.
          </p>

          <div className="newsletter-input-wrapper">
            <input
              type="email"
              placeholder="Enter email address"
              className="newsletter-input"
            />
            <button className="newsletter-submit">SUBSCRIBE</button>
          </div>
        </div>
      </section>
      {/* --- BODY & FRAGRANCE SECTION --- */}
      <section className="body-fragrance">
        {/* LEFT SIDE */}
        <div className="bf-left">
          <div className="bf-content">
            <h5>GIFTING</h5>
            <h2>Body & Fragrance</h2>
            <p>
              Give the gift of a truly sensorial experience with an Eau de
              Parfum, indulgent moisturizing body care, or home fragrance in one
              of our three signature scents.
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bf-right">
          <div className="bf-product">
            <img src={require("../assets/prod1.jpg")} alt="Desertland" />
            <div className="bf-info">
              <p className="bf-name">Desertland Eau de Parfum</p>
              <p className="bf-price">$135.00 / 2.5 oz</p>
            </div>
          </div>

          <div className="bf-product">
            <img src={require("../assets/prod2.jpg")} alt="Body Wash" />
            <div className="bf-info">
              <p className="bf-name">Côte d’Azur Replenishing Body Wash</p>
              <p className="bf-price">$54.00 / 10.1 oz</p>
            </div>
          </div>

          <div className="bf-product">
            <img src={require("../assets/prod3.jpg")} alt="Lotion" />
            <div className="bf-info">
              <p className="bf-name">Côte d’Azur Restorative Body Crème</p>
              <p className="bf-price">$85.00 / 5 oz</p>
            </div>
          </div>

          <div className="bf-product">
            <img src={require("../assets/prod4.jpg")} alt="Hand Wash" />
            <div className="bf-info">
              <p className="bf-name">Côte d’Azur Hand Wash</p>
              <p className="bf-price">$49.00 / 8.5 oz</p>
            </div>
          </div>
        </div>
      </section>
      {/* --- BESTSELLER PRODUCTS SECTION --- */}
      <section className="featured-products">
        <div className="featured-header">
          <h2>SHOP BESTSELLERS</h2>
          <a href="#" className="view-all">
            VIEW ALL
          </a>
        </div>

        <div className="featured-grid">
          <div className="featured-card">
            <span className="featured-badge">New</span>
            <img src={BS1} alt="Dry Texurizing Spray" />
            <div className="featured-info">
              <h4 className="featured-name">Dry Texurizing Spray</h4>
              <p className="featured-price">$52.00 / 8.5 oz</p>
            </div>
          </div>

          <div className="featured-card">
            <span className="featured-badge">Bestseller</span>
            <img src={BS2} alt="Gold Lust Repair & Lust Shampoo" />
            <div className="featured-info">
              <h4 className="featured-name">Gold Lust Repair & Lust Shampoo</h4>
              <p className="featured-price">$53.00 / 8.5 oz</p>
            </div>
          </div>

          <div className="featured-card">
            <span className="featured-badge">New</span>
            <img src={BS3} alt="Gold Lust Repair & Lust Conditioner" />
            <div className="featured-info">
              <h4 className="featured-name">
                Gold Lust Repair & Lust Conditioner
              </h4>
              <p className="featured-price">$56.00 / 6.8 oz</p>
            </div>
          </div>

          <div className="featured-card">
            <span className="featured-badge">Bestseller</span>
            <img src={BS4} alt="Gold Lust Transformative Mask" />
            <div className="featured-info">
              <h4 className="featured-name">
                Gold Lust Transformative Mask
              </h4>
              <p className="featured-price">$69.00 / 5 oz</p>
            </div>
          </div>
        </div>
      </section>
      {/*Banner*/}
      <section className="Banner">
        <h1 className="bhead">Forever OBSESSED</h1>
        <p className="bpara">Join us on our journey to craft more consiously, obsessing over<br/>every detail to make a world of difference</p>
        <button className="bbtn">Learn More</button>
      </section>
    </div>
  );
}

export default Home;
