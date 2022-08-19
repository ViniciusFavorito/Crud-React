import { ClientList } from "../components/Content";
import { Navbar } from "../components/Header";
import { NewClient } from "../components/NewClient";

export function CadastroLista() {
  return (
    <>
      <Navbar />
      <NewClient />
      <ClientList />
    </>
  );
}
