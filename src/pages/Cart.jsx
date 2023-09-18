import React from 'react'
import { useCartContext } from '../context/cartContext'
import CartAmount from '../components/CartAmount'

import CartItem from '../components/CartItem'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice'
import axios from 'axios'

const Cart = () => {
  const { cart, clearCart, total_price, shiping_free } = useCartContext()
  // console.log(cart.length)
  // console.log(total_price, shiping_free)

  const handlePayment = (value) => {
    const data = {
      name: "kamrul islam",
      email: 'mdkamrulislam9810@gmail.com',
      address: "raichata",
      amount: value
    }

    fetch("http://localhost:3002/api/user/checkout", {
      method: 'post',
      headers: { 'content-type': "application/json" },
      body: JSON.stringify(data)
    }).then(res => res.json()).then((result) => {
      window.location.replace(result.url)
    })

  }

  // #ffed59

  return (

    // bg-[url('/images/patterns.png')]

    <div className="w-screen bg-[#f9f9f9] bg-fixed" name="cart">

      <div className='w-[95%] sm:w-[80%] mx-auto bg-white p-5 my-3 rounded shadow-inner' >
        <div className="title uppercase flex justify-between w-full text-slate-700  font-bold text-center">
          <p className='basis-2/6 text-left'>item</p>
          <p className='basis-1/6'>price</p>
          <p className='basis-1/6'>quantity</p>
          <p className='basis-1/6'>subtotal</p>
          <p className='basis-1/6 text-right'>remove</p>
        </div>

        <hr className='bg-[#f7f7f7] h-[1px] w-full my-5' />

        {cart == [] && <div className='w-full h-48 flex justify-center items-center text-slate-500 text-3xl'> cart is currently empty </div>}

        {
          cart && cart.map((curItem, i) => {
            return <CartItem key={i} {...curItem} />
          })
        }


        <hr color='blue' className='h-[1px] w-full my-5' />


        <div className="button flex justify-between">

          <NavLink to={'/products'}>
            <button className='bg-purple-800 hover:bg-purple-500 text-white px-3 py-[6px] rounded shadow text-sm capitalize'>continue to shoping</button>
          </NavLink>


          <button onClick={clearCart} className='bg-pink-900 hover:bg-pink-700 text-white px-3 py-[6px] rounded shadow text-sm capitalize'>clear cart</button>

        </div>


        <div className='bg-gradient-to-r from-blue-500 to-cyan-500 mt-10 p-4 w-[300px] ml-auto rounded shadow flex justify-between'>

          {/* 
          <p> Amount {<FormatPrice price={total_price} />} </p>
          <p> Shipping fee {shiping_free}</p> <br /> */}
          <div>
            <p className='flex justify-between'>Amount  ----<span>{<FormatPrice price={total_price} />}</span></p>
            <p>Shipping Fee -----<span>{shiping_free}</span></p>
          </div>

          <button onClick={() => handlePayment(25000)}>Checkout </button>
        </div>


      </div>


    </div >
  )
}

export default Cart