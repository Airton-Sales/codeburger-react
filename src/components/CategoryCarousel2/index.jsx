import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Ofertas from '../../assets/oferta.png'
import Button from '../../components/Button'
import api from '../../services/api'

function CategoryCarousel2() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('products')
      console.log(data)
      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
    // { width: 1200, itemsToShow: 5 }
  ]

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <img className="w-[273px] h-[65px] m-[25px]" src={Ofertas} alt="" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <div
              className="flex flex-col items-center gap-2 m-2"
              key={category.id}
            >
              <img
                className="rounded-[10px]"
                src={category.url}
                alt="foto da categoria"
              />
              <p className="w-[100%] text-left font-bold text-[22px]">
                {category.name}
              </p>
              <p className="w-[100%] text-left font-bold text-[22px]">
                R$ {category.price}
              </p>
              <Button
                style={{
                  marginRight: '20px',
                  marginTop: '5px',
                  width: '100%',
                  height: '60px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                Peça agora
              </Button>
            </div>
          ))}
      </Carousel>
    </div>
  )
}

export default CategoryCarousel2
