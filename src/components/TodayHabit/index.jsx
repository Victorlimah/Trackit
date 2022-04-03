import * as S from "./style";

export default function TodayHabit({ name, sequence, record }) {
  return (
    <S.Card>
      <S.Infos>
        <h2>{name}</h2>
        <h3>Sequência atual: {sequence} dias</h3>
        <h3>Seu recorde: {record} dias</h3>
      </S.Infos>
      <S.Check></S.Check>
    </S.Card>
  );
}
