import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <S.Footer>
        <h3 onClick={() => habits()}>Hábitos</h3>
        <S.Today>
          <h3 onClick={() => today()}>Hoje</h3>
        </S.Today>
        <h3 onClick={() => history()}>Histórico</h3>
      </S.Footer>
    </>
  );

  function habits() {
    navigate("/habits");
  }

  function today() {
    navigate("/today");
  }

  function history() {
    navigate("/history");
  }
}
