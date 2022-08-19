import { DivIconSearch, DivInput, InputWrite } from "./style";
import { BsSearch } from "react-icons/bs";

export function SeachCliente() {
  return (
    <DivInput>
      <InputWrite></InputWrite>
      <DivIconSearch>
        <BsSearch size={30} color={"blue"} />
      </DivIconSearch>
    </DivInput>
  );
}
