import React, { useState } from 'react'

const Images = ({ images = [{ url: "" }] }) => {
    const [prevImage, setPrevImage] = useState(images[0])
    // console.log('prev img',prevImage)
    return (
        <div className='flex w-full justify-between pr-6 gap-4'>
            <div className="image-slide grid grid-rows-4 basis-1/3 gap-2 items-center">
                {/* {images ? "":<div> loading..</div>} */}
                {images && images.map((item, i) => {
                    return <img src={item.url} alt={item.name} key={i} onClick={() => setPrevImage(item)} className='rounded shadow cursor-pointer hover:blur-[2px]' />
                })}
            </div>
            <div className="preview-image basis-2/3 flex items-center justify-center">
                {images && <img className='rounded shadow hover:cursor-zoom-in' src={prevImage.url || images[0].url} alt={prevImage.filename} />}
            </div>
        </div>
    )
}

export default Images