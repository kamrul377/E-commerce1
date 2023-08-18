


const producReducer = (state, action) => {
    if (action.type === "LOADING") {
        return {
            ...state,
            isLoading: true,
        }
    }
    else if (action.type === "ERROR") {
        return {
            ...state,
            isError: true,
            isLoading: false
        }
    } else if (action.type === "SET_DATA") {
        const featureData = action.payload.filter((curElem) => {
            return curElem.featured === true;
        })

        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData
        }
    }
    
    else if(action.type === "SET_SINGLE_LOADING"){ 
        return{ 
            ...state, 
            isSingleLoading: true
        }
    }
    
    else if(action.type === "SET_SINGLE_PRODUCT"){
        
        return{ 
            ...state, 
            isSingleLoading:false, 
            singleProduct: action.payload
        }
    } else if(action.type === "SINGLE_ERROR"){ 
        return{ 
            ...state, 
            isSingleLoading:false, 
            isError: true
        }
    }

    else{
        return state
    }
}

export default producReducer