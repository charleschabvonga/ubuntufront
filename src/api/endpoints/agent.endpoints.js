import {
  API_PREFIX,
  getAuthHeaders,
  getHttpDeleteData,
  getHttpGetData,
  getHttpPostData,
  getHttpPutData,
} from './index';

const getAgentsEndpoint = () => `${API_PREFIX}/agents`;
const getAgentEndpoint = (id) => `${API_PREFIX}/agents/${id}`;

export const getAgentsRequest = () => [
  getAgentsEndpoint(),
  getHttpGetData(getAuthHeaders()),
];

export const getCreateAgentRequest = (agent) => [
  getAgentsEndpoint(),
  getHttpPostData(agent, getAuthHeaders()),
];

export const getAgentRequest = (id) => [
  getAgentEndpoint(id),
  getHttpGetData(getAuthHeaders()),
];

export const getEditAgentRequest = (id, agent) => [
  getAgentEndpoint(id),
  getHttpPutData(agent, getAuthHeaders()),
];

export const getDestroyAgentRequest = (id) => [
  getAgentEndpoint(id),
  getHttpDeleteData(getAuthHeaders()),
];
