import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 15px;
  z-index: 5;

  h1 {
    font-family: "Playball";
    font-size: 39px;
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const Arrow = styled.img`
  width: 30px !important;
  height: 30px !important;
  margin-left: 10px;
  border-radius: 0 !important;
`;
