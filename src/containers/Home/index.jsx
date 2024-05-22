import React, { useEffect } from 'react'

import ArrowOff from '../../assets/arrow-off.svg'
import Arrow from '../../assets/arrow.svg'
import ArrowL from '../../assets/arrowL.svg'
import Avatar from '../../assets/avatar.svg'
import Bebida from '../../assets/bebida.svg'
import Categoria from '../../assets/CATEGORIAS.svg'
import Entradas from '../../assets/entradas.svg'
import Hamburgue from '../../assets/hamburguer.svg'
import HomeLogo from '../../assets/home-logo.svg'
import Oferta from '../../assets/oferta.png'
import ShoppingCart from '../../assets/shopping-cart.svg'
import Sobremesa from '../../assets/sobremesa.svg'
import Button from '../../components/Button'
import Card from '../../components/card'
import api from '../../services/api'

function Home() {
  useEffect(() => {
    async function loadCategories() {
      const res = await api.get('categories')

      console.log(res)
    }
    loadCategories()
  }, [])
  return (
    <>
      <div className="w-[100%] h-full flex flex-col items-center bg-[#EFEFEF]">
        <header className="w-[100%] h-[72px]  flex justify-between">
          <div className="flex items-center ml-[240px] gap-7">
            <p className="text-[#9758A6] font-bold">Home</p>
            <p className="text-[#555555]">Ver produtos</p>
          </div>

          <div className="flex mr-20 items-center">
            <div className="flex">
              <img
                className="w-[25.3px] h-[24px]"
                src={ShoppingCart}
                alt="shopping cart"
              />
              <p className="rotate-90 ml-4 text-[#BABABA]">______</p>

              <img
                className="w-[25.3px] h-[24px] mr-5"
                src={Avatar}
                alt="avatar"
              />
            </div>
            <div>
              <p>Olá, Airton</p>
              <p>Sair</p>
            </div>
          </div>
        </header>
        <img className="w-[100%]" src={HomeLogo} alt="Logo da home" />
        <img className="w-[412px] m-10" src={Categoria} alt="" />

        <section className="flex w-[1181px] h-[365px] gap-2 mb-12 justify-center">
          <img
            className="w-[40px] h-[40px] mt-56"
            src={ArrowOff}
            alt="arrow-off"
          />
          <Card src={Hamburgue}>
            <Button
              style={{
                width: '283.4px',
                height: '66px',
                marginLeft: 0,
                marginRight: 0,
                borderRadius: '10px'
              }}
            >
              Hamburgueres
            </Button>
          </Card>

          <Card src={Bebida}>
            <Button
              style={{
                width: '283.4px',
                height: '66px',
                marginLeft: 0,
                marginRight: 0,
                borderRadius: '10px'
              }}
            >
              Bebidas
            </Button>
          </Card>

          <Card src={Sobremesa}>
            <Button
              style={{
                width: '283.4px',
                height: '66px',
                marginLeft: 0,
                marginRight: 0,
                borderRadius: '10px'
              }}
            >
              Sobremesas
            </Button>
          </Card>

          <Card src={Entradas}>
            <Button
              style={{
                width: '283.4px',
                height: '66px',
                marginLeft: 0,
                marginRight: 0,
                borderRadius: '10px'
              }}
            >
              Entradas
            </Button>
          </Card>

          <img className="w-[40px] h-[40px] mt-56" src={Arrow} alt="arrow" />
        </section>

        <section className="flex flex-col items-center w-[100%] h-[679px] bg-[#FFFFFF]">
          <img className="w-[273px] h-[65px] m-12" src={Oferta} alt="" />

          <div className="flex gap-2">
            <img className="w-[40px] h-[40px] mt-56" src={ArrowL} alt="arrow" />

            <Card src={Hamburgue}>
              <p>X-Tudo Especial da Casa</p>
              <p className="mt-2">R$ 35,90</p>
              <Button
                style={{
                  width: '283.4px',
                  height: '66px',
                  marginLeft: 0,
                  marginRight: 0,
                  borderRadius: '10px',
                  marginTop: '15px'
                }}
              >
                Peça agora
              </Button>
            </Card>

            <Card src={Entradas}>
              <p>Panquecas</p>
              <p className="mt-2">R$ 15,90</p>
              <Button
                style={{
                  width: '283.4px',
                  height: '66px',
                  marginLeft: 0,
                  marginRight: 0,
                  borderRadius: '10px',
                  marginTop: '15px'
                }}
              >
                Peça agora
              </Button>
            </Card>

            <Card src={Sobremesa}>
              <p>Waffles</p>
              <p className="mt-2">R$ 15,90</p>
              <Button
                style={{
                  width: '283.4px',
                  height: '66px',
                  marginLeft: 0,
                  marginRight: 0,
                  borderRadius: '10px',
                  marginTop: '15px'
                }}
              >
                Peça agora
              </Button>
            </Card>

            <Card src={Entradas}>
              <p>Misto quente</p>
              <p className="mt-2">R$ 15,90</p>
              <Button
                style={{
                  width: '283.4px',
                  height: '66px',
                  marginLeft: 0,
                  marginRight: 0,
                  borderRadius: '10px',
                  marginTop: '15px'
                }}
              >
                Peça agora
              </Button>
            </Card>
            <img className="w-[40px] h-[40px] mt-56" src={Arrow} alt="arrow" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
