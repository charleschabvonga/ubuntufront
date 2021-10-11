import axios from 'axios';

import {
  getAgentRequest,
  getAgentsRequest,
  getCreateAgentRequest,
  getDestroyAgentRequest,
  getEditAgentRequest,
} from './endpoints/agent.endpoints';

export const findAll = async () => {
  try {
    const [endpoint, requestOptions] = getAgentsRequest();
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From agents/findAll: ${error.message}`);
    return Promise.reject(error);
  }
};

export const create = async (agent) => {
  try {
    const [endpoint, requestOptions] = getCreateAgentRequest(agent);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From agents/create: ${error.message}`);
    return Promise.reject(error);
  }
};

export const findById = async (agent) => {
  try {
    const [endpoint, requestOptions] = getAgentRequest(agent);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From agents/findById: ${error.message}`);
    return Promise.reject(error);
  }
};

export const update = async (id, agent) => {
  try {
    const [endpoint, requestOptions] = getEditAgentRequest(id, agent);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From agents/update: ${error.message}`);
    return Promise.reject(error);
  }
};

export const destroy = async (id) => {
  try {
    const [endpoint, requestOptions] = getDestroyAgentRequest(id);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From agents/remove: ${error.message}`);
    return Promise.reject(error);
  }
};
