import React from 'react';

import { Container, Form } from './styles';

const RegisterPage: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Register</h1>
        <strong>Username</strong>
        <input type="text" placeholder="username" />
        <strong>E-mail</strong>
        <input type="email" placeholder="e-mail" />
        <strong>Password</strong>
        <input type="password" placeholder="password" />
        <strong>Repeat Password</strong>
        <input type="password" placeholder="repeat password" />
        <button type="submit">Criar conta</button>
      </Form>
    </Container>
  );
}

export default RegisterPage;