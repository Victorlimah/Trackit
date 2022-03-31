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
    { day: "S", name: "Segunda", selected: false },
    { day: "T", name: "Terça", selected: false },
    { day: "Q", name: "Quarta", selected: false },
    { day: "Q", name: "Quinta", selected: false },
    { day: "S", name: "Sexta", selected: false },
    { day: "S", name: "Sábado", selected: false },
    { day: "D", name: "Domingo", selected: false },
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
      <HabitsContext.Provider value={{ creatingHabit, setCreatingHabit }}>
        <S.Container>
          <Header image={image} />
          <HeaderHabits />
          {addHabit()}
        </S.Container>
      </HabitsContext.Provider>
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
                <S.ButtonCancel>Cancelar</S.ButtonCancel>
                <S.ButtonSave>Salvar</S.ButtonSave>
              </S.ActionsButton>
            </form>
          </S.CreateHabit>
        </>
      );
    }
    return <></>;
  }

  function selectDay(day) {
    setDays([...days], (day.selected = !day.selected));
    console.log("selectDay " + day.name);
  }
}
