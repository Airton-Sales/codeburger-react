import propTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity += 1
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await localStorage.setItem(
      'codeburger:cartInfo',
      JSON.stringify(newCartProducts)
    )
  }

  const deleteProducts = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)

    setCartProducts(newCart)

    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
  }

  const increaseProducts = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(
      product => product.id === productId
    )

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        increaseProducts,
        decreaseProducts,
        deleteProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useUser must be used within an UserProvider')
  }

  return context
}

CartProvider.propTypes = {
  children: propTypes.node
}
