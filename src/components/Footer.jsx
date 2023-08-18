import React from 'react'
import Button from './Button'
import { CiFacebook } from 'react-icons/ci'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='relative'>


            <div className="footer-up my-6 absolute top-[-82px] right-0 w-full shadow">
                <div className='w-[95%] md:w-[80%] mx-auto'>
                    <div className='flex justify-between bg-[#f7f7f7] dark:bg-[#570029] py-4 px-10 items-center rounded shadow'>
                        <div><p className='text-slate-700 dark:text-slate-200'>Ready to get started? <br /> Talk to us today</p></div>
                        <div>
                            <Button> get started</Button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="footer-down bg-[#161a2e] text-slate-200 py-10 mt-20">
                <div className='w-[95%] sm:w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2'>
                    <div>
                        <p className='text-slate-200 mb-4'>E-shop Technical</p>
                        <h4 className='text-slate-400 text-sm'>Lorem ipsum dsimilique est aperiam dolores sed modi!</h4>
                    </div>
                    <div>
                        <h2 className='text-lg text-white'>Subscribe to get important udpates</h2>
                        <form action="" className='mt-5'>
                            <input type="email" name="" placeholder='YOUR E-MAIL' className='w-[80%] rounded-sm p-[4px] text-[12px] mb-3 focus:outline-none border text-slate-800 focus:border-indigo-700' />

                            <Button> subscribe </Button>
                        </form>
                    </div>
                    <div>
                        <h1>Follow us</h1>
                        <div className="icon flex gap-2 mt-5">
                            <CiFacebook className='cursor-pointer border rounded-full p-[2px] border-slate-600' size={30} />
                            <FaInstagram className='cursor-pointer border rounded-full p-[2px] border-slate-600' size={30} />
                            <FaYoutube className='cursor-pointer border rounded-full p-[2px] border-slate-600' size={30} />
                        </div>
                    </div>
                    <div>
                        <p>Call us</p>
                        <a href="tel:+8801970052671">+8801970052671</a>

                    </div>

                </div>
                <hr className='bg-slate-700 mt-8' />
                <div className='grid justify-items-center sm:grid-cols-2 mt-5'>
                    <p className='text-sm text-slate-400'>&copy; 2023 E-shop all right reserved</p>
                    <p className='uppercase text-sm text-slate-400'>Privacy policy Tearms & conditions</p>
                </div>
            </div>

        </div>
    )
}

export default Footer