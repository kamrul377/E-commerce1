import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/ProductContext'
import BreadCrumbs from '../helpers/BreadCrumbs'
import FormatPrice from '../helpers/FormatPrice'
import { TbTruckDelivery } from 'react-icons/tb'
import { LuReplaceAll } from 'react-icons/lu'
import { MdOutlineSecurity } from 'react-icons/md'
import { AiOutlineSafety } from 'react-icons/ai'
import Images from '../helpers/Images'
import RatingBar from '../helpers/RatingBar'
import AddToCart from '../components/AddToCart'
import Loader from '../helpers/Loader'

const API = 'https://api.pujakaitem.com/api/products'

const SingleProduct = () => {
  const { id } = useParams()

  const { isSingleLoading, singleProduct, getSingleProduct } = useContext(AppContext)


  const {
    id: alias, name, company, price, description, category, image, stock, reviews, stars, colors
  } = singleProduct;

  // console.log(price , 27 )

  useEffect(() => {

    getSingleProduct(`${API}?id=${id}`)

  }, [])


  const secureTheme = [
    { icon: <TbTruckDelivery size={25} color='#111' />, title: "Free Delivery" },
    { icon: <LuReplaceAll size={25} color='#111' />, title: "30 Days Replacement" },
    { icon: <MdOutlineSecurity size={25} color='#111' />, title: "E-shop Delivery" },
    { icon: <AiOutlineSafety size={25} color='#111' />, title: "2 Year Warranty" },
  ]

  return (

    <div className='bg-white '>
      <BreadCrumbs title={name} />
      {isSingleLoading && <Loader />}




      <div className='w-[95%] md:w-[80%] mx-auto py-3 mt-2'>
        <div className="single-item grid sm:grid-cols-2 items-center">
          <div className="image-item">
            <Images images={image} />
          </div>
          <div className="content-item text-slate-800  flex flex-col gap-3">
            <h1 className='text-4xl font-bold'>{name}</h1>

            <div className='flex gap-2'>
              {<RatingBar rating={stars} />}
              {<p> ({reviews} customer reviews)</p>}
            </div>

            <p>MRP: <del>{<FormatPrice price={price + 2500} />}</del> </p>
            <p className='text-purple-800 '>Deal of the day : <b><FormatPrice price={price} /></b> </p>
            <p className='font-normal'> {description}</p>
            <div className="secure-themes flex gap-1 w-full justify-between my-4">
              {secureTheme.map((items, index) => {
                return <div key={index} className=' flex flex-col justify-center items-center border-b-2 '>
                  <span className='bg-white  rounded-full p-[2px]'>{items.icon}</span>
                  <p className='text-[12px] text-slate-700 '>{items.title}</p>
                </div>
              })}
            </div>
            <p>Available: <b>{stock > 0 ? "In Stock" : "Not Available"}</b></p>
            <p>Id: <b>{id}</b></p>
            <p>Brand: <b>{company}</b></p>
            <div className='w-full h-[2px] bg-slate-300  my-4'></div>

            {stock > 0 && <AddToCart product={singleProduct} />}

          </div>
        </div>
      </div>


    </div>
  )
}

export default SingleProduct