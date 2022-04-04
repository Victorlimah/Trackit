import axios from "axios";
import * as S from "./style";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import HabitsContext from "../../provider/HabitsContext";
import Loading from "../Loading";

export default function Login() {
  const navigate = useNavigate();
  const [inputActive, setInputActive] = useState(true);
  const { user, setUser } = useContext(HabitsContext);
  const [textInput, setTextInput] = useState("Entrar");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  if (localStorage.getItem("user")) {
    let data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
    navigate("/today");
  }

  return (
    <>
      <S.Form onSubmit={login}>
        <input
          required
          type="email"
          placeholder="email"
          disabled={!inputActive}
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />

        <input
          required
          type="password"
          placeholder="senha"
          disabled={!inputActive}
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />

        <button type="submit">{textInput}</button>
      </S.Form>

      <Link to="/singup">
        <S.Link>Não tem uma conta? Cadastre-se!</S.Link>
      </Link>
    </>
  );

  function login(event) {
    event.preventDefault();

    setTextInput(Loading());
    setInputActive(false);
    axios
      .post(URL, loginData)
      .then((response) => {
        setUser({
          ...user,
          token: response.data.token,
          image: response.data.image,
        });
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/today");
      })
      .catch((error) => {
        alert("Erro ao fazer o login. Tente novamente!");
        loginData.email = "";
        loginData.password = "";
        setTextInput("Entrar");
        setInputActive(true);
      });
  }
}
