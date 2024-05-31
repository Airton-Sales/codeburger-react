import PropTypes from 'prop-types'
import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'

export function ProductCardTwo({ product }) {
  const { putProductInCart } = useCart()
  console.log(product)
  return (
    <div className="w-[852px] flex items-center bg-white rounded-[20px]">
      <img
        className="w-[135px] h-[131px] ml-3 rounded-[20px]"
        src={product.url}
        alt="foto do produto"
      />
      <div className="flex flex-col w-[100%] ml-3">
        <header className="w-[674px] h-[42px] mt-2 grid grid-cols-4 mb-24">
          <p className="text-[16px]">{product.name}</p>
          <p className="text-[18px] font-medium">
            {formatCurrency(product.price)}
          </p>
          <p className="text-[18px] font-medium flex gap-5 items-center ml-2 mb-5">
            <button>-</button>
            {product.quantity}
            <button onClick={() => putProductInCart(product)}>+</button>
          </p>
          <p className="mr-10 text-[18px] font-medium">
            {formatCurrency(product.price * product.quantity)}
          </p>
        </header>
      </div>
    </div>
  )
}

ProductCardTwo.propTypes = {
  product: PropTypes.object
}
