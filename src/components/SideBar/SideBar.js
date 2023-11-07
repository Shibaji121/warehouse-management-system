import React, { useEffect, useState } from "react";
import "../SideBar/SideBar.css";
import { useSelector } from "react-redux";

const SideBar = () => {
  const [rangeValue, setRangeValue] = useState(5000);
  const [cityList, setCityList] = useState([]);
  const [cluster, setCluster] = useState([]);
  const wareHouses = useSelector((state) => state.wareHouse.wareHouses);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };
  const handleCitySelect = (e) => {
    console.log(e.target.value);
  };
  const handleClusterSelect = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    const cities = Array.from(new Set(wareHouses.map((house) => house.city)));
    const cluster = Array.from(
      new Set(wareHouses.map((house) => house.cluster))
    );
    setCityList(cities);
    setCluster(cluster);
  }, [wareHouses]);
  return (
    <div className="side-bar-container">
      <div className="side-bar">
        <div>
          <h3>Filter By City</h3>
          <select onChange={handleCitySelect}>
            <option value="All">All</option>
            {cityList.map((city, index) => (
              <option value={city} key={index}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>Filter By Cluster</h3>
          <select onChange={handleClusterSelect}>
            <option value="All">All</option>
            {cluster.map((cluster, index) => (
              <option value={cluster} key={index}>
                {cluster}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>Filter By Space Available Limit</h3>
          <div
            style={{ position: "relative", width: "100%", marginTop: "1.5rem" }}
          >
            <span
              style={{
                position: "absolute",
                top: "-25px",
                left: `${rangeValue / 1000}%`,
                transform: "translateX(-50%)",
              }}
            >
              {rangeValue}
            </span>
            <input
              type="range"
              min="1000"
              max="100000"
              value={rangeValue}
              step="1000"
              onChange={handleRangeChange}
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
