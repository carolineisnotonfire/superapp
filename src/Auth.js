import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import Login from './pages/Login';

function Auth() {
  return (
    <div className="Auth">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/auth' element={<Authentication />}/>
          <Route path='/usuarios' element={<App />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Auth