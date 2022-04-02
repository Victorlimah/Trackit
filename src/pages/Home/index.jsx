import Logo from "../../components/Logo";
import * as S from "./style";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import HabitsContext from "../../provider/HabitsContext";

export default function Home() {
  const { user, setUser } = useContext(HabitsContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  return (
    <>
      <Logo />
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

        <button type="submit">Entrar</button>
      </S.Form>

      <Link to="/register">
        <S.Link>Não tem uma conta? Cadastre-se!</S.Link>
      </Link>
    </>
  );

  function login(event) {
    event.preventDefault();
    axios
      .post(URL, loginData)
      .then((response) => {
        console.log(response);
        setUser({
          ...user,
          token: response.data.token,
          image: response.data.image,
        });
        navigate("/habits");
      })
      .catch((error) => {
        alert("Erro ao fazer o login. Tente novamente!");
        loginData.email = "";
        loginData.password = "";
      });
  }
}
