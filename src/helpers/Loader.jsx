

import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#d7e3eb]'>
                <ThreeCircles
                    height="200"
                    width="200"
                    color="#6554AF"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>
        </>
    )
}

export default Loader