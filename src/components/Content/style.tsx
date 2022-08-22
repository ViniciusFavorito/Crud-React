import styled from "styled-components";

export const DivContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: white;
`;

export const DivContentCol = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border: solid;
  border-left: none;
  border-right: none;
  flex-direction: row;
  font-weight: bold;
  font-size: 1.125rem;
`;

export const DivColId = styled.div`
  width: 8%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: ${(props) => props.theme.palette.common.blue};
`;

export const DivColIdContent = styled.div`
  width: 8%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: black;
  font-weight: bold;
  /* color: ${(props) => props.theme.palette.common.blue}; */
`;

export const DivColName = styled.div`
  width: 25%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #1e90ff;
`;

export const DivColNameContent = styled.div`
  width: 25%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: bold;
`;

export const DivColCPF = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #1e90ff;
`;

export const DivColCPFContent = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: black;
  font-weight: bold;
`;

export const DivColEmail = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #1e90ff;
`;

export const DivColEmailContent = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: black;
  font-weight: bold;
`;

export const DivColTel = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #1e90ff;
`;

export const DivColTelContent = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: black;
  font-weight: bold;
`;

export const DivColCel = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #1e90ff;
`;

export const DivColCelContent = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: black;
  font-weight: bold;
`;

export const DivColOpc = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #4682b4;
`;

export const DivCenterContent = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const DivContentClients = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding-left: 50px;
  padding-right: 50px;
  background-color: white;
  color: black;
  font-weight: bold;
`;

export const DivContentColClients = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border-bottom: solid gray;
  flex-direction: row;
  color: black;
  font-weight: bold;
`;

export const LinkEdit = styled.a``;
export const LinkDel = styled.a``;

export const BtnEdit = styled.button`
  background: transparent;
  border: 0;
  color: blue;
  cursor: pointer;
  line-height: 0;
  border-radius: 2px;
  &:hover {
    color: #ababf4;
  }
`;

export const BtnDel = styled.button`
  background: transparent;
  border: 0;
  color: red;
  cursor: pointer;
  line-height: 0;
  border-radius: 2px;
  &:hover {
    color: #db7f86;
  }
`;
