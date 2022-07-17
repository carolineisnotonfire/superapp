import { useState, useEffect } from "react";
import "./App.css";
import logo from "./pages/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [newNome, setNewNome] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [usuarios, setUsuarios] = useState([]);
  const colecaoUsuarios = collection(db, "usuarios");

  const createUsuario = async () => {
    await addDoc(colecaoUsuarios, { nome: newNome, email: newEmail });
  };

  const updateUsuario = async (id, nome, email) => {
    const userDoc = doc(db, "usuarios", id);
    await updateDoc(userDoc, { nome: newNome, email: newEmail });
  };

  const deleteUsuario = async (id) => {
    const usuarioDoc = doc(db, "usuarios", id);
    await deleteDoc(usuarioDoc);
  };

  useEffect(() => {
    const getUsuarios = async () => {
      const data = await getDocs(colecaoUsuarios);
      setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsuarios();

    // eslint-disable-next-line
  }, [usuarios]);

  return (
    <div className="App">
      <div className="cadastrarUsuario">
        <div className="textFieldClass">
          <TextField
            id="filled-basic"
            label="Nome completo"
            variant="filled"
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(event) => {
              setNewNome(event.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="E-mail"
            variant="filled"
            sx={{ backgroundColor: "#FFFFFF", hoverColor: "#3f2a56" }}
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
          />
        </div>
        <Button
          variant="contained"
          onClick={createUsuario}
          className="divButtonCriar"
          sx={{ backgroundColor: "#3f2a56" }}
        >
          Criar usuário
        </Button>
        <div className="logoWkApp">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      {usuarios.map((usuario) => {
        return (
          <div>
            <div className="dadosSalvos">
              {" "}
              <h3>Nome: {usuario.nome}</h3> <h3> Email: {usuario.email}</h3>
            </div>
            <TextField
              id="filled-basic"
              label="Atualizar nome"
              variant="filled"
              sx={{ backgroundColor: "#FFFFFF", hoverColor: "#3f2a56" }}
              onChange={(event) => {
                setNewNome(event.target.value);
              }}
            />
            <TextField
              type="email"
              id="filled-basic"
              label="Atualizar e-mail"
              variant="filled"
              sx={{ backgroundColor: "#FFFFFF", hoverColor: "#3f2a56" }}
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                updateUsuario(usuario.id, usuario.nome, usuario.email);
              }}
              className="divButtonAtualizar"
              sx={{ backgroundColor: "#3f2a56" }}
            >
              Atualizar usuário
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                deleteUsuario(usuario.id);
              }}
              className="divButtonExcluir"
              sx={{ backgroundColor: "#3f2a56" }}
            >
              Excluir usuário
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
