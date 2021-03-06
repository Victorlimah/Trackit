import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  min-height: 100vh;
`;

export const CreateHabit = styled.section`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 150px;
  background: white;
  border-radius: 5px;
  position: relative;

  input {
    width: 280px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 7px;
    margin: 20px 0 8px 0;
    font-size: 20px;
    color: #666666;
  }

  input::placeholder {
    color: #dbdbdb;
  }
`;

export const ButtonDays = styled.div`
  width: 280px;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
`;

export const Day = styled.button`
  border: none;
  background: #ffffff;
  font-size: 20px;
  color: #dbdbdb;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

export const DaySelect = styled.button`
  border: none;
  background: #dbdbdb;
  font-size: 20px;
  color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

export const ActionsButton = styled.div`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin-right: 10px;
  position: absolute;
  bottom: 10px;
  right: 28px;
`;

export const ButtonCancel = styled.button`
  border: none;
  font-size: 16px;
  text-align: center;
  color: #52b6ff;
  background: #ffffff;
`;

export const ButtonSave = styled.button`
  border: none;
  margin-right: 5px;
  padding: 5px 10px;
  font-size: 16px;
  background: #52b6ff;
  text-align: center;
  color: white;
  border-radius: 5px;
`;

export const Empty = styled.span`
  display: flex;
  width: 90%;
  font-family: "Lexend Deca";
  font-size: 18px;
  margin: 50px auto;
  color: #666666;
`;

export const Habit = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  height: 100px;
  background: white;
  border-radius: 5px;
  position: relative;
`;

export const TitleHabit = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 24px;

  h3 {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #666666;
  }

  img {
    width: 20px;
    color: #666666;
  }
`;

export const HabitDay = styled.div`
  width: 220px;
  margin-left: 24px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
`;

export const MarginTop = styled.div`
  height: 110px;
  background: #f2f2f2;
`;
