import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import Header from '../../components/Header'
import OffersCarousel from '../../components/OffersCarousel'

function Home() {
  return (
    <>
      <Header />
      <img className="w-[100%]" src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </>
  )
}

export default Home
