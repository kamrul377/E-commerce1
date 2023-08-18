import React from 'react'
import Slider from './Slider'

const Trusted = () => {

    const images = [
        { url: 'images/image1.png' },
        { url: 'images/image3.png' },
        { url: 'images/image4.png' },
        { url: 'images/image4.png' },
        { url: 'images/image4.png' },
        { url: 'images/image4.png' },
        { url: 'images/image5.png' }
    ]

    // console.log(images[0].img)
    return (
        <section className='bg-[#f7f7f7]'>
            <div className='w-[95%] sm:w-[80%] mx-auto py-16'>
                <h2 className='text-slate-600 text-sm mb-7 text-center'>Trusted by 1000+ Companies </h2>
                <div className="carosel hover:cursor-pointer">
                    <Slider images={images} />
                </div>
            </div>

        </section>
    )
}

export default Trusted