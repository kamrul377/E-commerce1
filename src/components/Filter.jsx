import React, { useContext, useState } from 'react'
import { MdManageSearch } from 'react-icons/md'
import { FilterContext } from '../context/FilterContext'
import { Form, NavLink } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';
import { Slider } from '@mui/material';

const Filter = () => {

  const { filters: { text, category, color, price, maxPrice, minPrice }, updateFilterValue, all_products, clearFilter } = useContext(FilterContext);



  const uniqueContent = (data, title) => {
    let name = data.map((item) => {
      return item[title]
    })

    if (title === 'colors') {
      name = name.flat()
    }

    return name = ["all", ...new Set(name)];
  }


  const categoryName = uniqueContent(all_products, "category")
  const companyName = uniqueContent(all_products, "company")
  const colorsData = uniqueContent(all_products, "colors")
  // console.log(colorsData)


  const [colors, setColors] = useState(colorsData[0]);
  // console.log(color)


  return (
    <div>
      <div className="filter">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="search w-full relative">

            <input type="text" name="text" id="search" className='outline-none rounded-sm text-sm text-slate-700 px-3 py-[2px] w-full border-purple-600 border-[1px] bg-white dark:bg-slate-500 dark:border-[#ddd]' value={text} onChange={updateFilterValue} />

            <MdManageSearch color='white' className='bg-[#333] p-[2px] absolute top-0 right-0 w-[40px] h-full rounded-tr-sm rounded-br-sm' />
          </div>

        </form>

        <div className="category-section flex flex-col justify-start mt-5">
          <h1 className='text-2xl my-2'> Category</h1>
          <div className="category-list flex flex-col gap-2 items-start">
            {categoryName.map((item, i) => {
              return <button key={i} className='text-slate-700 capitalize hover:border-b-[2px] border-indigo-400 hover:pl-2 duration-300 text-sm'
                type='button'
                name='category'
                value={item}
                onClick={updateFilterValue}>
                {item}</button>
            })}
          </div>
        </div>


        <div className="company-section mt-5">
          <h1 className='text-2xl my-2'>Company </h1>
          <div className="company">
            <select name="company" id="company" onChange={updateFilterValue} className='bg-white px-3 py-1 text-sm rounded-sm shadow-sm text-slate-700 cursor-pointer border-[1px] border-indigo-900 capitalize w-[60%]'>
              {companyName.map((item, i) => {
                return <option className='text-slate-700' key={i} value={item} name="company">{item}</option>
              })}
            </select>
          </div>
        </div>


        <div className="colors-section mt-5">
          <h1 className='text-2xl my-2'>Colors </h1>
          <div className="colors flex flex-row gap-2">
            {colorsData.map((item, i) => {

              return <button
                name='color'
                value={item}
                key={i}
                style={{ backgroundColor: item }}
                onClick={updateFilterValue}
                onChange={() => setColors(item)}
                className={`w-[25px] h-[25px] rounded-full text-center leading-[25px] hover:scale-90 ring-offset-2 ring-purple-950 ${item === color ? "ring-2" : null}`}>
                {item === 'all' ? <p className='text-[12px] text-slate-600'>All</p> : null} </button>

            })}
          </div>
        </div>

        <div className="colors-section mt-5">
          <h1 className='text-2xl my-2'>Price </h1>
          <div className="price">
            <p className='text-slate-700'>{<FormatPrice price={price} />}</p>

            {/* <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} step={10000} /> */}

            <Slider
              aria-label="price"
              defaultValue={200000}
              step={10000}
              value={price}
              min={minPrice}
              max={maxPrice}
              name='price'
              onChange={updateFilterValue}
            />

          </div>
        </div>

        <div className='clear-filter-btn'>
          <button  onClick={clearFilter} className='bg-pink-900 text-slate-100 px-4 py-1 rounded-sm shadow-sm hover:bg-pink-600 duration-150'>
            clear filter
          </button>
        </div>

      </div>
    </div>
  )
}

export default Filter