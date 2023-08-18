import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#2F58CD] text-white rounded-sm shadow-sm px-[15px] py-[4px] text-sm cursor-pointer hover:bg-indigo-500 transition-colors uppercase'>
        {props.children}
    </button>
  )
}

export default Button