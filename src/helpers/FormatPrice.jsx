import React from 'react'

const FormatPrice = ({price}) => {
  return (
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
      roundingIncrement: 5,
    }).format(price/1000)
  )
}

export default FormatPrice