import {
  BtnDel,
  BtnEdit,
  DivColCel,
  DivColCelContent,
  DivColCPF,
  DivColCPFContent,
  DivColEmail,
  DivColEmailContent,
  DivColId,
  DivColIdContent,
  DivColName,
  DivColNameContent,
  DivColOpc,
  DivColTel,
  DivColTelContent,
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
import { useCallback, useEffect, useState } from "react";
import { TClient } from "../../types/client";
import clientService from "../../services/client";
import { toast } from "react-toastify";
import { SearchClient } from "../SearchCliente";
import useDebounce from "../../hooks/useDebounce";

export function ClientList() {
  const [clients, setClients] = useState<TClient[]>([]);
  const [filterSearch, setFilterSearch] = useState<string>();

  const debouncedFilterSearch = useDebounce(filterSearch ?? "", 500);

  const fetchClients = useCallback(async (search?: string) => {
    const clients = await clientService.getClients(search);
    setClients(clients);
  }, []);

  const deleteClient = async (clientId: number) => {
    try {
      await clientService.deleteClient(clientId);
      setClients((clients) =>
        clients.filter((client) => client.id !== clientId)
      );
      toast.success("Cliente deletado com sucesso!");
    } catch (e) {
      toast.error("Não foi possí­vel excluir o cliente, tente novamente!");
    }
  };

  useEffect(() => {
    fetchClients(
      debouncedFilterSearch && debouncedFilterSearch.length
        ? debouncedFilterSearch
        : undefined
    );
  }, [debouncedFilterSearch]);

  return (
    <>
      <SearchClient
        onChange={({ target }: { target: { value: string } }) =>
          setFilterSearch(target.value)
        }
      />
      <DivContent>
        <DivContentCol>
          <DivColId>ID</DivColId>
          <DivColName>
            Nome/Razao Social
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
          {clients.map((client) => (
            <DivContentClients key={client.id}>
              <DivContentColClients>
                <DivColIdContent>{client.id}</DivColIdContent>
                <DivColNameContent>{client.Fantasia}</DivColNameContent>
                <DivColCPFContent>{client.CNPJ}</DivColCPFContent>
                <DivColEmailContent>{client.email}</DivColEmailContent>
                <DivColTelContent>{client.resp_tel}</DivColTelContent>
                <DivColCelContent>{client.resp_cel}</DivColCelContent>
                <DivColOpc>
                  <LinkEdit href={`/client?id=${client.id}`}>
                    <BtnEdit>
                      <BiPencil size={30} />
                    </BtnEdit>
                  </LinkEdit>
                  <LinkDel>
                    <BtnDel onClick={() => deleteClient(client.id)}>
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
