import React from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const BreadCrumbs = ({ title }) => {
    return (
        <section className='bg-[#435B66] text-white flex justify-center items-center py-6 px-auto text-sm uppercase gap-2'>
            <NavLink to={'/'} className='flex items-center justify-center hover:scale-110 hover:text-slate-200 duration-150'> <HiOutlineHome title='home' /> HOME  </NavLink>
            <div> /  {title}</div>
        </section>
    )
}

export default BreadCrumbs