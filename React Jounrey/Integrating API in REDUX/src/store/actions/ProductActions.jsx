//this is wrapper
// using this wrapper call garnu parxa useEffect maa
import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";

//Remember
// note: highrt order function ()=>()=>{} le wrapp garne
// yeha pani async ko aghi euta function hunxa hai ta
//async maa dispatch ra getState pathaune

export const asyncgetproducts = () => async (dispatch, getState) => {
  //   console.log(getState());
  //getState le cuurent global state dinxa
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    // here we have data of products that is sync data

    // yeha bata uta ko getproducts laai call garne and
    // response ko data laai rakhne
    dispatch(getproducts(response.data)); // yo action ho so use dispatch
  } catch (error) {
    console.log(error);
  }
};
