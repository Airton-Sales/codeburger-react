import PropTypes from 'prop-types'
import React from 'react'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  return (
    <div className="w-[387px] h-[202px] flex items-center justify-center rounded-[20px] bg-white">
      <img
        className="w-[186px] h-[172px] ml-3 rounded-[20px]"
        src={product.url}
        alt="foto do produto"
      />
      <div className="flex flex-col w-[100%] rounded-[20px] ml-3 bg-white">
        <div className="w-[151px] h-[116px] mb-7 flex flex-col justify-between bg-white">
          <p className="bg-white">{product.name}</p>
          <p className="text-[18px] font-medium bg-white">
            {product.formatedPrice}
          </p>
        </div>
        <Button
          onClick={() => putProductInCart(product)}
          style={{ margin: 0, width: '156px', height: '36px' }}
        >
          Adicionar
        </Button>
      </div>
    </div>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
