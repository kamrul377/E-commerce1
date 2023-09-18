import React, { useState } from 'react'
import FormatPrice from '../helpers/FormatPrice'
import { MdDeleteForever } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiMinus } from 'react-icons/bi'
import { useCartContext } from '../context/cartContext'
import CartAmount from './CartAmount'
import { Toaster } from 'react-hot-toast'



const CartItem = ({ id, image, name, color, amount, price }) => {

    const { removeItem, setDecrement, setIncrement } = useCartContext()
    // const [quantity, setQuantity] = useState(amount);

    return (
        <div className="items flex justify-between items-center first:mt-0 mt-2">
            <div className="item flex justify-start items-center  basis-2/6">
                <img className='h-16 w-28  rounded shadow ' src={image} alt={image} />
                <div className="name-color ml-4 text-sm text-slate-700 ">
                    <p>{name} </p>
                    <p className='flex gap-1 items-center'>Color: <button className={`h-4 w-4 rounded-full`} style={{ backgroundColor: color }}>  </button> </p>
                </div>
            </div>
            <div className="price basis-1/6 text-center text-sm text-slate-700 ">
                <p>{<FormatPrice price={price} />}</p>
            </div>

            {/* quantity  */}
            <div className="quantity basis-1/6 text-center text-sm flex justify-center text-slate-700  gap-4">
                <button > <BiMinus onClick={() => setDecrement(id)} size={25} color='#000000' className='  rounded-sm  active:scale-90' /> </button>
                {amount}
                <button> <AiOutlinePlus onClick={() => setIncrement(id)} size={25} color='#000000' className='  rounded-sm active:scale-90' /> </button>
            </div>


            <div className="subtotal basis-1/6 text-center text-sm text-slate-700 dark:text-slate-400">
                {<FormatPrice price={price * amount} />}
            </div>
            <div className="remove basis-1/6 flex justify-end animate-pulse hover:animate-none">
                <MdDeleteForever onClick={() => removeItem(id)} title='remove item' size={30} color='red' className='cursor-pointer active:scale-90' />
            </div>



            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    )
}

export default CartItem