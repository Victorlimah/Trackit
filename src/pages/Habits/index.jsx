import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Trash from "../../assets/trash.svg";
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

  const [text, setText] = useState("");
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

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  console.log(getSelected());
  const headersConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(URL, headersConfig)
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
            <input
              required
              type="text"
              value={text}
              placeholder="Nome do hábito: "
              onChange={(e) => setText(e.target.value)}
            />
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
                  <S.Day onClick={() => selectDay(day)} type="button" key={day}>
                    {day.day}
                  </S.Day>
                );
              })}
            </S.ButtonDays>

            <S.ActionsButton>
              <S.ButtonCancel onClick={() => cancelCreateHabit()}>
                Cancelar
              </S.ButtonCancel>

              <S.ButtonSave onClick={() => saveHabit()}>Salvar</S.ButtonSave>
            </S.ActionsButton>
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
    return (
      <>
        {habits.map((habit) => {
          let newDays = getDaysHabits(habit.days);
          return (
            <S.Habit>
              <S.TitleHabit>
                <h3>{habit.name}</h3>
                <img src={Trash} alt="trash" />
              </S.TitleHabit>
              <S.HabitDay>
                {newDays.map((day) => {
                  if (day.selected) {
                    return <S.DaySelect key={day}>{day.day}</S.DaySelect>;
                  }
                  return <S.Day key={day}>{day.day}</S.Day>;
                })}
              </S.HabitDay>
            </S.Habit>
          );
        })}
      </>
    );
  }

  function selectDay(day) {
    setDays([...days], (day.selected = !day.selected));
    console.log("selectDay " + day.id);
  }

  function saveHabit() {
    axios
      .post(
        URL,
        {
          name: text,
          days: getSelected(),
        },
        headersConfig
      )
      .then((response) => {
        refreshHabits();
        cancelCreateHabit();
      })
      .catch((error) => console.log(error));
  }

  function cancelCreateHabit() {
    setCreatingHabit(false);
    clearCreateHabit();
  }

  function clearCreateHabit() {
    setText("");
    setDays([
      { day: "S", id: 1, selected: false },
      { day: "T", id: 2, selected: false },
      { day: "Q", id: 3, selected: false },
      { day: "Q", id: 4, selected: false },
      { day: "S", id: 5, selected: false },
      { day: "S", id: 6, selected: false },
      { day: "D", id: 7, selected: false },
    ]);
  }

  function getSelected() {
    let selected = days.filter((day) => day.selected);
    return selected.map((day) => day.id);
  }

  function refreshHabits() {
    axios
      .get(URL, headersConfig)
      .then((response) => {
        setHabits(response.data);
      })
      .catch((error) => console.log(error));
  }

  function getDaysHabits(arr) {
    let arrDays = [
      { day: "S", id: 1, selected: false },
      { day: "T", id: 2, selected: false },
      { day: "Q", id: 3, selected: false },
      { day: "Q", id: 4, selected: false },
      { day: "S", id: 5, selected: false },
      { day: "S", id: 6, selected: false },
      { day: "D", id: 7, selected: false },
    ];

    arr.forEach((day) => {
      arrDays.forEach((d) => {
        if (day === d.id) {
          d.selected = true;
        }
      });
    });

    return arrDays;
  }
}
