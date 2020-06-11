import React from 'react';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

const SignIn: React.FC = () => (
  <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="forgot">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
  </Container>
);

export default SignIn;
