import React, { useState } from "react";
import "../Header/Header.css";
import { useDispatch } from "react-redux";
import { searchWarehouse } from "../../redux/actions/action";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (keyword) {
      console.log(keyword);
      dispatch(searchWarehouse(keyword));
    }
  };
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
        <input
          type="text"
          placeholder="Search any ware house"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          🔍
        </button>
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
