import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/test.avif";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <header>
      {/* Top Promo Bar */}
      <div className="nav-upper">
        <p>COMPLIMENTARY SHIPPING ON ANY $100+ ORDER</p>
      </div>

      {/* Top Promo Bar */}
      <div className="nav-sec-upper">
        <p>United States (USD $)</p>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Oribe Logo" className="logo-img" />
          </Link>
          <div className="divider"></div>
          <Link to="/shop" className="nav-shop">Shop</Link>
          <Link to="/" className="nav-shop">discover</Link>
          <Link to="/" className="nav-shop">holiday</Link>
        </div>

       
        {/* RIGHT Navbar */}
        <div className="nav-right">
          <div className="divider"></div>
          <FiSearch className="search-icon" />
          <Link to="/Account" className="account">Account</Link>
          <Link to="/bag" className="bag">Bag</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
