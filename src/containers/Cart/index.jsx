import React from 'react'

import LogoCarrinho from '../../assets/logo-carrinho.svg'
import { Header, CartItems, CartTwoItems } from '../../components'

export function Cart() {
  return (
    <>
      <div className="bg-[#EFEFEF]">
        <Header />
        <img className="w-[100%]" src={LogoCarrinho} alt="Logo da home" />
        <div className="w-[100%] h-[100%] flex items-center justify-center gap-7 mt-20">
          <CartTwoItems />
          <CartItems />
        </div>
      </div>
    </>
  )
}
