import { Route, Routes as RoutesCustom } from "react-router-dom";
import { CadastroCliente } from "./pages/CadastroCliente";
import { CadastroLista } from "./pages/CadastroLista";

const Routes = () => {
  return (
    <RoutesCustom>
      <Route path="/" element={<CadastroLista />} />
      <Route path="" element={<CadastroLista />} />
      <Route path="/new" element={<CadastroCliente />} />
    </RoutesCustom>
  );
};

export default Routes;
