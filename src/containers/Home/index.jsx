import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { Header, CategoryCarousel, OffersCarousel } from '../../components'

export function Home() {
  return (
    <>
      <Header />
      <img className="w-[100%]" src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </>
  )
}
