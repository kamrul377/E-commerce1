// import React, { useState } from 'react'
// import Button from './Button'
// import { FiShoppingCart } from 'react-icons/fi'
// import { CgClose, CgMenuRightAlt } from 'react-icons/cg'
// import { Link, NavLink } from 'react-router-dom'
// import { useCartContext } from '../context/cartContext'

// const Header = () => {

//     const { cart } = useCartContext()

//     const [open, setOpen] = useState(false)

//     const headerMenu = [
//         { name: "Home", link: "/" || "/home" },
//         { name: "About", link: "/about" },
//         { name: "Products", link: "/products" },
//         { name: "Contact", link: "/contact" }
//     ]


//     return (
//         <>

//             <div className='w-full h-screen bg-[#001C30] flex px-10 py-6 sm:px-5 sm:py-2 justify-center flex-col sm:justify-between sm:h-auto sm:bg-green-500'>


//                 <div className="logo flex justify-center items-center h-[70px] sm:bg-pink-400 sm:my-0 sm:py-0 w-full sm:basis-1/5">
//                     <NavLink to={'/'}>
//                         <img src="images/eshop.png" alt="" className='w-[100px] bg-blue-950 p-1 rounded shadow cursor-pointer' />
//                     </NavLink>
//                 </div>




//                 <div className='sm:bg-lime-400 sm:py-1'> 

//                     <div className="two-menu absolute top-10 right-10 sm:hidden cursor-pointer">
//                         {/* {open ? <CgClose size={25} onClick={() => setOpen(!open)} /> : <CgMenuRightAlt onClick={() => setOpen(!open)} size={25} />} */}
//                         <CgClose size={30} color='#fff'  />
//                     </div>


//                     <ul className='p-2 sm:p-0 sm:flex'>
//                         {headerMenu.map((item, i) => {
//                             return <li key={i} className=' my-6 p-2 flex items-center justify-center uppercase text-xl text-slate-200 hover:underline hover:text-white'> <Link to={item.link}>{item.name}</Link> </li>
//                         })}
//                         <button className='w-full'>
//                             <Button> LogIn </Button>
//                         </button>
//                         <div className="cart-icon w-full my-6 flex justify-center" >
//                             <Link to={'/cart'} className="cart-button  cursor-pointer relative px-1">
//                                 <FiShoppingCart size={40} title='go to cart' color='#fff' className='' />

//                                 <span className='w-5 h-5 bg-indigo-500 absolute top-[-14px] right-[-14px] rounded-full flex justify-center items-center text-white text-sm animate-bounce'> {cart?.length} </span>
//                             </Link>
//                         </div>
//                     </ul>

//                 </div>


//             </div>

//         </>
//     )
// }

// export default Header





import React, { useState } from 'react'
import Button from './Button'
import { FiShoppingCart } from 'react-icons/fi'
import { CgClose, CgMenuRightAlt } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'

const Header = () => {

    const { cart } = useCartContext()

    const [open, setOpen] = useState(false)

    const headerMenu = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Products", link: "/products" },
        { name: "Contact", link: "/contact" }
    ]








    return (
        <>

            <div className='w-full  flex justify-between px-10 py-6 items-center'>
                <div className="logo">
                    <NavLink to={'/'}>
                        <img src="images/eshop.png" alt="" className='w-[100px] bg-blue-950 p-1 rounded shadow cursor-pointer' />
                    </NavLink>
                </div>




                <div>

                    <div className="two-menu absolute top-6 right-3 sm:hidden cursor-pointer">
                        {open ? <CgClose size={25} onClick={() => setOpen(!open)} /> : <CgMenuRightAlt onClick={() => setOpen(!open)} size={25} />}
                    </div>

                    <ul className={`sm:flex sm:gap-4 sm:items-center absolute sm:static left-0 w-full bg-slate-600 text-black sm:bg-inherit top-[80px] duration-300 ${open ? 'right-full opacity-100 z-40' : 'top-[-600px]'}`}>
                        {headerMenu.map((item, i) => {
                            // console.log(item.name)
                            return <li key={i} className='uppercase dark:text-slate-200 hover:text-slate-50 hover:bg-indigo-300 sm:hover:bg-inherit sm:hover:text-slate-900 cursor-pointer my-2 sm:my-0 w-full'> <Link to={item.link}>{item.name}</Link> </li>
                        })}
                        <Button> LogIn </Button>
                        <Link to={'/cart'} className="cart-button flex relative cursor-pointer">
                            <FiShoppingCart size={25} title='go to cart' className='' />
                            <span className='w-5 h-5 bg-indigo-500 absolute top-[-10px] right-[-16px] rounded-full flex justify-center items-center text-white text-sm animate-bounce'> {cart?.length} </span>
                        </Link>
                    </ul>
                </div>


            </div>

        </>
    )
}

export default Header