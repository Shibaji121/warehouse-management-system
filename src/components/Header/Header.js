import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="header-left">
        <div className="logo">
          <img
            src="https://png.pngtree.com/template/20191008/ourmid/pngtree-modern-warehouse-barn-building-colorful-logo-design-overlapping-style-image_315265.jpg"
            alt="logo"
          />
        </div>
        <h4>All Ware Houses</h4>
      </a>
      <div className="header-middle">
        <input type="text" placeholder="Search any ware house" />
        <button type="submit">🔍</button>
      </div>
      <div className="header-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9408/9408175.png"
          alt="profile-img"
        />
        <h4>Log in</h4>
      </div>
    </div>
  );
};

export default Header;
