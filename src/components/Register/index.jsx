import axios from "axios";
import * as S from "./style";
import { useState } from "react";
import Loading from "../Loading";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [inputActive, setInputActive] = useState(true);
  const [textInput, setTextInput] = useState("Cadastrar");
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  const navigate = useNavigate();

  return (
    <>
      <S.Form onSubmit={register}>
        <input
          required
          type="email"
          placeholder="email"
          disabled={!inputActive}
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="senha"
          disabled={!inputActive}
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <input
          required
          type="text"
          placeholder="nome"
          disabled={!inputActive}
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="imagem"
          disabled={!inputActive}
          value={userData.image}
          onChange={(e) => setUserData({ ...userData, image: e.target.value })}
        />
        <button type="submit">{textInput}</button>
      </S.Form>
      <Link to="/">
        <S.Link>Já tem uma conta? Faça login!</S.Link>
      </Link>
    </>
  );
  function register(event) {
    setTextInput(Loading());
    event.preventDefault();
    setInputActive(false);

    axios
      .post(URL, userData)
      .then((response) => {
        navigate("/");
        clearInputs();
      })
      .catch((error) => {
        alert("Ocorreu um erro ao realizar o cadastro. Tente novamente!");
        setTextInput("Cadastrar");
        clearInputs();
        setInputActive(true);
      });
  }

  function clearInputs() {
    userData.email = "";
    userData.password = "";
    userData.name = "";
    userData.image = "";
  }
}
