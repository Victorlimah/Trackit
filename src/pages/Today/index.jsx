import Header from "../../components/Header";
import TodayHabit from "../../components/TodayHabit";
import HabitsContext from "../../provider/HabitsContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import "dayjs/locale/pt-br";

export default function Today() {
  const { user } = useContext(HabitsContext);
  const [todayHabit, setTodayHabit] = useState([]);

  const dayjs = require("dayjs");
  dayjs.locale("pt-br");
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

  const headersConfig = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(URL, headersConfig)
      .then((response) => {
        setTodayHabit(response.data);
        console.log(response);
      })
      .catch((error) => alert("Erro ao carregar os hábitos"));
  }, []);

  return (
    <S.Container>
      <Header image={user.image} />
      <S.MarginTop> </S.MarginTop>
      <S.Header>
        <h2>
          {dayjs().format("dddd")}, {dayjs().format("DD/MM")}
        </h2>
        <h3>Nnehuks dja sjd a</h3>
      </S.Header>
      <TodayHabit name="Estudar a api" sequence="5" record="8" />
    </S.Container>
  );
}
