import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Ofertas from '../../assets/oferta.png'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Div } from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
    // { width: 1200, itemsToShow: 5 }
  ]

  return (
    <Div className="flex flex-col items-center justify-center bg-white">
      <img className="w-[273px] h-[65px] m-[25px]" src={Ofertas} alt="" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <div
              className="flex flex-col items-center gap-2 m-2"
              key={product.id}
            >
              <img
                className="rounded-[10px] w-[282.79px] "
                src={product.url}
                alt="foto da categoria"
              />
              <p className="w-[100%] text-left font-bold text-[20px]">
                {product.name}
              </p>
              <p className="w-[100%] text-left font-bold text-[22px]">
                R$ {product.formatedPrice}
              </p>
              <Button
                style={{
                  marginRight: '20px',
                  marginTop: '5px',
                  width: '100%',
                  height: '60px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                Peça agora
              </Button>
            </div>
          ))}
      </Carousel>
    </Div>
  )
}
