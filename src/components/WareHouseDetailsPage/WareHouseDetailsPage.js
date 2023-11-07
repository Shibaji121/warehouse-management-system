import React, { useEffect, useState } from "react";
import "../WareHouseDetailsPage/WareHouseDetailsPage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const WareHouseDetailsPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [house, setHouse] = useState();
  const params = useParams();
  const wareHouses = useSelector((state) => state.wareHouse.wareHouses);

  useEffect(() => {
    const filteredHouse = wareHouses.find(
      (house) => house.id === parseInt(params.id)
    );
    if (filteredHouse) {
      setHouse(filteredHouse);
    }
  }, [wareHouses, params]);

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
              <div style={{ fontSize: "x-large" }}>Name: {house?.name}</div>
              <div style={{ color: "#575268" }}>Code: {house?.code}</div>
            </div>
            <div className="detail-data">Type: {house?.type}</div>
            <div className="detail-data">Cluster: {house?.cluster}</div>
            <div className="detail-data">
              Space Available: {house?.space_available}
            </div>
            <div className="detail-data">City: {house?.city}</div>
            <div className="live">
              <div className="detail-data" style={{ color: "#783373" }}>
                {house?.is_registered}
              </div>
              {house?.is_live ? (
                <div className="detail-data">🟢 Live</div>
              ) : (
                <div className="detail-data">🔴 OffLine</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WareHouseDetailsPage;
