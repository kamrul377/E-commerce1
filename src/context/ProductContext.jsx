

import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react'

const AppContext = createContext()
import reducer from '../reducer/productReducer'
const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {}
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const getProducts = async (url) => {
    dispatch({ type: "LOADING" })
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "SET_DATA", payload: products })
    } catch (error) {
      dispatch({ type: "ERROR" })
    }

  }

  // get single products
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" })
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" })
    }
  }

  useEffect(() => {
    getProducts(API)

  }, [])


  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  )
}


export { AppContext, AppProvider }