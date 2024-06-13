import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
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

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })
    await toast.promise(api.post('/orders', { products: order }), {
      pending: 'Enviando pedido...',
      success: 'Pedido enviado com sucesso',
      error: 'Erro ao enviar pedido'
    })
  }

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
        onClick={submitOrder}
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
