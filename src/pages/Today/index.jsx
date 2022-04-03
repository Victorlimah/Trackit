import Header from "../../components/Header";
import TodayHabit from "../../components/TodayHabit";
import HabitsContext from "../../provider/HabitsContext";
import { useContext } from "react";
import * as S from "./style";

export default function Today() {
  const { user } = useContext(HabitsContext);
  console.log(user);
  return (
    <S.Container>
      <Header image={user.image} />
      <S.MarginTop> </S.MarginTop>
      <TodayHabit />
    </S.Container>
  );
}
