import React from 'react'
import {GrFormAdd} from 'react-icons/gr'
import {BiMinus} from 'react-icons/bi'

const CartAmount = ({amount, setIncrement, setDecrement}) => {

  

  return (
    <div>
        <div className="add-btn flex gap-5 mt-4 ">

            <button onClick={()=> setDecrement()}> <BiMinus size={25}  /> </button>


            <div className='text-lg text-slate-900 dark:text-slate-400'>{amount}</div>

            <button  onClick={()=> setIncrement()}> <GrFormAdd size={25} /> </button>

        </div>
    </div>
  )
}

export default CartAmount