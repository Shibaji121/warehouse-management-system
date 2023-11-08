import {
  FILTER_BY_CITY,
  FILTER_BY_CLUSTER,
  FILTER_BY_RANGE,
  GET_WAREHOUSE,
  SEARCH_WAREHOUSE,
} from "../actions/action";

const initialState = {
  wareHouses: [],
  searchedId: 0,
};

export const wareHouseReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_WAREHOUSE:
      return {
        ...prevState,
        wareHouses: action.payload.wareHouses,
      };
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
    default:
      return prevState;
  }
};
