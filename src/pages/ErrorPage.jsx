import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

const ErrorPage = () => {
  return (
    <section className='bg-slate-50 w-full'>
      <div className="div flex justify-center items-center flex-col py-28 gap-7">
        <h1 className='text-red-400 text-xl'>Page Not Found</h1>
        <img src="images/error.png" alt=""  className='w-[320px] duration-500 transform animate-bounce' />
        <NavLink to={'/'}> 
          <Button> GoTo Home</Button>
        </NavLink>
      </div>
    </section>
  )
}

export default ErrorPage