import { RadioButton } from "../ClientType/style";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { VscError } from "react-icons/vsc";
import {
  CheckAtivo,
  CpfCnpj,
  DivCheck,
  DivCheckGeral,
  DivContribuinte,
  DivContribuintePai,
  DivFlex,
  DivForm,
  DivLabelAtivo,
  DivLabelContribuinte,
  FormularioCnpj,
  InputWrite,
  DivWriteInput,
  DivResp,
  InputWriteTextArea,
  DivTextArea,
  DivOptions,
  DivSave,
  DivCancel,
  DivAlign,
  DivBtnSaveAlign,
  BtnSubmitForm,
  BtnCancelButton,
  SpanError,
  DivWriteError,
} from "./style";

export function FormCnpj() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  function onSubmit(userData: any) {
    api
      .post("http://localhost:3000/clients", userData)
      .then((response) => console.log("Deu certo"));

    console.log(userData);
  }

  return (
    <DivForm>
      <FormularioCnpj onSubmit={handleSubmit(onSubmit)}>
        <DivFlex>
          <DivWriteInput>
            Razão Social
            <DivWriteError>
              <InputWrite
                {...register("Razao", { required: true })}
              ></InputWrite>
              {errors.Razao && <VscError color="red" />}
            </DivWriteError>
          </DivWriteInput>
          <DivWriteInput>
            Nome Fantasia
            <InputWrite
              {...register("Fantasia", { required: true })}
            ></InputWrite>
          </DivWriteInput>
          <DivCheck>
            <DivCheckGeral>
              <CheckAtivo
                {...register("activeClient")}
                type="checkbox"
                name="radio"
                value="Ativo"
              ></CheckAtivo>
            </DivCheckGeral>
            <DivLabelAtivo>Ativo</DivLabelAtivo>
          </DivCheck>
        </DivFlex>
        <DivFlex>
          <CpfCnpj>
            CNPJ/CPF
            <InputWrite {...register("CNPJ", { required: true })}></InputWrite>
          </CpfCnpj>
          <DivContribuintePai>
            Contribuinte
            <DivContribuinte>
              <RadioButton type="radio" name="radio" value="cnpj" />
              <DivLabelContribuinte>Sim</DivLabelContribuinte>
              <RadioButton type="radio" name="radio" value="cpf" />
              <DivLabelContribuinte>Não</DivLabelContribuinte>
            </DivContribuinte>
          </DivContribuintePai>
        </DivFlex>
        <DivFlex>
          <DivWriteInput>
            Insc. Estadual
            <InputWrite {...register("estadual")}></InputWrite>
          </DivWriteInput>
          <DivWriteInput>
            Insc. Municipal
            <InputWrite {...register("municipal")}></InputWrite>
          </DivWriteInput>
        </DivFlex>
        <DivFlex>
          <DivWriteInput>
            Email
            <InputWrite {...register("email", { required: true })}></InputWrite>
          </DivWriteInput>
        </DivFlex>
        <DivResp>
          <DivFlex>
            <DivWriteInput>
              Nome do Responsável
              <InputWrite
                {...register("resp_pes", { required: true })}
              ></InputWrite>
            </DivWriteInput>
          </DivFlex>
          <DivFlex>
            <DivWriteInput>
              CPF
              <InputWrite
                {...register("resp_cpf", { required: true })}
              ></InputWrite>
            </DivWriteInput>
            <DivWriteInput>
              Data Nasc. Responsável
              <InputWrite {...register("resp_email")}></InputWrite>
            </DivWriteInput>
          </DivFlex>
          <DivFlex>
            <DivWriteInput>
              Telefone
              <InputWrite
                {...register("resp_tel", { required: true })}
              ></InputWrite>
            </DivWriteInput>
            <DivWriteInput>
              Celular
              <InputWrite
                {...register("resp_tel", { required: true })}
              ></InputWrite>
            </DivWriteInput>
            <DivWriteInput>
              Email Responsável
              <InputWrite {...register("resp_email")}></InputWrite>
            </DivWriteInput>
          </DivFlex>
          <DivFlex>
            <DivWriteInput>
              CEP
              <InputWrite {...register("resp_cep")}></InputWrite>
            </DivWriteInput>
            <DivWriteInput>
              Cidade
              <InputWrite {...register("resp_city")}></InputWrite>
            </DivWriteInput>
            <DivWriteInput>
              UF
              <InputWrite {...register("resp_uf")}></InputWrite>
            </DivWriteInput>
          </DivFlex>
          <DivFlex>
            <DivWriteInput>
              Endereço
              <InputWrite {...register("resp_endereco")}></InputWrite>
            </DivWriteInput>
            <DivWriteInput>
              Número
              <InputWrite {...register("resp_numero")}></InputWrite>
            </DivWriteInput>
          </DivFlex>
          <DivFlex>
            <DivWriteInput>
              Complemento
              <InputWrite {...register("resp_comp")}></InputWrite>
            </DivWriteInput>
            <DivWriteInput>
              Bairro
              <InputWrite {...register("resp_bairro")}></InputWrite>
            </DivWriteInput>
          </DivFlex>
          <DivTextArea>
            <DivWriteInput>
              Observação
              <InputWriteTextArea
                {...register("resp_obs")}
              ></InputWriteTextArea>
            </DivWriteInput>
          </DivTextArea>
          <DivOptions>
            <BtnSubmitForm type="submit">
              <DivSave>
                <DivAlign>
                  <DivBtnSaveAlign>Salvar</DivBtnSaveAlign>
                </DivAlign>
              </DivSave>
            </BtnSubmitForm>
            <BtnCancelButton href="/">
              <DivCancel>Cancelar</DivCancel>
            </BtnCancelButton>
          </DivOptions>
        </DivResp>
      </FormularioCnpj>
    </DivForm>
  );
}
function baseURL(baseURL: any, arg1: string) {
  throw new Error("Function not implemented.");
}
