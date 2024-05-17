import React from 'react'
import { useForm } from 'react-hook-form'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLik
} from './styles'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} />

          <Label>Senha</Label>
          <Input type="password" {...register('password')} />

          <Button type="submit">Sign in</Button>
        </form>

        <SignInLik>
          Não possui conta? ,<a>Sign Up</a>
        </SignInLik>
      </ContainerItens>
    </Container>
  )
}

export default Login
