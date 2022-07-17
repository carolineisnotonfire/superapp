import React from 'react'
import { Navigate } from "react-router-dom"

function Home() {
  return (
    <div className="homeContainer">
                <Navigate to="/Login" replace={true} />
    </div>
  );
}

export default Home