import React, { useEffect } from "react";
import "../WareHouseList/WareHouseList.css";
import { useDispatch, useSelector } from "react-redux";
import { getWareHouses } from "../../redux/actions/action";
import { useNavigate } from "react-router-dom";

const WareHouseList = () => {
  const dispatch = useDispatch();
  const wareHouses = useSelector((state) => state.wareHouse.wareHouses);

  useEffect(() => {
    dispatch(getWareHouses());
  }, [dispatch]);
  return (
    <div className="ware-house-list">
      <h1>Ware house Availability</h1>
      <div className="ware-house">
        {wareHouses.map((house) => {
          return <HouseCard key={house.id} house={house} />;
        })}
      </div>
    </div>
  );
};

const HouseCard = ({ house }) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/search/${id}`);
  };
  return (
    <div className="nft" onClick={() => handleCardClick(house.id)}>
      <div className="main">
        <img
          className="tokenImage"
          src="https://static.vecteezy.com/system/resources/previews/001/226/694/non_2x/aisle-of-warehouse-free-photo.jpg"
          alt="wh-img"
        />
        <h2>{house?.name}</h2>
        <p className="description">Type: {house?.type}</p>
        <p className="description">Cluster: {house?.cluster}</p>
        <p className="description">Space Available: {house?.space_available}</p>
        <div className="tokenInfo">
          <div className="price">
            <p>City: {house?.city}</p>
          </div>
          <div className="duration">
            {house?.is_live ? <div>🟢</div> : <div>🔴</div>}
            {house?.is_live ? <p>Live</p> : <p>Off Line</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouseList;
