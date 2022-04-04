import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/arrow-down.png";

export default function Header({ image }) {
  const navigate = useNavigate();
  return (
    <>
      <S.Header>
        <h1>TrackIt</h1>
        <div>
          <img src={image} alt="user profile" />
          <S.Arrow
            onClick={() => logout()}
            src={Arrow}
            alt="user options"
          ></S.Arrow>
        </div>
      </S.Header>
    </>
  );

  function logout() {
    if (window.confirm("Deseja realmente sair?")) {
      localStorage.removeItem("user");
      navigate("/");
    }
  }
}
