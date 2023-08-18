import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
import Product from './Product'
import { Skeleton } from '@mui/material'
import Loader from '../helpers/Loader'


const FeatureProduct = () => {

  const { isLoading, featureProducts } = useContext(AppContext)

  return (
    <div className='bg-[#f7f7f7] dark:bg-[#382e3e] py-10 '>

      <div className='w-[95%] md:w-[80%] mx-auto'>
        <p className='text-purple-600 dark:text-cyan-400 text-[10px]'>CHECK NOW</p>
        <h1 className='capitalize text-3xl text-black dark:text-slate-300'>our feature services</h1>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-5 mb-3'>
          {isLoading && <Loader /> }
          {featureProducts.map((item, index) => {
            return <Product key={index}  {...item} />
          })}
        </div>

      </div>
    </div>
  )
}

export default FeatureProduct