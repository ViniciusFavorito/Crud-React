import { ClientType } from "../components/ClientType";
import { FormCnpj } from "../components/FormCNPJ";
import { Navbar } from "../components/Header";

export function CadastroCliente() {
  return (
    <>
      <Navbar />
      <ClientType />
      <FormCnpj />
    </>
  );
}
