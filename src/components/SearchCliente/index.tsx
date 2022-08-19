import { DivIconSearch, DivInput, InputWrite } from "./style";
import { BsSearch } from "react-icons/bs";

export function SearchClient(props: any) {
  return (
    <DivInput>
      <InputWrite {...props}></InputWrite>
      <DivIconSearch>
        <BsSearch size={30} color={"blue"} />
      </DivIconSearch>
    </DivInput>
  );
}
