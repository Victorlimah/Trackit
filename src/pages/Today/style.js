import styled from "styled-components";

export const MarginTop = styled.div`
  height: 110px;
  background: #f2f2f2;
`;

export const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
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
    margin-bottom: 5px;
  }

  h3 {
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #bababa;
  }

  h4 {
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #8fc549;
  }
`;

// import styled from "styled-components";

export const Card = styled.article`
  width: 90%;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 15px;
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

  .done {
    font-family: "Lexend Deca";
    font-size: 15px; 
    color: #8FC549;
`;

export const Uncheck = styled.div`
  width: 70px;
  height: 70px;
  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Check = styled.div`
  width: 70px;
  height: 70px;
  background: #8fc549;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
