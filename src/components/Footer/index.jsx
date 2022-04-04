import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer({ progress }) {
  const navigate = useNavigate();
  return (
    <>
      <S.Footer>
        <h3 onClick={() => habits()}>Hábitos</h3>
        <S.Today onClick={() => today()}>
          <S.Option>Hoje</S.Option>
          <CircularProgressbar value={progress} />
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
