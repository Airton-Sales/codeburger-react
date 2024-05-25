import React, { useEffect, useState } from 'react'

import LogoProducts from '../../assets/logo-products.svg'
import Header from '../../components/Header'
import api from '../../services/api'

function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategories] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [
        {
          id: 0,
          name: 'Todas'
        },
        ...data
      ]

      setCategories(newCategories)
    }

    loadCategories()
  }, [])
  return (
    <>
      <Header />

      <img className="w-[100%]" src={LogoProducts} alt="Logo da home" />
      <div className="flex w-[100%] h-[31px] justify-center gap-16 mt-5">
        {categories &&
          categories.map(category => (
            <button
              className={`${activeCategory === category.id ? 'text-[#9758A6] border-b-2 border-[#9758A6]' : 'text-[#9A9A9D]'} text-[17px] font-bold`}
              key={category.id}
              type="button"
              disabled={activeCategory === category.id}
              onClick={() => setActiveCategories(category.id)}
            >
              {category.name}
            </button>
          ))}
      </div>
    </>
  )
}

export default Products
