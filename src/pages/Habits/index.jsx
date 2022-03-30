import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Habits({ token }) {
  const [habits, setHabits] = useState([]);

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

  function habitsFactory() {
    if (habits.length === 0) {
      return <p>Você não possui nenhum hábito cadastrado</p>;
    }
    return habits.map((habits) => {
      return <h2>{habits.name}</h2>;
    });
  }

  return (
    <>
      <Header
        image={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        }
      />
    </>
  );
}
