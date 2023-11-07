export const GET_WAREHOUSE = "GET_WAREHOUSE";
export const FILTER_BY_CITY = "FILTER_BY_CITY";
export const FILTER_BY_CLUSTER = "FILTER_BY_CLUSTER";
export const FILTER_BY_RANGE = "FILTER_BY_RANGE";

export const filterByCity = (city) => {
  return {
    type: FILTER_BY_CITY,
    payload: city,
  };
};
export const filterByCluster = (cluster) => {
  return {
    type: FILTER_BY_CLUSTER,
    payload: cluster,
  };
};
export const filterByRange = (range) => {
  return {
    type: FILTER_BY_RANGE,
    payload: range,
  };
};

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
