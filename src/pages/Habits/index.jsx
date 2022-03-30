import Header from "../../components/Header";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HeaderHabits from "../../components/HeaderHabits";
import { HabitsContext } from "../../provider/HabitsContext";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [creatingHabit, setCreatingHabit] = useState(false);
  const location = useLocation();
  const { image, token } = location.state.response;
  // se eu quiser pegar o token aqui pelo location state também consigo
  // const { email, id, image, name, token } = location.state.response;

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
        <Header image={image} />
        <HeaderHabits />
        {addHabit()}
      </HabitsContext.Provider>
    </>
  );

  function addHabit() {
    if (creatingHabit) {
      return <h1>Criando hábito</h1>;
    }
    return <></>;
  }
}
