import axios from "axios";
import * as S from "./style";
import Trash from "../../assets/trash.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect, useContext } from "react";
import HeaderHabits from "../../components/HeaderHabits";
import HabitsContext from "../../provider/HabitsContext";

export default function Habits() {
  const [text, setText] = useState("");
  const [habits, setHabits] = useState([]);
  const { user, progress } = useContext(HabitsContext);
  const [refreshHabits, setRefreshHabits] = useState(false);
  const [creatingHabit, setCreatingHabit] = useState(false);

  const [days, setDays] = useState([
    { day: "D", id: 0, selected: false },
    { day: "S", id: 1, selected: false },
    { day: "T", id: 2, selected: false },
    { day: "Q", id: 3, selected: false },
    { day: "Q", id: 4, selected: false },
    { day: "S", id: 5, selected: false },
    { day: "S", id: 6, selected: false },
  ]);

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  const headersConfig = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(URL, headersConfig)
      .then((response) => setHabits(response.data))
      .catch((error) => alert("Erro ao carregar os hábitos"));
  }, [refreshHabits]);

  return (
    <>
      <S.Container>
        <HabitsContext.Provider value={{ creatingHabit, setCreatingHabit }}>
          <Header image={user.image} />
          <S.MarginTop> </S.MarginTop>
          <HeaderHabits />
          {addHabit()}
          {showHabits()}
          {showMargin()}
          <Footer progress={progress} />
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
                      key={`${day.id}selected`}
                    >
                      {day.day}
                    </S.DaySelect>
                  );
                }
                return (
                  <S.Day
                    onClick={() => selectDay(day)}
                    type="button"
                    key={`${day.id}unselected`}
                  >
                    {day.day}
                  </S.Day>
                );
              })}
            </S.ButtonDays>

            <S.ActionsButton>
              <S.ButtonCancel onClick={() => setCreatingHabit(false)}>
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
        {habits.map(({ id, name, days }) => {
          let newDays = getDaysHabits(days);
          return (
            <S.Habit>
              <S.TitleHabit>
                <h3>{name}</h3>
                <img src={Trash} alt="trash" onClick={() => deleteHabit(id)} />
              </S.TitleHabit>
              <S.HabitDay>
                {newDays.map((day) => {
                  if (day.selected) {
                    return (
                      <S.DaySelect key={`${day.id}hselect`}>
                        {day.day}
                      </S.DaySelect>
                    );
                  } else {
                    return <S.Day key={`${day.id}hunselect`}>{day.day}</S.Day>;
                  }
                })}
              </S.HabitDay>
            </S.Habit>
          );
        })}
      </>
    );
  }

  function showMargin() {
    return <S.MarginTop> </S.MarginTop>;
  }

  function selectDay(day) {
    setDays([...days], (day.selected = !day.selected));
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
        setRefreshHabits(!refreshHabits);
        clearCreateHabit();
        setCreatingHabit(false);
      })
      .catch((error) => alert("Erro ao salvar o hábito"));
  }

  function clearCreateHabit() {
    setText("");
    setDays([
      { day: "D", id: 0, selected: false },
      { day: "S", id: 1, selected: false },
      { day: "T", id: 2, selected: false },
      { day: "Q", id: 3, selected: false },
      { day: "Q", id: 4, selected: false },
      { day: "S", id: 5, selected: false },
      { day: "S", id: 6, selected: false },
    ]);
  }

  function getSelected() {
    let selected = days.filter((day) => day.selected);
    return selected.map((day) => day.id);
  }

  function deleteHabit(id) {
    if (window.confirm("Voce tem certeza que deseja deletar esse hábito?")) {
      axios
        .delete(`${URL}/${id}`, headersConfig)
        .then((response) => {
          setRefreshHabits(!refreshHabits);
          setCreatingHabit(false);
          clearCreateHabit();
        })
        .catch((error) => alert("Erro ao deletar hábito"));
    }
  }

  function getDaysHabits(arr) {
    let arrDays = [
      { day: "D", id: 0, selected: false },
      { day: "S", id: 1, selected: false },
      { day: "T", id: 2, selected: false },
      { day: "Q", id: 3, selected: false },
      { day: "Q", id: 4, selected: false },
      { day: "S", id: 5, selected: false },
      { day: "S", id: 6, selected: false },
    ];

    arr.forEach((day) => {
      arrDays.forEach((d) => {
        if (day === d.id) d.selected = true;
      });
    });
    return arrDays;
  }
}
