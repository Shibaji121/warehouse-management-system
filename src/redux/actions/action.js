export const GET_WAREHOUSE = "GET_WAREHOUSE";

export const getWareHouses = () => async (dispatch) => {
  const url =
    "https://my-json-server.typicode.com/Shibaji121/warehouse-management-system/wareHouses";
  const response = await fetch(url).then((response) => response.json());
  dispatch({
    type: GET_WAREHOUSE,
    payload: {
      wareHouses: response,
    },
  });
};
