import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles';

import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage/index';
import MainPage from './pages/MainPage/index';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header>         
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<p>{!data ? "Loading..." : data}</p> }/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/main' element={<MainPage />}/>
          </Routes>      
        </BrowserRouter>
      </header>
      <GlobalStyles />
    </div>
  );
}

export default App;
