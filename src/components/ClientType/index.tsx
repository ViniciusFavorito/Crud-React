import { DivClientType, DivTypes, RadioButton } from "./style";

export function ClientType() {
  return (
    <DivClientType>
      Tipo
      <DivTypes>
        <RadioButton type="radio" name="radio" value="cnpj" />
        <div>Pessoa Jurídica</div>
        <RadioButton type="radio" name="radio" value="cpf" />
        <div>Pessoa Física</div>
      </DivTypes>
    </DivClientType>
  );
}
