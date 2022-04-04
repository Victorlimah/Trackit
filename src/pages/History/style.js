import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
`;

export const MarginTop = styled.div`
  height: 110px;
  background: #f2f2f2;
`;

export const Header = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;

  h2 {
    font-family: "Lexend Deca";
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 15px;
  }

  p {
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #666666;
  }
`;
