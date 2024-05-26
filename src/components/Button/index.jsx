import propTypes from 'prop-types'
import React from 'react'

export function Button({ children, ...rest }) {
  return (
    <button
      className="h-[40px] ml-5 md:mr-[175px] w-[182.81px] rounded-[20px] text-white bg-[#9758A6] hover:opacity-[0.8] active:opacity-[0.5] focus:outline-none border-none"
      type="submit"
      {...rest}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: propTypes.string
}
