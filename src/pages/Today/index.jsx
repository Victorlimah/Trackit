import axios from "axios";
import "dayjs/locale/pt-br";
import * as S from "./style";
import Check from "../../assets/check.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HabitsContext from "../../provider/HabitsContext";
import { useState, useContext, useEffect } from "react";

export default function Today() {
  const { user } = useContext(HabitsContext);
  const [refresh, setRefresh] = useState(false);
  const [todayHabit, setTodayHabit] = useState([]);

  const dayjs = require("dayjs");
  dayjs.locale("pt-br");

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";

  const headersConfig = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${URL}today`, headersConfig)
      .then((response) => {
        setTodayHabit(response.data);
      })
      .catch(() => alert("Erro ao carregar os hábitos"));
  }, [refresh]);

  return (
    <S.Container>
      <Header image={user.image} />
      <S.MarginTop> </S.MarginTop>
      <S.Header>{headerToday()}</S.Header>
      {todayHabit.map((habit) => TodayHabit(habit))}
      <S.MarginTop> </S.MarginTop>
      <Footer />
    </S.Container>
  );

  function headerToday() {
    return (
      <>
        <h2>
          {dayjs().format("dddd")} - {dayjs().format("DD/MM")}
        </h2>
        {todayHabit.length === 0 ? (
          <h3>Você não possui hábitos hoje</h3>
        ) : (
          <h4>XX% dos hábitos concluídos</h4>
        )}
      </>
    );
  }

  function TodayHabit({ id, name, sequence, record, done }) {
    return (
      <S.Card>
        <S.Infos>
          <h2>{name}</h2>
          <h3>Sequência atual: {sequence} dias</h3>
          <h3>Seu recorde: {record} dias</h3>
        </S.Infos>
        {!done ? (
          <S.Uncheck onClick={() => checkHabit(id)}>
            <img src={Check} alt="check" />
          </S.Uncheck>
        ) : (
          <S.Check onClick={() => unCheckHabit(id)}>
            <img src={Check} alt="check" />
          </S.Check>
        )}
      </S.Card>
    );
  }

  function checkHabit(id) {
    axios
      .post(`${URL}${id}/check`, {}, headersConfig)
      .then(() => setRefresh(!refresh))
      .catch(() => alert("Erro ao marcar o hábito"));
  }

  function unCheckHabit(id) {
    axios
      .post(`${URL}${id}/uncheck`, {}, headersConfig)
      .then(() => setRefresh(!refresh))
      .catch(() => alert("Erro ao desmarcar o hábito"));
  }
}
