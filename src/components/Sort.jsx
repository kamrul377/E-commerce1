import React, { useContext } from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { TfiLayoutListThumbAlt } from 'react-icons/tfi'
import { FilterContext } from '../context/FilterContext'

const Sort = () => {

    const { grid_view, filter_products, setGridView, setListView, sorting } = useContext(FilterContext)
    console.log(grid_view)

    return (
        <div className='w-full flex justify-between  p-5'>
            <div>
                <div className="icons flex gap-2">
                    <BsGrid3X3GapFill onClick={() => setGridView(true)} size={30} color={grid_view ? '#333' : '#ddd'} className={`${grid_view ? 'bg-slate-200' : 'bg-slate-800'} p-[5px] cursor-pointer rounded-sm shadow-sm`}
                    />


                    <TfiLayoutListThumbAlt size={30} color={grid_view ? '#ddd' : '#333'} className={`${grid_view ? 'bg-slate-800' : 'bg-slate-200'} p-[5px] cursor-pointer rounded-sm shadow-sm`}
                        onClick={() => setListView(true)}
                    />
                </div>
            </div>
            <div>
                <p>{filter_products.length} total products</p>
            </div>
            {/* drop down */}


            <div className='drop-down'>
                <select name="sort" id="sortId" className='bg-white px-3 py-1 text-sm rounded-sm shadow-sm text-slate-700 cursor-pointer border-[1px] border-indigo-900' onChange={sorting}>
                    {/* <option value="#">Filter </option> */}
                    <option value="lowest">Price (lowest)</option>
                    <option value="highest">Price (highest)</option>
                    <option value="a-z">Price (a-z)</option>
                    <option value="z-a">Price (z-a)</option>
                </select>
            </div>

        </div>
    )
}

export default Sort