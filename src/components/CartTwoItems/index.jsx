import React from 'react'

import { useCart } from '../../hooks/CartContext'
import { ProductCardTwo } from '../ProductCardTwo'
export function CartTwoItems() {
  const { cartProducts } = useCart()
  console.log(cartProducts)
  return (
    <>
      <div className="flex">
        <div className="w-[853px] h-[100%] bg-white mb-20 rounded-[20px]">
          <header className="w-[674px] h-[25px] ml-[9.7rem] mt-2 grid grid-cols-4 justify-between">
            <p className="text-[#9A9A9D]">Itens</p>
            <p className="text-[#9A9A9D]">Preço</p>
            <p className="text-[#9A9A9D]">Quantidade</p>
            <p className="mr-10 text-[#9A9A9D]">Total</p>
          </header>
          <div className="border-[1px] border-[#B5B5B5] w-[821px] ml-4 mt-2 mb-4"></div>

          {cartProducts &&
            cartProducts.map(product => (
              <ProductCardTwo key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  )
}
