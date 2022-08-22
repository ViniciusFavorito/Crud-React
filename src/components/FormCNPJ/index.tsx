import { RadioButton } from "../ClientType/style";
import { useForm } from "react-hook-form";
import { VscError, VscReplace } from "react-icons/vsc";
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
  BtnCancel,
  DivAlign,
  BtnSave,
  DivWriteError,
  DivCancel,
  DivTextAreaAlign,
  SpanNone,
} from "./style";
import clientService from "../../services/client";
import { TClient } from "../../types/client";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";

export function FormCnpj() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const clientId = new URLSearchParams(search).get("id");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TClient>();

  const handleSearchForClient = useCallback(
    async (clientId: number) => {
      try {
        const client = await clientService.getClient(clientId);
        reset(client);
      } catch {
        toast.error("Não foi possível achar este cliente!");
      }
    },
    [reset]
  );

  useEffect(() => {
    if (clientId && Number(clientId)) {
      handleSearchForClient(Number(clientId));
    }
  }, [clientId, handleSearchForClient]);

  async function onSubmit(userData: TClient) {
    if (clientId) {
      try {
        await clientService.updateClient(userData);
        toast.success("Cliente atualizado com sucesso!");
      } catch {
        toast.error(
          "Não foi possível alterar as informações do cliente, entre em contato com suporte."
        );
      }
    } else {
      try {
        await clientService.createClient(userData);
        toast.success("Cliente cadastrado com sucesso!");
      } catch {
        toast.error("Não foi possível criar o cliente");
      }
    }
    navigate("/");
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
              <SpanNone>
                {errors.Razao &&
                  toast.error("O campo 'Razão Social' não pode ser vazio.")}
              </SpanNone>
            </DivWriteError>
          </DivWriteInput>
          <DivWriteInput>
            Nome Fantasia
            <InputWrite
              {...register("Fantasia", { required: true })}
            ></InputWrite>
            <SpanNone>
              {errors.Fantasia &&
                toast.error("O campo 'Nome Fantasia' não pode ser vazio.")}
            </SpanNone>
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
          <DivFlex></DivFlex>
        </DivFlex>
        <DivFlex>
          <CpfCnpj>
            CNPJ/CPF
            <InputWrite {...register("CNPJ", { required: true })}></InputWrite>
            <SpanNone>
              {errors.CNPJ &&
                toast.error("O campo 'Nome CNPJ' não pode ser vazio.")}
            </SpanNone>
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
            <SpanNone>
              {errors.email &&
                toast.error("O campo 'Email' não pode ser vazio.")}
            </SpanNone>
          </DivWriteInput>
        </DivFlex>
        <DivResp>
          <DivFlex>
            <DivWriteInput>
              Nome do Responsável
              <InputWrite
                {...register("resp_pes", { required: true })}
              ></InputWrite>
              <SpanNone>
                {errors.resp_pes &&
                  toast.error(
                    "O campo 'Nome do Responsável' não pode ser vazio."
                  )}
              </SpanNone>
            </DivWriteInput>
          </DivFlex>
          <DivFlex>
            <DivWriteInput>
              CPF
              <InputWrite
                {...register("resp_cpf", { required: true })}
              ></InputWrite>
              <SpanNone>
                {errors.resp_cpf &&
                  toast.error("O campo 'Email' não pode ser vazio.")}
              </SpanNone>
            </DivWriteInput>
            <DivWriteInput>
              Data Nasc. Responsável
              <InputWrite type={"date"}></InputWrite>
            </DivWriteInput>
          </DivFlex>
          <DivFlex>
            <DivWriteInput>
              Telefone
              <InputWrite
                {...register("resp_tel", { required: true })}
              ></InputWrite>
              <SpanNone>
                {errors.resp_tel &&
                  toast.error("O campo 'Telefone' não pode ser vazio.")}
              </SpanNone>
            </DivWriteInput>
            <DivWriteInput>
              Celular
              <InputWrite
                {...register("resp_tel", { required: true })}
              ></InputWrite>
              <SpanNone>
                {errors.resp_tel &&
                  toast.error("O campo 'Celular' não pode ser vazio.")}
              </SpanNone>
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
            <DivTextAreaAlign>
              Observação
              <InputWriteTextArea
                {...register("resp_obs")}
              ></InputWriteTextArea>
            </DivTextAreaAlign>
          </DivTextArea>
          <DivOptions>
            <DivSave>
              <DivAlign>
                <BtnSave type="submit">Salvar</BtnSave>
              </DivAlign>
            </DivSave>
            <DivCancel>
              <DivAlign>
                <BtnCancel href="/">Cancelar</BtnCancel>
              </DivAlign>
            </DivCancel>
          </DivOptions>
        </DivResp>
      </FormularioCnpj>
    </DivForm>
  );
}
