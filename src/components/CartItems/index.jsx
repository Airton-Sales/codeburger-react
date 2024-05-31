import React from 'react'

import { Button } from '../Button'

export function CartItems() {
  return (
    <div className="w-[317px] h-[373px] flex flex-col rounded-[20px]">
      <div className="w-[317px] h-[301px] flex justify-center items-center bg-white rounded-[20px]">
        <div className="w-[263px] h-[253px] flex flex-col justify-between">
          <div>
            <p className="font-medium text-[14px]">Resumo do pedido</p>
            <p className="font-light text-[14px] flex justify-between mt-3">
              Itens <span className="mr-3">R$ 30,00</span>
            </p>
            <p className="font-light text-[14px] flex justify-between mt-3">
              Taxa de entrega <span className="mr-3">R$ 5,00</span>
            </p>
          </div>
          <p className="font-normal text-[24px] flex justify-between">
            Total <span>R$ 98,70</span>
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
