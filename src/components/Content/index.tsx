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
import { useEffect, useState } from "react";
import api from "../../services/api";

// export interface IClients {
//   cnpj: string;
//   fantasia: string;
//   razao: string;
//   activeClient: boolean;
//   email: string;
//   estadual: string;
//   municipal: string;
//   resp_bairro: string;
//   resp_cep: string;
//   resp_city: string;
//   resp_comp: string;
//   resp_cpf: string;
//   resp_email: string;
//   resp_endereco: string;
//   resp_numero: string;
//   resp_obs: string;
//   resp_pes: string;
//   resp_tel: string;
//   resp_uf: string;
//   index: number;
// }

export function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:3000/clients")
      .then((response) => setClients(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  console.log(clients);

  function deleteClient(clientId: number) {
    api
      .delete("http://localhost:3000/clients/" + clientId)
      .then((response) => alert("Cliente Excluido com sucesso!"));
    setClients(
      clients.filter((clients) => {
        return clients.id !== clientId;
      })
    );
  }

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
      {clients.length > 0 ? (
        <>
          {clients.map((key: number, index: number) => (
            <DivContentClients key={clients[index].id}>
              <DivContentColClients>
                <DivColId>{clients[index].id}</DivColId>
                <DivColName>{clients[index].Fantasia}</DivColName>
                <DivColCPF>{clients[index].cnpj}</DivColCPF>
                <DivColEmail>{clients[index].email}</DivColEmail>
                <DivColTel>{clients[index].resp_tel}</DivColTel>
                <DivColCel>{clients[index].resp_cel}</DivColCel>
                <DivColOpc>
                  <LinkEdit href="/new">
                    <BtnEdit>
                      <BiPencil size={30} />
                    </BtnEdit>
                  </LinkEdit>
                  <LinkDel>
                    <BtnDel onClick={() => deleteClient(clients[index].id)}>
                      <BsFillPersonXFill size={30} />
                    </BtnDel>
                  </LinkDel>
                </DivColOpc>
              </DivContentColClients>
            </DivContentClients>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
