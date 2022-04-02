import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 20px 15px;
  background-color: #fff;

  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #52b6ff;
  }
`;

export const Today = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #52b6ff;
  border-radius: 50%;
  width: 85px;
  height: 85px;
  position: absolute;
  bottom: 20px;

  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
  }
`;
