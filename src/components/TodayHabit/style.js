import styled from "styled-components";

export const Card = styled.article`
  width: 90%;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-family: "Lexend Deca";
    font-size: 21px;
    color: #666666;
  }

  h3 {
    font-family: "Lexend Deca";
    font-size: 15px;
    color: #666666;
  }
`;

export const Check = styled.div`
  width: 70px;
  height: 70px;
  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`;
