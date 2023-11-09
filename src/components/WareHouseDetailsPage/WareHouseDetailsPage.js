import React, { useEffect, useState } from "react";
import "../WareHouseDetailsPage/WareHouseDetailsPage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const WareHouseDetailsPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [house, setHouse] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [cluster, setCluster] = useState();
  const [space, setSpace] = useState();
  const [city, setCity] = useState();
  const [live, setLive] = useState();
  const params = useParams();
  const wareHouses = useSelector((state) => state.wareHouse.wareHouses);

  useEffect(() => {
    const filteredHouse = wareHouses.find(
      (house) => house.id === parseInt(params.id)
    );
    if (filteredHouse) {
      console.log(filteredHouse.is_live);
      setHouse(filteredHouse);
      setName(filteredHouse.name);
      setType(filteredHouse.type);
      setCluster(filteredHouse.cluster);
      setSpace(filteredHouse.space_available);
      setCity(filteredHouse.city);
      setLive(filteredHouse.is_live);
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
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ color: "#575268" }}>Code: {house?.code}</div>
            </div>
            <div className="detail-data">
              Type:{" "}
              <input
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="detail-data">
              Cluster:{" "}
              <input
                type="text"
                value={cluster}
                onChange={(e) => setCluster(e.target.value)}
              />
            </div>
            <div className="detail-data">
              Space Available:{" "}
              <input
                type="number"
                value={space}
                onChange={(e) => setSpace(e.target.value)}
              />
            </div>
            <div className="detail-data">
              City:{" "}
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="detail-data">
              Select Live Status:{" "}
              <select
                value={live ? "Live" : "OffLine"}
                onChange={(e) => {
                  console.log(e.target.value);
                  setLive(e.target.value === "Live");
                }}
              >
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
              <div style={{ fontSize: "x-large" }}>Name: {name}</div>
              <div style={{ color: "#575268" }}>Code: {house?.code}</div>
            </div>
            <div className="detail-data">Type: {type}</div>
            <div className="detail-data">Cluster: {cluster}</div>
            <div className="detail-data">Space Available: {space}</div>
            <div className="detail-data">City: {city}</div>
            <div className="live">
              <div className="detail-data" style={{ color: "#783373" }}>
                {house?.is_registered}
              </div>
              {live ? (
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
