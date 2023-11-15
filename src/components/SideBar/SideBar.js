import React, { useEffect, useState } from "react";
import "../SideBar/SideBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCity,
  filterByCluster,
  filterByRange,
  getWareHouses,
} from "../../redux/actions/action";

const SideBar = () => {
  const [rangeValue, setRangeValue] = useState(5000);
  const [city, setCity] = useState("All");
  const [cluster, setCluster] = useState("All");
  const [cityList, setCityList] = useState([]);
  const [clusterList, setClusterList] = useState([]);
  const wareHouses = useSelector((state) => state.wareHouse.wareHouses);
  const dispatch = useDispatch();

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
    dispatch(filterByRange(e.target.value));
  };
  const handleCitySelect = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "All") {
      localStorage.removeItem("wareHouses");
      dispatch(getWareHouses());
    } else {
      dispatch(filterByCity(e.target.value));
    }
  };
  const handleClusterSelect = (e) => {
    console.log(e.target.value);
    setCluster(e.target.value);
    if (e.target.value === "All") {
      dispatch(getWareHouses());
    } else {
      dispatch(filterByCluster(e.target.value));
    }
  };

  useEffect(() => {
    const cities = Array.from(new Set(wareHouses.map((house) => house.city)));
    const cluster = Array.from(
      new Set(wareHouses.map((house) => house.cluster))
    );
    cities.splice(0, 0, "All");
    cluster.splice(0, 0, "All");
    setCityList(cities);
    setClusterList(cluster);
  }, [wareHouses]);
  return (
    <div className="side-bar-container">
      <div className="side-bar">
        <div>
          <h3>Filter By City</h3>
          <select value={city} onChange={handleCitySelect}>
            {cityList.map((city, index) => (
              <option value={city} key={index}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>Filter By Cluster</h3>
          <select value={cluster} onChange={handleClusterSelect}>
            {clusterList.map((cluster, index) => (
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
