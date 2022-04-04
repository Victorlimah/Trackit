import axios from "axios";
import "dayjs/locale/pt-br";
import * as S from "./style";
import Check from "../../assets/check.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HabitsContext from "../../provider/HabitsContext";
import { useState, useContext, useEffect } from "react";

export default function Today() {
  const [refresh, setRefresh] = useState(false);
  const [todayHabit, setTodayHabit] = useState([]);
  const [checkActive, setCheckActive] = useState(true);
  const { user, progress, setProgress } = useContext(HabitsContext);
  const [status, setStatus] = useState({
    answeredToday: false,
    isCurrentRecord: false,
    totalHabits: 0,
    habitsAnswered: 0,
  });

  let percent = (status.habitsAnswered / status.totalHabits) * 100;
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
        let length = response.data.length;
        let answered = 0;

        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].done) answered++;
        }

        setStatus({
          ...status,
          totalHabits: length,
          habitsAnswered: answered,
        });
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
      <Footer progress={progress} />
    </S.Container>
  );

  function headerToday() {
    setProgress(percent);
    return (
      <>
        <h2>{dayjs().format("dddd - DD/MM").replace("-feira", "")}</h2>
        {subtitle()}
      </>
    );
  }

  function subtitle() {
    if (todayHabit.length === 0) {
      return <h3>Você não possui hábitos hoje</h3>;
    } else if (status.habitsAnswered === 0) {
      return <h3>Nenhum hábitos concluído ainda</h3>;
    } else {
      return <h4>{percent.toFixed(0)}% dos hábitos concluídos</h4>;
    }
  }

  function TodayHabit({ id, name, currentSequence, highestSequence, done }) {
    return (
      <S.Card>
        <S.Infos>
          <h2>{name}</h2>
          <h3>
            Sequência atual:
            <span
              className={done ? "done" : ""}
            >{` ${currentSequence} dias`}</span>
          </h3>

          <h3>
            Seu recorde:
            <span
              className={
                currentSequence === highestSequence && highestSequence !== 0
                  ? "done"
                  : ""
              }
            >
              {` ${highestSequence} dias`}
            </span>
          </h3>
        </S.Infos>
        {!done ? (
          <S.Uncheck
            onClick={() => {
              if (checkActive) {
                setCheckActive(false);
                checkHabit(id);
              }
            }}
          >
            <img src={Check} alt="check" />
          </S.Uncheck>
        ) : (
          <S.Check
            onClick={() => {
              if (checkActive) {
                setCheckActive(false);
                unCheckHabit(id);
              }
            }}
          >
            <img src={Check} alt="check" />
          </S.Check>
        )}
      </S.Card>
    );
  }

  function checkHabit(id) {
    axios
      .post(`${URL}${id}/check`, {}, headersConfig)
      .then(() => {
        setRefresh(!refresh);
        setStatus({
          ...status,
          habitsAnswered: status.habitsAnswered + 1,
        });
        setCheckActive(true);
      })
      .catch(() => alert("Erro ao marcar o hábito") && setCheckActive(true));
  }

  function unCheckHabit(id) {
    axios
      .post(`${URL}${id}/uncheck`, {}, headersConfig)
      .then(() => {
        setRefresh(!refresh);
        setStatus({
          ...status,
          habitsAnswered: status.habitsAnswered - 1,
        });
        setCheckActive(true);
      })
      .catch(() => alert("Erro ao desmarcar o hábito") && setCheckActive(true));
  }
}
