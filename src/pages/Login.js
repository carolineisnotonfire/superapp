import React, { useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import logo from "./logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const login = () => {
    Axios.post("http://localhost:3002/login", { email }).then(() => {
      console.log("ok");
    });
  };

  return (
    <div className="formContainer">
      <div className="formOutline">
        <div className="linkTitleClass">
          <p>Receba o link de acesso em seu e-mail</p>
        </div>
        <div className="emailInputClass">
          <TextField
            id="standard-basic"
            label="E-mail para acesso"
            variant="standard"
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={login}
            className="divButtonEnviar"
            sx={{ backgroundColor: "#3f2a56" }}
          >
            Enviar
          </Button>
        </div>
        <div className="logoWk">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Login;
