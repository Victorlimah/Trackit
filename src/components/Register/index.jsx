import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "axios";

export default function Register() {
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
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="senha"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <input
          required
          type="text"
          placeholder="nome"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="imagem"
          value={userData.image}
          onChange={(e) => setUserData({ ...userData, image: e.target.value })}
        />
        <button type="submit">Cadastrar</button>
      </S.Form>
      <Link to="/">
        <S.Link>Já tem uma conta? Faça login!</S.Link>
      </Link>
    </>
  );
  function register(event) {
    event.preventDefault();

    axios
      .post(URL, userData)
      .then((response) => {
        navigate("/");
        clearInputs();
      })
      .catch((error) => {
        alert("Ocorreu um erro ao realizar o cadastro. Tente novamente!");
        console.log(error);
        clearInputs();
      });
  }

  function clearInputs() {
    userData.email = "";
    userData.password = "";
    userData.name = "";
    userData.image = "";
  }
}
