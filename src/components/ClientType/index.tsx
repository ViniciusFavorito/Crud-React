import { DivClientType, DivLabel, DivTypes, LabelRegister, RadioButton } from "./style";

export function ClientType() {
  return (
    <DivClientType>
      <LabelRegister>Adicionar Novo Cliente</LabelRegister>
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
