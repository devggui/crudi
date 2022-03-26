import React, { useEffect, useState } from 'react';

import LoginForm from '../../components/LoginForm/index';
import { Container } from './styles'

const LoginPage: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/login")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Container> 
      <p>{data}</p>     
      <LoginForm />
    </Container>    
  );
}

export default LoginPage;