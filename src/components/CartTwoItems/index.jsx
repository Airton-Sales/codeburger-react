import React from 'react'

import { useCart } from '../../hooks/CartContext'
import { ProductCardTwo } from '../ProductCardTwo'

export function CartTwoItems() {
  const { cartProducts } = useCart()
  console.log(cartProducts)
  return (
    <>
      {cartProducts && cartProducts.length > 0 ? (
        <div className="flex">
          <div className="w-[853px] h-[100%] bg-white mb-20 rounded-[20px]">
            <header className="w-[674px] h-[25px] ml-[9.7rem] mt-2 grid grid-cols-5">
              <p className="text-[#9A9A9D] text-center">Itens</p>
              <p className="text-[#9A9A9D] text-center">Preço</p>
              <p className="text-[#9A9A9D] text-center pl-4">Quantidade</p>
              <p className="text-[#9A9A9D] text-center pl-9">Total</p>
              <p className="text-[#9A9A9D] text-center">Lixeira</p>
            </header>
            <div className="border-[1px] border-[#B5B5B5] w-[821px] ml-4 mt-2 mb-4"></div>

            {cartProducts.map(product => (
              <ProductCardTwo key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-[853px] h-[100%] bg-white mb-20 rounded-[20px]">
          <header className="w-[674px] h-[25px] ml-[9.7rem] mt-2 grid grid-cols-5 justify-between">
            <p className="text-[#9A9A9D]">Itens</p>
            <p className="text-[#9A9A9D]">Preço</p>
            <p className="text-[#9A9A9D]">Quantidade</p>
            <p className="text-[#9A9A9D]">Total</p>
            <p className="text-[#9A9A9D]">Lixeira</p>
          </header>
          <div className="border-[1px] border-[#B5B5B5] w-[821px] ml-4 mt-2 mb-4"></div>
          <p className="p-10 text-center font-bold">Carrinho vazio</p>
        </div>
      )}
    </>
  )
}
