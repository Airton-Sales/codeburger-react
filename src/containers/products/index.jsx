import React, { useEffect, useState } from 'react'

import LogoProducts from '../../assets/logo-products.svg'
import { Header, CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

export function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
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

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <>
      <Header />

      <div className="bg-[#EFEFEF]">
        <img className="w-[100%]" src={LogoProducts} alt="Logo da home" />
        <div className="flex w-[100%] justify-center gap-16 mt-5 mb-14">
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
        <div className="w-[100%] flex flex-wrap gap-5 items-center justify-center min-h-[100vh]">
          {filteredProducts &&
            filteredProducts.map(product => (
              <CardProduct key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  )
}
