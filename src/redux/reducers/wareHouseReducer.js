import {
  FILTER_BY_CITY,
  FILTER_BY_CLUSTER,
  FILTER_BY_RANGE,
  GET_WAREHOUSE,
  SEARCH_WAREHOUSE,
  UPDATE_WAREHOUSE,
} from "../actions/action";

const initialState = {
  wareHouses: localStorage.getItem("wareHouses")
    ? JSON.parse(localStorage.getItem("wareHouses"))
    : [],
  searchedId: 0,
};

export const wareHouseReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_WAREHOUSE:
      if (prevState.wareHouses.length === 0) {
        localStorage.setItem(
          "wareHouses",
          JSON.stringify(action.payload.wareHouses)
        );
        return {
          ...prevState,
          wareHouses: action.payload.wareHouses,
        };
      } else {
        return {
          ...prevState,
        };
      }

    case FILTER_BY_CITY:
      const newArr = prevState.wareHouses.filter(
        (house) => house.city === action.payload
      );
      return {
        ...prevState,
        wareHouses: newArr,
      };
    case FILTER_BY_CLUSTER:
      const clustArr = prevState.wareHouses.filter(
        (house) => house.cluster === action.payload
      );
      return {
        ...prevState,
        wareHouses: clustArr,
      };
    case FILTER_BY_RANGE:
      const arr = prevState.wareHouses.filter(
        (house) => house.space_available <= action.payload
      );
      return {
        ...prevState,
        wareHouses: arr,
      };
    case SEARCH_WAREHOUSE:
      const houses = prevState.wareHouses.filter((house) =>
        house.name.includes(action.payload)
      );
      return {
        ...prevState,
        wareHouses: houses,
      };
    case UPDATE_WAREHOUSE:
      const updatedHouse = JSON.parse(localStorage.getItem("wareHouses")).map(
        (house) => {
          if (house.id === action.payload.house.id) {
            house.name = action.payload.updatedHouse.name;
            house.city = action.payload.updatedHouse.city;
            house.space_available = action.payload.updatedHouse.space_available;
            house.type = action.payload.updatedHouse.type;
            house.cluster = action.payload.updatedHouse.cluster;
            house.is_live = action.payload.updatedHouse.is_live;
          }
          return house;
        }
      );
      localStorage.setItem("wareHouses", JSON.stringify(updatedHouse));
      return {
        ...prevState,
        wareHouses: updatedHouse,
      };
    default:
      return prevState;
  }
};
