import React from 'react'

interface PropTypes{
  largeText?: string,
  smallText?:string
}

const Logo = ({largeText="", smallText=""}:PropTypes) => {
  return (
    <div className='flex items-end gap-x-1 p-2'>
      <h1 className={`text-primary font-semibold md:text-4xl ${largeText}`}>Expense</h1>
      <h3 className={`text-blue-500 font-medium text-2xl ${smallText}`}>Tracker</h3>
    </div>
  )
}

export default Logo
