import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles'

const LoginForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <strong>Username</strong>
        <input type="text" placeholder="username" />
        <strong>Password</strong>
        <input type="password" placeholder="password" />
        <button type="submit">Entrar</button>
        <Link to='/register'>
          <span>É novo aqui? Se cadastra ai!</span>
        </Link>
      </Form>
    </Container>
  );
}

export default LoginForm;