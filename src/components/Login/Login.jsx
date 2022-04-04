import axios from "axios";
import * as S from "./style";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import HabitsContext from "../../provider/HabitsContext";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(HabitsContext);
  const [textInput, setTextInput] = useState("Entrar");
  const loadingInput = <ThreeDots width={50} height={50} color="white" />;
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  return (
    <>
      <S.Form onSubmit={login}>
        <input
          required
          type="email"
          placeholder="email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />

        <input
          required
          type="password"
          placeholder="senha"
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
    setTextInput(loadingInput);
    event.preventDefault();
    axios
      .post(URL, loginData)
      .then((response) => {
        setUser({
          ...user,
          token: response.data.token,
          image: response.data.image,
        });
        navigate("/today");
      })
      .catch((error) => {
        alert("Erro ao fazer o login. Tente novamente!");
        loginData.email = "";
        loginData.password = "";
      });
  }
}
