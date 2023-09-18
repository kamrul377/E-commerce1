import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { IoArrowRedoOutline } from 'react-icons/io5'

const HeroSection = ({ storeName }) => {
    return (
        <div>

            <div className="hero-section  items-center py-16 bg-white ">
                <div className='w-[95%] md:w-[80%] mx-auto grid grid-cols-2'>
                    <div className="content-section bg-white  pt-5 pr-3">
                        <p className='text-indigo-500 '>Welcome to</p>
                        <h1 className='text-4xl mb-3 font-bold '>{storeName}</h1>
                        <p className='my-3 text-slate-600 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore facilis molestias at eos maiores quisquam hic esse id magni?</p>
                        <NavLink to={'/products'} >
                            <Button> shop now  </Button>

                        </NavLink>
                    </div>
                    <div className="image-section">
                        <img className='rounded shadow-sm' src="images/shoping.jpg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection