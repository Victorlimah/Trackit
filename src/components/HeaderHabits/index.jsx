import * as S from "./style";
import { useContext } from "react";
import HabitsContext from "../../provider/HabitsContext";

export default function HeaderHabits() {
  const { creatingHabit, setCreatingHabit } = useContext(HabitsContext);

  return (
    <S.StyledHeaderHabits>
      <h2>Meus hábitos</h2>
      <span onClick={() => addHabit()}>+</span>
    </S.StyledHeaderHabits>
  );

  function addHabit() {
    setCreatingHabit(!creatingHabit);
  }
}
