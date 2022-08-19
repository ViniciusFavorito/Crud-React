import {
  BtnDel,
  BtnEdit,
  DivColCel,
  DivColCPF,
  DivColEmail,
  DivColId,
  DivColName,
  DivColOpc,
  DivColTel,
  DivContent,
  DivContentClients,
  DivContentCol,
  DivContentColClients,
  LinkDel,
  LinkEdit,
} from "./style";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { BsFillPersonXFill } from "react-icons/bs";

export function ClientList() {
  return (
    <>
      <DivContent>
        <DivContentCol>
          <DivColId>ID</DivColId>
          <DivColName>
            Nome/Razão Social
            <AiOutlineArrowUp />
          </DivColName>
          <DivColCPF>CPF/CNPJ</DivColCPF>
          <DivColEmail>Email</DivColEmail>
          <DivColTel>Tel</DivColTel>
          <DivColCel>Cel</DivColCel>
          <DivColOpc></DivColOpc>
        </DivContentCol>
      </DivContent>
      <DivContentClients>
        <DivContentColClients>
          <DivColId>14</DivColId>
          <DivColName>Cerri & Santos Equipamentos Ind...</DivColName>
          <DivColCPF>23.123.546/0001-01</DivColCPF>
          <DivColEmail>tchucubira@gmail.com</DivColEmail>
          <DivColTel>62 3324-8442</DivColTel>
          <DivColCel>62 99472-9104</DivColCel>
          <DivColOpc>
            <LinkEdit>
              <BtnEdit>
                <BiPencil size={30} />
              </BtnEdit>
            </LinkEdit>
            <LinkDel>
              <BtnDel>
                <BsFillPersonXFill size={30} />
              </BtnDel>
            </LinkDel>
          </DivColOpc>
        </DivContentColClients>
      </DivContentClients>
    </>
  );
}
