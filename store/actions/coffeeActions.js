import axios from "axios";

// Types
import * as actionTypes from "./types";

// Get all coffeeShops
export const getCoffeeShops = () => async dispatch => {
  dispatch(setCoffeeShopsLoading());
  try {
    let res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
    let coffeeshops = res.data;
    dispatch({
      type: actionTypes.GET_COFFEESHOPS,
      payload: coffeeshops
    });
  } catch (err) {
    console.error("Error while fetching coffeeshops", err);
  }
};

// Set the loading state
export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});
