import React from "react";
import "../WareHouseList/WareHouseList.css";

const WareHouseList = () => {
  return (
    <div className="ware-house-list">
      <h1>Ware house Availability</h1>
      <div className="ware-house">
        {[...new Array(1)].map(() => {
          return <HouseCard />;
        })}
      </div>
    </div>
  );
};

const HouseCard = () => {
  return (
    <div class="nft">
      <div class="main">
        <img
          class="tokenImage"
          src="https://static.vecteezy.com/system/resources/previews/001/226/694/non_2x/aisle-of-warehouse-free-photo.jpg"
          alt="wh-img"
        />
        <h2>Warehouse-165</h2>
        <p class="description">Type: Leasable Space</p>
        <p class="description">Cluster: cluster-a-32</p>
        <p class="description">Space Available: 1234</p>
        <div class="tokenInfo">
          <div class="price">
            <p>City: Delhi</p>
          </div>
          <div class="duration">
            <div>🟢</div>
            <p>Live</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouseList;
