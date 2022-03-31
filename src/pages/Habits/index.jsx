import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "./style";
import HeaderHabits from "../../components/HeaderHabits";
import { HabitsContext } from "../../provider/HabitsContext";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [creatingHabit, setCreatingHabit] = useState(false);
  const location = useLocation();
  const { image, token } = location.state.response;
  // se eu quiser pegar o token aqui pelo location state também consigo
  // const { email, id, image, name, token } = location.state.response;

  const [days, setDays] = useState([
    { day: "S", id: 1, selected: false },
    { day: "T", id: 2, selected: false },
    { day: "Q", id: 3, selected: false },
    { day: "Q", id: 4, selected: false },
    { day: "S", id: 5, selected: false },
    { day: "S", id: 6, selected: false },
    { day: "D", id: 7, selected: false },
  ]);

  console.log(days);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    axios
      .get(URL, config)
      .then((response) => {
        setHabits(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <S.Container>
        <HabitsContext.Provider value={{ creatingHabit, setCreatingHabit }}>
          <Header image={image} />

          <HeaderHabits />
          {addHabit()}
          {showHabits()}
        </HabitsContext.Provider>
      </S.Container>
    </>
  );

  function addHabit() {
    if (creatingHabit) {
      return (
        <>
          <S.CreateHabit>
            <form>
              <input type="text" placeholder="Nome do hábito: " />
              <S.ButtonDays>
                {days.map((day) => {
                  if (day.selected) {
                    return (
                      <S.DaySelect
                        onClick={() => selectDay(day)}
                        type="button"
                        key={day}
                      >
                        {day.day}
                      </S.DaySelect>
                    );
                  }
                  return (
                    <S.Day
                      onClick={() => selectDay(day)}
                      type="button"
                      key={day}
                    >
                      {day.day}
                    </S.Day>
                  );
                })}
              </S.ButtonDays>

              <S.ActionsButton>
                <S.ButtonCancel onClick={() => cancelCreateHabit()}>
                  Cancelar
                </S.ButtonCancel>

                <S.ButtonSave>Salvar</S.ButtonSave>
              </S.ActionsButton>
            </form>
          </S.CreateHabit>
        </>
      );
    }
    return <></>;
  }

  function showHabits() {
    if (habits.length === 0) {
      return (
        <S.Empty>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </S.Empty>
      );
    }
  }

  function selectDay(day) {
    setDays([...days], (day.selected = !day.selected));
    console.log("selectDay " + day.name);
  }

  function cancelCreateHabit() {
    setCreatingHabit(false);
  }
}
