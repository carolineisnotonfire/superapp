import Axios from 'axios';
import React, { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Authentication() {
  const [searchParams] = useSearchParams();
  const cookie = new Cookies();

  useEffect(() => {
    Axios.post("http://localhost:3000/auth", { 
      token: searchParams.get("")
    }).then((response) => {
      cookie.set("sessionToken", response.data)
    });   
  });
  return <Navigate to="/usuarios" replace />;

}

export default Authentication;