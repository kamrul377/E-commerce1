import React from 'react'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import Filter from '../components/Filter'

const Products = () => {


  return (
    <div>
      <div className="all-products w-[95%] md:w-[90%] mx-auto flex">


        <section className="filter-section absolute sm:static sm:basis-1/4 w-full p-5 bg-white dark:bg-slate-800">
          <Filter />
        </section>

        <section className="sort-productList w-full sm:basis-3/4 bg-slate-100">
          <div className="sort bg-white dark:bg-slate-800">
            <Sort />
          </div>
          <div className="productList dark:bg-slate-950">
            <ProductList />
          </div>
        </section>

      </div>
    </div>
  )
}

export default Products