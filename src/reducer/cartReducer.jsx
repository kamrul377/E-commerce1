

// import toast, { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';




const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        const { id, color, amount, product } = action.payload;
        console.log(action.payload)


        let existingProduct = state.cart.find((curItem) => curItem.id === id + color)

        console.log(existingProduct)
        if (existingProduct) {
            let updateCart = state.cart.map((item) => {
                if (item.id === id + color) {
                    let newAmount = item.amount + amount

                    return {
                        ...item,
                        amount: newAmount
                    }
                } else {
                    item
                }
            })

            return {
                ...state,
                cart: updateCart,

            }

        } else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                price: product.price,
                amount,
                image: product.image[0].url,
                max: product.stock


            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],


            }

        }




    }

    if (action.type === 'REMOVE_ITEM') {
        const id = action.payload;
        const newCartItem = state.cart.filter((curItem) => {
            return curItem.id !== id;
        })
        return {
            ...state,
            cart: newCartItem
        }
    }
    if (action.type === 'CLEAR_CART') {
        return {
            cart: []
        }
    }

    if (action.type === 'INCREMENT_VALUE') {
        // console.log(state.cart.length,action.payload)
        let updatedProduct = state.cart.map((curItem) => {
            if (curItem.id === action.payload) {
                let quantity = curItem.amount + 1
                if (quantity > curItem.max) {
                    // toast.error('product stock out')
                    console.log('stock out'),
                        quantity = curItem.max
                }
                return {
                    ...curItem,
                    amount: quantity
                }

            } else {
                return curItem
            }

        })

        return {
            ...state,
            cart: updatedProduct
        }
    }
    if (action.type === 'DECREMENT_VALUE') {
        let updatedProduct = state.cart.map((curItem) => {
            if (curItem.id === action.payload) {
                let quantity = curItem.amount - 1
                if (quantity <= 1) {
                    // debugger
                    console.log('minimum 1 product')
                    quantity = 1
                }
                return {
                    ...curItem,
                    amount: quantity
                }

            } else {
                return curItem
            }

        })

        return {
            ...state,
            cart: updatedProduct
        }
    }
    if (action.type === "CART_TOTAL_PRICE") {
        // let total_price = state.cart.reduce((initialVal, curElem) => {
        //     let { price, amount } = curElem;
        //     initialVal = initialVal + price * amount;


        //     return initialVal
        // }, 0)   
        let total_price = 0

        state.cart?.map((curCart) => {
            total_price += curCart.price * curCart.amount
        })



        console.log(total_price)

        return {
            ...state,
            total_price,
        }
    }




    return state
}

export default cartReducer