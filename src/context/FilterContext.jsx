import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import filterReducer from '../reducer/filterReducer'

const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters:{ 
        text: '',
        category: 'all', 
        company: 'all', 
        color: 'all',
        maxPrice: 0, 
        price: 0, 
        minPrice: 0
    },
    
    
}

const FilterContextProvider = ({ children }) => {

    const { products } = useContext(AppContext)
    // console.log(products,15)

    const [state, dispatch] = useReducer(filterReducer, initialState)

    // set grid veiw
    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" })
    }
    // set list veiw
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    // product sorting
    const sorting = (e) => {
        const userValue = e.target.value
        // console.log(userValue)
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }
    const updateFilterValue = (e) => { 
        const name = e.target.name; 
        const value = e.target.value;
        // console.log(name,value)

        dispatch({type: "UPDATE_FILTER_VALUE", payload: {name,value}})
    }

    const clearFilter = () => { 
        dispatch({type:"CLEAR_FILTER"})
    }

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })

    }, [products])

    // to sort the products
    useEffect(() => {
        
        dispatch({type:'FILTER_PRODUCTS'})
        dispatch({ type: "SORTING_PRODUCTS" })

    }, [products,state.sorting_value, state.filters])



    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting,updateFilterValue ,clearFilter}}>
        {children}
    </FilterContext.Provider>
}

export {
    FilterContext,
    FilterContextProvider
}

