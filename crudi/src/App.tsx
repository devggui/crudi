import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/index'

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
          </Routes>      
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
