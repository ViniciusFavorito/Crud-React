import { ClientList } from "../components/Content";
import { Navbar } from "../components/Header";
import { NewClient } from "../components/NewClient";
import { SeachCliente } from "../components/SearchCliente";

export function CadastroLista() {
  return (
    <>
      <Navbar />
      <NewClient />
      <ClientList />
    </>
  );
}
