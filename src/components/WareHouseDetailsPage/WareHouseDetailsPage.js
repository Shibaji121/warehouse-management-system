import React from "react";
import "../WareHouseDetailsPage/WareHouseDetailsPage.css";

const WareHouseDetailsPage = () => {
  return (
    <div className="details-page">
      <h1>WareHouse Details</h1>
      <div className="details-container">
        <div className="left-container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/226/694/non_2x/aisle-of-warehouse-free-photo.jpg"
            alt="wh-img"
          />
        </div>
        <div className="right-container">
          <button type="submit" title="Edit Details">
            <img
              src="https://cdn-icons-png.flaticon.com/128/738/738880.png"
              alt=""
              style={{ width: "2rem" }}
            />
          </button>
          <div className="name">
            <div style={{ fontSize: "x-large" }}>Name: Warehouse-165</div>
            <div style={{ color: "#575268" }}>Code: W-00001</div>
          </div>
          <div className="detail-data">Type: Leasable Space</div>
          <div className="detail-data">Cluster: cluster-a-32</div>
          <div className="detail-data">Space Available: 1234</div>
          <div className="detail-data">City: Delhi</div>
          <div className="live">
            <div className="detail-data" style={{ color: "#783373" }}>
              Registered
            </div>
            <div className="detail-data">🟢 Live</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouseDetailsPage;
