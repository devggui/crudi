import React from 'react';

import { Container, Form } from './styles'

const LoginForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Login</h1>
        Username
        <input type="text" placeholder="username" />
        Password
        <input type="password" placeholder="password" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}

export default LoginForm;