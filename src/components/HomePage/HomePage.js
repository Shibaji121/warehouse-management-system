import React from "react";
import "../HomePage/HomePage.css";
import SideBar from "../SideBar/SideBar";
import WareHouseList from "../WareHouseList/WareHouseList";

const HomePage = () => {
  return (
    <div className="home-page">
      <SideBar />
      <WareHouseList />
    </div>
  );
};

export default HomePage;
