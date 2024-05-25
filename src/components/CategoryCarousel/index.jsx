import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Categoria from '../../assets/CATEGORIAS.svg'
import api from '../../services/api'
import Button from '../Button'
import { Div } from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

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
    <Div className="flex flex-col justify-center items-center bg-[#EFEFEF]">
      <img className="w-[412px] m-10" src={Categoria} alt="" />
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
                className="rounded-[10px] w-[283.4px]"
                src={category.url}
                alt="foto da categoria"
              />
              <Button
                style={{
                  marginRight: '20px',
                  marginTop: '5px',
                  width: '100%',
                  height: '66px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '24px'
                }}
              >
                {category.name}
              </Button>
            </div>
          ))}
      </Carousel>
    </Div>
  )
}

export default CategoryCarousel
