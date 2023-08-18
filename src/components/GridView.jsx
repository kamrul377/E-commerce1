import React from 'react'
import Product from './Product'
import Loader from '../helpers/Loader'

const GridView = ({ products }) => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 ">
                {
                    products && products.map((item) => {
                        return <Product {...item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default GridView