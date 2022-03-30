import * as S from "./style";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <S.Logo>
      <img src={logo} alt="Logo" />
      <h1> TrackIt </h1>
    </S.Logo>
  );
}
