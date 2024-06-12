import PropTypes from 'prop-types'
import React from 'react'

import Lixeira from '../../assets/lixeira.svg'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'

export function ProductCardTwo({ product }) {
  const { increaseProducts, decreaseProducts, deleteProducts } = useCart()
  console.log(product)
  return (
    <div className="w-[852px] flex items-center bg-white rounded-[20px]">
      <img
        className="w-[135px] h-[131px] ml-3 rounded-[20px]"
        src={product.url}
        alt="foto do produto"
      />
      <div className="flex flex-col w-[100%] ml-3">
        <header className="w-[674px] h-[42px] mt-2 grid grid-cols-5 mb-24">
          <p className="flex justify-center items-center text-[16px]">
            {product.name}
          </p>
          <p className="flex items-center justify-center text-[18px] font-medium">
            {formatCurrency(product.price)}
          </p>
          <p className=" ml-11 text-[18px] font-medium flex items-center gap-5">
            <button onClick={() => decreaseProducts(product.id)}>-</button>
            {product.quantity}
            <button onClick={() => increaseProducts(product.id)}>+</button>
          </p>
          <p className="flex justify-center items-center ml-10 text-[18px] font-medium">
            {formatCurrency(product.price * product.quantity)}
          </p>
          <button
            className="flex justify-center"
            onClick={() => deleteProducts(product.id)}
          >
            <img className="w-[40px]" src={Lixeira} alt="lixeira" />
          </button>
        </header>
      </div>
    </div>
  )
}

ProductCardTwo.propTypes = {
  product: PropTypes.object
}
