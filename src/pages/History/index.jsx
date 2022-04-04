import * as S from "./style";
import { useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HabitsContext from "../../provider/HabitsContext";

export default function History() {
  const { user, progress } = useContext(HabitsContext);
  return (
    <>
      <S.Container>
        <Header image={user.image} />
        <S.MarginTop> </S.MarginTop>
        <S.Header>
          <h2>Histórico</h2>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </S.Header>
        <Footer progress={progress} />
      </S.Container>
    </>
  );
}
