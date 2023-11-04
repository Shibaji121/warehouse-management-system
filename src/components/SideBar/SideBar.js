import React, { useState } from "react";
import "../SideBar/SideBar.css";

const SideBar = () => {
  const [rangeValue, setRangeValue] = useState(5000);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };
  return (
    <div className="side-bar-container">
      <div className="side-bar">
        <div>
          <h3>Filter By City</h3>
          <select>
            <option>All</option>
            <option>Delhi</option>
            <option>Chennai</option>
          </select>
        </div>
        <div>
          <h3>Filter By Cluster</h3>
          <select>
            <option>All</option>
            <option>cluster-a-1</option>
            <option>cluster-a-32</option>
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
