import * as S from "./style";

export default function Header({ image }) {
  return (
    <>
      <S.Header>
        <h1>TrackIt</h1>
        <img src={image} alt="user profile" />
      </S.Header>
    </>
  );
}
