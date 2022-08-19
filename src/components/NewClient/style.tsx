import styled from "styled-components";

export const DivBtn = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: white;
`;

export const BtnNewClient = styled.a`
  background-color: #0f52ba;
  display: flex;
  width: 7.5rem;
  height: 2.6rem;
  border-radius: 0.5rem;
  margin-top: auto;
  margin-bottom: auto;
  border: none;
  cursor: pointer;
  margin-left: 50px;
  text-decoration: none;
  &:hover {
    background-color: #a2a2a2;
  }
`;

export const DivBtnContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 5px;
`;

export const BtnName = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 17px;
`;

export const BtnNameAlign = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
