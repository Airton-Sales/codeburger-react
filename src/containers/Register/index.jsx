import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/Register.svg'
import Button from '../../components/Button'
import api from '../../services/api'

function Register() {
  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('Email é obrigatório'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .min(6, 'A senha deve conter pelo menos 6 caracteres'),
    confirmPassword: yup
      .string()
      .required('Senha é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('🦄 Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('Email já existe')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Algo deu errado, tente novamente')
    }
  }
  return (
    <>
      <body className="bg-red bg-[url(C:\Users\airton\Desktop\DevClub\codeburger-react\src\assets\background.svg)] bg-no-repeat bg-cover w-screen h-screen flex justify-center items-center ">
        <div className="flex w-0 md:w-[1000px] justify-center items-center">
          <img
            className="w-[684px] rounded-tl-[20px] rounded-bl-[20px] invisible md:visible"
            src={RegisterImg}
            alt=""
          />

          <div className="bg-[#373737] h-[670px] md:h-[650px] md:w-[555px] flex flex-col justify-center items-center rounded-tr-[20px] rounded-br-[20px]">
            <img className="w-[260px] h-[94px]" src={Logo} alt="" />
            <h1 className="text-2xl text-center mt-3 mb-2">Cadastre-se</h1>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <p
                className={`w-[100%] ml-[20px] mb-2 ${errors.name?.message ? 'error mb-0' : 'mb-2'} `}
              >
                Nome
              </p>
              <input
                className={`w-[370px] h-[40px] bg-white rounded ml-5 text-black p-2 ${errors.name?.message ? 'error border-2 border-red-500' : ''}`}
                type="text"
                {...register('name')}
              />
              <p className="w-[100%] ml-[20px] text-red-600 mt-1">
                {errors.name?.message}
              </p>

              <p
                className={`w-[100%] ml-[20px] mb-2 mt-2 ${errors.email?.message ? 'error mb-0' : 'mb-2'} ${errors.email?.message ? 'error mt-0' : 'mt-2'}`}
              >
                Email
              </p>
              <input
                className={`w-[370px] h-[40px] bg-white rounded ml-5 text-black p-2 ${errors.email?.message ? 'error border-2 border-red-500' : ''}`}
                type="email"
                {...register('email')}
              />
              <p className="w-[100%] ml-[20px] text-red-600 mt-1">
                {errors.email?.message}
              </p>
              <p
                className={`w-[100%] ml-[20px] mb-2 mt-2 ${errors.password?.message ? 'error mb-0' : 'mb-2'} ${errors.password?.message ? 'error mt-0' : 'mt-2'}`}
              >
                Senha
              </p>
              <input
                className={`w-[370px] h-[40px] bg-white rounded ml-5 mr-5 text-black p-2 ${errors.password?.message ? 'error border-2 border-red-500' : ''}`}
                type="password"
                {...register('password')}
              />

              <p className="w-[100%] ml-[20px] mt-1 text-red-600">
                {errors.password?.message}
              </p>

              <p
                className={`w-[100%] ml-[20px] mt-2 mb-2 ${errors.confirmPassword?.message ? 'error mb-0' : 'mb-2'} ${errors.confirmPassword?.message ? 'error mt-0' : 'mt-2'}`}
              >
                Confirme sua senha
              </p>

              <input
                className={`w-[370px] h-[40px] bg-white rounded ml-5 mr-5 text-black p-2 ${
                  errors.confirmPassword?.message
                    ? 'error border-2 border-red-500'
                    : ''
                }`}
                type="password"
                {...register('confirmPassword')}
              />
              <p className="w-[100%] ml-[20px] mt-1 text-red-600">
                {errors.confirmPassword?.message}
              </p>
              <Button type="submit" style={{ marginTop: 35 }}>
                Sign In
              </Button>
            </form>
            <p className="w-[100%] ml-[50px] mt-3">
              Já possui conta ?{' '}
              <a
                className="text-decoration: underline text-white font-normal"
                href="#"
              >
                Sign In
              </a>{' '}
            </p>
          </div>
        </div>
      </body>
    </>
  )
}

export default Register
