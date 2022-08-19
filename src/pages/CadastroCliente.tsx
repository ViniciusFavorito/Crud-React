import { ClientType } from "../components/ClientType";
import { FormCnpj } from "../components/FormCNPJ";
import { Navbar } from "../components/Header";
import { NewClient } from "../components/NewClient";

export function CadastroCliente() {
  return (
    <>
      <Navbar />
      <NewClient />
      <ClientType />
      <FormCnpj />
    </>
  );
}
