import React from 'react'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import Filter from '../components/Filter'
import { useState } from 'react'

const Products = () => {

  // const [sideBarOpen, setSideBarOpen] = useState(false)


  return (
    <div>
      <div className="all-products w-[95%] md:w-[90%] mx-auto flex">


        <section className="filter-section absolute bg-[#f6f6f6] shadow w-3/4 sm:static sm:basis-1/4 sm:w-full p-5  z-50  sm:h-screen sm:bg-white">
          <Filter />
        </section>

        <section className="sort-productList w-full sm:basis-3/4 bg-slate-100">
          <div className="sort bg-white ">
            <Sort />
          </div>
          <div className="productList ">
            <ProductList />
          </div>
        </section>

      </div>
    </div>
  )
}

export default Products