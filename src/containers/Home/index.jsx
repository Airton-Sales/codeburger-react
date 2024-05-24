import React from 'react'

import CategoryCarousel from '../../components/CategoryCarousel'
import Header from '../../components/Header'
import OffersCarousel from '../../components/OffersCarousel'

function Home() {
  return (
    <>
      <Header />
      <CategoryCarousel />
      <OffersCarousel />
    </>
  )
}

export default Home
