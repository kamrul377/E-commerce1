import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { FaCanadianMapleLeaf } from 'react-icons/fa'

const Services = () => {
    return (
        <div className='bg-white  py-10'>
            <div className="services grid sm:grid-cols-3 w-[95%] md:w-[80%] mx-auto gap-4">
                <div className='bg-[#f7f7f7] flex justify-center items-center flex-col h-[200px] shadow rounded-sm'>
                    <TbTruckDelivery size={45} color='#5C469C' className='bg-white m-2 p-[5px] rounded-full' />
                    <p className='text-slate-600 text-sm'>Super Fast and Free Delivery</p>
                </div>



                <div className='flex flex-col h-[200px] gap-2 '>
                    <div className='bg-[#f7f7f7] w-full h-1/2 rounded-sm shadow flex justify-center items-center flex-col'>
                        <GiReceiveMoney size={45} color='#5C469C' className='bg-white m-2 p-[5px] rounded-full' />
                        <p className='text-slate-600 text-sm'>Super Fast and Free Delivery</p>
                    </div>
                    <div className='bg-[#f7f7f7] w-full h-1/2 rounded-sm shadow align-middle flex justify-center items-center flex-col'>
                        <FaCanadianMapleLeaf size={45} color='#5C469C' className='bg-white m-2 p-[5px] rounded-full' />
                        <p className='text-slate-600 text-sm'>Super Fast and Free Delivery</p>
                    </div>
                </div>



                <div className='bg-[#f7f7f7] flex justify-center items-center flex-col h-[200px] shadow rounded-sm'>
                    <RiSecurePaymentFill size={45} color='#5C469C' className='bg-white m-2 p-[5px] rounded-full' />
                    <p className='text-slate-600 text-sm'>Super Fast and Free Delivery</p>
                </div>
            </div>
        </div>
    )
}

export default Services