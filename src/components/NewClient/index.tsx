import {
  BtnName,
  BtnNameAlign,
  BtnNewClient,
  DivBtn,
  DivBtnContent,
} from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function NewClient() {
  return (
    <DivBtn>
      <BtnNewClient href="/client">
        <DivBtnContent>
          <AiOutlinePlusCircle size={40} color={"white"} />
          <BtnName>
            <BtnNameAlign>Clientes</BtnNameAlign>
          </BtnName>
        </DivBtnContent>
      </BtnNewClient>
    </DivBtn>
  );
}
