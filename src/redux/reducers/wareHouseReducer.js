import { GET_WAREHOUSE } from "../actions/action";

const initialState = {
  wareHouses: [],
};

export const wareHouseReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_WAREHOUSE:
      return {
        ...prevState,
        wareHouses: action.payload.wareHouses,
      };
    default:
      return prevState;
  }
};
