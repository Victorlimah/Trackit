import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
`;
export const CreateHabit = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 150px;
  background: white;
  border-radius: 5px;
  position: relative;

  form input {
    width: 280px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 7px;
    margin: 20px 0 8px 0;
    font-size: 20px;
    color: #dbdbdb;
  }

  form input::placeholder {
    color: #d5d5d5;
  }
`;

export const ButtonDays = styled.div`
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
