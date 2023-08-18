

const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElm) => curElm.price)
            let maxPrice = Math.max(...priceArr)
            // console.log(maxPrice)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice,
                    price: maxPrice
                }
            };
        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }


        case "SORTING_PRODUCTS":

            let newSortData;
            let { filter_products } = state;
            let tempSortProduct = [...filter_products]

            const sortingProducts = (a, b) => {
                if (state.sorting_value === 'lowest') {
                    return a.price - b.price
                }
                if (state.sorting_value === 'highest') {
                    return b.price - a.price
                }
                if (state.sorting_value === 'a-z') {
                    return a.name.localeCompare(b.name)
                }
                if (state.sorting_value === 'z-a') {
                    return b.name.localeCompare(a.name)
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts)

            return {
                ...state,
                filter_products: newSortData
            }
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilerData = [...all_products];

            const { text, category, company, color, price } = state.filters;
            if (text) {
                tempFilerData = tempFilerData.filter((curElm) => {
                    return curElm.name.toLowerCase().includes(text)
                })
            }
            // console.log(category)
            if (category !== 'all') {
                tempFilerData = tempFilerData.filter((curElm) => {
                    return curElm.category === category;
                })
            }

            if (company !== 'all') {
                tempFilerData = tempFilerData.filter((curElm) => {
                    return curElm.company.toLowerCase() === company.toLowerCase();
                })
            }
            if (color !== 'all') {
                tempFilerData = tempFilerData.filter((curElm) => {
                    return curElm.colors.includes(color)
                })
            }
            if (price === 0) {
                tempFilerData = tempFilerData.filter((curElm) => {
                    return curElm.price == price
                })
            }
            if (price) {
                tempFilerData = tempFilerData.filter((curElm) => {
                    return curElm.price <= price
                })
            }



            return {
                ...state,
                filter_products: tempFilerData,
            }
        case "CLEAR_FILTER":
            return {
                ...state,

                filters: {
                    text: '',
                    category: 'all',
                    company: 'all',
                    color: 'all',
                    maxPrice: 0,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.maxPrice
                }
            }




        default:
            return state

    }
}
export default filterReducer