import React, { useState, useEffect } from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'

export function CartItems() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => {
      return acc + product.price * product.quantity
    }, 0)
    setFinalPrice(total)
  }, [cartProducts, deliveryTax])
  return (
    <div className="w-[317px] h-[373px] flex flex-col rounded-[20px]">
      <div className="w-[317px] h-[301px] flex justify-center items-center bg-white rounded-[20px]">
        <div className="w-[263px] h-[253px] flex flex-col justify-between">
          <div>
            <p className="font-medium text-[14px]">Resumo do pedido</p>
            <p className="font-light text-[14px] flex justify-between mt-3">
              Itens <span className="mr-3">{formatCurrency(finalPrice)}</span>
            </p>
            <p className="font-light text-[14px] flex justify-between mt-3">
              Taxa de entrega{' '}
              <span className="mr-3">{formatCurrency(deliveryTax)}</span>
            </p>
          </div>
          <p className="font-normal text-[24px] flex justify-between">
            Total <span>{formatCurrency(finalPrice + deliveryTax)}</span>
          </p>
        </div>
      </div>
      <Button
        style={{
          margin: 0,
          marginTop: '24px',
          width: '314px',
          height: '48px'
        }}
      >
        Finalizar pedido
      </Button>
    </div>
  )
}
