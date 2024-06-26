import propTypes from 'prop-types'
import React from 'react'

import Avatar from '../../assets/avatar.svg'
import ShoppingCart from '../../assets/shopping-cart.svg'

export function Header() {
  return (
    <>
      <div className="w-[100%] h-full flex flex-col items-center bg-[#EFEFEF]">
        <header className="w-[100%] h-[72px]  flex justify-between">
          <div className="flex items-center ml-[240px] gap-7">
            <p className="text-[#9758A6] font-bold">Home</p>
            <p className="text-[#555555]">Ver produtos</p>
          </div>

          <div className="flex mr-20 items-center">
            <div className="flex">
              <img
                className="w-[25.3px] h-[24px]"
                src={ShoppingCart}
                alt="shopping cart"
              />
              <p className="rotate-90 ml-4 text-[#BABABA]">______</p>

              <img
                className="w-[25.3px] h-[24px] mr-5"
                src={Avatar}
                alt="avatar"
              />
            </div>
            <div>
              <p>Olá, Airton</p>
              <p>Sair</p>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

Header.propTypes = {
  children: propTypes.node
}
