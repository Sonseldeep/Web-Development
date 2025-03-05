import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

const asyncGetProducts = () => async (dispatch, getState) => {
  try {
    const responce = await axios.get("https://fakestoreapi.com/products");
    console.log(responce.data);

    // call garnu parxa action
    getProducts(responce.data);
  } catch (error) {
    console.log(error);
  }
};

// note async ko aghi ()=>
// and pas async ko maa dispatch and getStae
