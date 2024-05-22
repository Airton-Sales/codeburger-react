import propTypes from 'prop-types'
import React from 'react'

function Card({ children, ...rest }) {
  return (
    <article className="w-[283.4px]">
      <img className="rounded-[20px] mb-3" alt="" {...rest} />
      {children}
    </article>
  )
}

export default Card

Card.propTypes = {
  children: propTypes.node
}
