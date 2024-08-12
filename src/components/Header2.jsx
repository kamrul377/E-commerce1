import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/eshop.png'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartContext } from '../context/cartContext'
import { CgProfile } from 'react-icons/cg'

const Header2 = () => {

  const [open, setOpen] = useState(false)
  const { cart } = useCartContext()


  const tabs = [
    {
      id: 1,
      link: 'Home',
      url: '/',

    },
    {
      id: 2,
      link: 'About',
      url: '/about'
    },
    {
      id: 3,
      link: 'Products',
      url: '/products'
    },
    {
      id: 4,
      link: 'Contact',
      url: '/contact'
    },
  ]

  return (
    <div className='flex justify-between items-center w-full px-6 md:px-12 h-20 text-white bg-black z-50'>
      <div className='text-5xl ml-2'>
        <a href="/home">
          <img src={Logo} alt="" className='w-[120px]' />
        </a>
      </div>
      <ul className='flex'>
        {
          tabs.map((i, index) => {
            return <li key={index} className='text-gray-400 px-4 hover:cursor-pointer hover:scale-105 duration-200 hidden md:flex hover:text-white'>
              <NavLink
                to={i.link}>
                {i.link}
              </NavLink>
            </li>
          })
        }

        {/* <button className='hidden md:block bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-1 rounded mr-3'> LogIn </button> */}

        <Link className="method mx-3">
          <CgProfile size={25} title="profile" />
        </Link>

        <Link to={'/cart'} className="cart-button md:flex relative cursor-pointer hidden">
          <FiShoppingCart size={25} title='go to cart' className='' />
          <span className='w-5 h-5 bg-indigo-500 absolute top-[-10px] right-[-16px] rounded-full flex justify-center items-center text-white text-sm animate-bounce'> {cart?.length}  </span>
        </Link>


        <div className="phone md:hidden cursor-pointer z-50" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </ul>

      {open && <div className={`phone-open fixed z-40 flex w-full h-screen justify-center items-center bg-gradient-to-b from-black to-slate-900 top-0 left-0 duration-200 md:hidden`}>
        <ul className='text-white flex flex-col gap-5'>
          {tabs && tabs.map((i, index) => {
            return <li key={i} className='text-gray-400 px-4 hover:cursor-pointer hover:scale-105 duration-200 text-center text-2xl'>
              <NavLink to={i.link} onClick={() => setOpen(false)}> {i.link} </NavLink>
            </li>
          })}

          {/* <button className='block bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-1 rounded mr-3'> LogIn </button> */}

          <Link onClick={() => setOpen(false)} to={'/cart'} className="cart-button md:flex relative cursor-pointer mx-auto">
            <FiShoppingCart size={25} title='go to cart' className='' />
            <span className='w-5 h-5 bg-indigo-500 absolute top-[-10px] right-[-16px] rounded-full flex justify-center items-center text-white text-sm animate-bounce'> {cart?.length} </span>
          </Link>


        </ul>
      </div>}
    </div>
  )
}

export default Header2