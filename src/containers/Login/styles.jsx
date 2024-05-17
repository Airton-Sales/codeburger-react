import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerItens = styled.div`
  background-color: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #fff;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    text-align: center;
    margin-top: 100px;
  }
`

export const Label = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
  text-align: left;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  padding-left: 5px;
  gap: 0px;
  border-radius: 10px;
  border: ${props => (props.error ? '2px solid red' : 'none')};
`

export const Button = styled.button`
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 182.81px;
  height: 36.13px;
  color: #fff;
  margin-top: 75px;
  margin-bottom: 25px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`

export const SignInLik = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 300;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
  font-weight: normal;
`
