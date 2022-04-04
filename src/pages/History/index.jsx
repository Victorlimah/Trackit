import * as S from "./style";
import Header from "../../components/Header";
import HabitsContext from "../../provider/HabitsContext";
import { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";

export default function History() {
  const { user } = useContext(HabitsContext);
  return (
    <>
      <S.Container>
        <Header image={user.image} />
        <S.MarginTop> </S.MarginTop>
        <S.Header>
          <h2>Histórico</h2>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </S.Header>
        <Footer />
      </S.Container>
    </>
  );
}
