import React, { useState } from "react";
import "../WareHouseDetailsPage/WareHouseDetailsPage.css";

const WareHouseDetailsPage = () => {
  const [editMode, setEditMode] = useState(false);

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
        {editMode ? (
          <div className="right-container">
            <div className="name">
              <div style={{ fontSize: "x-large" }}>
                Name:
                <input type="text" />
              </div>
              <div style={{ color: "#575268" }}>Code: W-00001</div>
            </div>
            <div className="detail-data">
              Type: <input type="text" />
            </div>
            <div className="detail-data">
              Cluster: <input type="text" />
            </div>
            <div className="detail-data">
              Space Available: <input type="number" />
            </div>
            <div className="detail-data">
              City: <input type="text" />
            </div>
            <div className="detail-data">
              Select Live Status:{" "}
              <select>
                <option>Live</option>
                <option>OffLine</option>
              </select>
            </div>
            <div className="btns">
              <button style={{ background: "black" }}>SAVE</button>
              <button
                style={{ background: "#e6e4ec", color: "black" }}
                onClick={() => setEditMode(false)}
              >
                DISCARD
              </button>
            </div>
          </div>
        ) : (
          <div className="right-container">
            <button
              type="submit"
              title="Edit Details"
              onClick={() => setEditMode(true)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/738/738880.png"
                alt=""
                style={{ width: "2rem" }}
              />
            </button>
            <div className="name" style={{ marginTop: "3rem" }}>
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
        )}
      </div>
    </div>
  );
};

export default WareHouseDetailsPage;
