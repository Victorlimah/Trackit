import Logo from "../../components/Logo";
import * as S from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  return (
    <>
      <Logo />
      <S.Form>
        <input
          required
          type="text"
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
}
