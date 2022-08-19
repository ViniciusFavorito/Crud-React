import { DivClientType, DivLabel, DivTypes, RadioButton } from "./style";

export function ClientType() {
  return (
    <DivClientType>
      Tipo
      <DivTypes>
        <RadioButton type="radio" name="radio" value="cnpj" checked />
        <DivLabel>Pessoa Jurídica</DivLabel>
        <RadioButton type="radio" name="radio" value="cpf" />
        <DivLabel>Pessoa Física</DivLabel>
      </DivTypes>
    </DivClientType>
  );
}
