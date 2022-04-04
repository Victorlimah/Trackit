import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 250px;
    height: 45px;
    font-family: "Lexend Deca";
    padding: 7px;
    margin-bottom: 8px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }

  input::placeholder {
    color: #dbdbdb;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lexend Deca";
    border: none;
    width: 250px;
    height: 45px;
    color: #ffffff;
    background: #52b6ff;
    border-radius: 5px;
    font-size: 21px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Link = styled.span`
  font-family: "Lexend Deca";
  font-size: 14px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
  display: flex;
  justify-content: center;
`;
