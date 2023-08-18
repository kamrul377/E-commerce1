

import toast, { Toaster } from 'react-hot-toast';



import React from 'react'

const Toast = ({msg}) => {
    return (

        <div>




            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    )
}

export default Toast