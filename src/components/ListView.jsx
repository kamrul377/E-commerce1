import React from 'react'
import FormatPrice from '../helpers/FormatPrice';
import { NavLink } from 'react-router-dom';
import Loader from '../helpers/Loader';


const ListView = ({ products }) => {
  // console.log(products)
  return (
    <div>
      {products ? products.map((item) => {
        const { image, name, description, price, id } = item;
        return <div key={id} className="cart w-[90%] sm:w-[80%] border-[2px] border-solid border-slate-200 px-10 rounded  py-5 flex gap-4 my-2 odd:border-l-purple-700  dark:text-slate-300  items-center bg-white">
          <div className="image basis-1/3">
            <img src={image} alt={image.name} className='rounded shadow-sm cursor-pointer' />
          </div>
          <div className='basis-2/3'>
            <h1 className='text-2xl dark:text-slate-700'>{name}</h1>
            <p className='dark:text-slate-700'>{<FormatPrice price={price} />}</p>
            <p className='text-sm text-slate-700'>{description.slice(0, 90) + "..."}</p>
            <NavLink to={`/singleproduct/${id}`}>
              <button className='bg-transparent mt-5 hover:bg-blue-800 text-blue-800 hover:text-white px-4 py-[4px] duration-200 border-blue-800 border-[1px] rounded-sm uppercase text-[12px]'>read more</button>
            </NavLink>
          </div>
        </div>
      }) : <Loader />}
    </div>
  )
}

export default ListView