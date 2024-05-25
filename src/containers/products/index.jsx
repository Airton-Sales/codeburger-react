import React, { useEffect, useState } from 'react'

import LogoProducts from '../../assets/logo-products.svg'
import CardProduct from '../../components/CardProduct'
import Header from '../../components/Header'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
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
  return (
    <>
      <Header />

      <img className="w-[100%]" src={LogoProducts} alt="Logo da home" />
      <div className="flex w-[100%] h-[31px] justify-center gap-16 mt-5 mb-14">
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
      <div className="w-[100%] flex flex-wrap gap-5 justify-center items-center">
        {products &&
          products.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}

export default Products
