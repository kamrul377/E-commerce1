import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext()


const getLocalCartData = () => {
    let localCartData = localStorage.getItem('eshop_cart');
    // if (localCartData.length< 1) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData)
    // }
    if(localCartData){ 
        return JSON.parse(localCartData)
    } else{ 
        return []
    }
}



const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: 0,
    shiping_free: 500
}



const CartProvider = ({ children }) => {

    let audio2 = new Audio('/audio/audio2.mp3');
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
        // console.log(id,color,amount)
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
        audio2.play()
    }
    const setIncrement = (id) => {
        dispatch({ type: "INCREMENT_VALUE", payload: id })
    }
    const setDecrement = (id) => {
        dispatch({ type: "DECREMENT_VALUE", payload: id })

    }
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }
    // add data to local storage 

    useEffect(() => {
        dispatch({ type: 'CART_TOTAL_PRICE' })
        localStorage.setItem("eshop_cart", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContext.Provider value={{ ...state, addToCart, removeItem, setDecrement, setIncrement, clearCart }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {
    CartProvider, useCartContext
}