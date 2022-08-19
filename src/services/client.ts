import { TClient } from "../types/client";
import api from "./api";

const CLIENTS_ROUTE = "/clients";

const getClient = async (clientId: number) => {
  try {
    const { data } = await api.get<TClient>(`${CLIENTS_ROUTE}/${clientId}`);

    return data;
  } catch (e) {
    throw Error("Error at getClient request!");
  }
};

const getClients = async (name?: string) => {
  try {
    const { data } = await api.get<TClient[]>(
      `${CLIENTS_ROUTE}${name ? "/_search" : ""}`,
      {
        params: {
          Fantasia: name,
        },
      }
    );

    return data;
  } catch (e) {
    throw Error("Error at getClients request!");
  }
};

const createClient = async (clientData: Omit<TClient, "id">) => {
  try {
    const { data } = await api.post<TClient[]>(CLIENTS_ROUTE, clientData);

    return data;
  } catch (e) {
    throw Error("Error at createClient request!");
  }
};

const updateClient = async (clientData: TClient) => {
  try {
    const { data } = await api.patch<TClient>(
      `${CLIENTS_ROUTE}/${clientData.id}`,
      clientData
    );

    return data;
  } catch (e) {
    throw Error("Error at updateClient request!");
  }
};

const deleteClient = async (clientId: number) => {
  try {
    await api.delete(`${CLIENTS_ROUTE}/${clientId}`);
  } catch (e) {
    throw Error("Error at deleteClient request!");
  }
};

const clientService = {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
};

export default clientService;
