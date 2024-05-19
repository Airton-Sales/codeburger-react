import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import api from '../../services/api'

function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('Email é obrigatório'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .min(6, 'A senha deve conter pelo menos 6 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const res = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })
    console.log(res)
  }
  return (
    <>
      <body className="bg-red bg-[url(C:\Users\airton\Desktop\DevClub\codeburger-react\src\assets\background.svg)] bg-no-repeat bg-cover w-screen h-screen flex justify-center items-center ">
        <div className="flex w-0 md:w-[1000px] justify-center items-center">
          <img
            className="w-[555px] h-[650px] invisible md:visible"
            src={LoginImg}
            alt=""
          />

          <div className="bg-[#373737] h-[670px] md:h-[650px] md:w-[555px] flex flex-col justify-center items-center">
            <img className="w-[260px] h-[94px]" src={Logo} alt="" />
            <h1 className="text-2xl text-center mt-24 mb-5">Login</h1>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <p className="w-[100%] ml-[20px] mb-2">Email</p>
              <input
                className={`w-[370px] h-[40px] bg-white rounded ml-5 text-black p-2 ${errors.email?.message ? 'error border-2 border-red-500' : ''}`}
                type="email"
                {...register('email')}
              />
              <p className="w-[100%] ml-[20px] text-red-600 mt-1">
                {errors.email?.message}
              </p>
              <p className="w-[100%] ml-[20px] mt-2 mb-2">password</p>
              <input
                className={`w-[370px] h-[40px] bg-white rounded ml-5 mr-5 text-black p-2 ${errors.password?.message ? 'error border-2 border-red-500' : ''}`}
                type="password"
                {...register('password')}
              />
              <p className="w-[100%] ml-[20px] mt-1 text-red-600">
                {errors.password?.message}
              </p>
              <Button type="submit" style={{ marginTop: 75 }}>
                Sign In
              </Button>
            </form>
            <p className="w-[100%] ml-[50px] md:ml-[99px] mt-5">
              Não possui conta ?{' '}
              <a
                className="text-decoration: underline text-white font-normal"
                href="#"
              >
                Sign Up
              </a>{' '}
            </p>
          </div>
        </div>
      </body>
    </>
  )
}

export default Login
