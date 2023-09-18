import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import FormatPrice from '../helpers/FormatPrice'

const Product = (item) => {
    const { id, name, image, price, category } = item

    // console.log(price, 9)
    return (
        <NavLink to={`/singleProduct/${id}`}>
            <div className="card w-[80%] bg-white  rounded-sm shadow-sm p-3 mx-auto my-2">
                <div className="img relative">
                    <img src={image} alt={name} className='rounded hover:scale-95 duration-200' />
                    <span className='uppercase absolute top-2 right-2 bg-white  px-3 py-[3px] rounded-full text-[10px] text-purple-800'>{category}</span>
                </div>
                <div className="content flex justify-between mt-3 text-slate-600  text-sm">
                    <p>{name}</p>
                    <p>{<FormatPrice price={price}/>}</p>
                    {/* <p>{price}</p> */}
                </div>
            </div>
        </NavLink>
    )
}

export default Product