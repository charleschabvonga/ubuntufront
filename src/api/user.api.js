import axios from 'axios';

import {
  getCreateUserRequest,
  getDestroyUserRequest,
  getUpdateUserRequest,
  getUserRequest,
  getUsersRequest,
} from './endpoints/user.endpoints';

export const findAll = async () => {
  try {
    const [endpoint, requestOptions] = getUsersRequest();
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From users/findAll: ${error.message}`);
    return Promise.reject(error);
  }
};

export const create = async (user) => {
  try {
    const [endpoint, requestOptions] = getCreateUserRequest(user);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From users/create: ${error.message}`);
    return Promise.reject(error);
  }
};

export const findById = async (user) => {
  try {
    const [endpoint, requestOptions] = getUserRequest(user);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From users/findById: ${error.message}`);
    return Promise.reject(error);
  }
};

export const update = async (id, user) => {
  try {
    const [endpoint, requestOptions] = getUpdateUserRequest(id, user);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From users/update: ${error.message}`);
    return Promise.reject(error);
  }
};

export const destroy = async (id) => {
  try {
    const [endpoint, requestOptions] = getDestroyUserRequest(id);
    const { data } = await axios(endpoint, requestOptions);

    return await Promise.resolve(data);
  } catch (error) {
    console.error(`From users/remove: ${error.message}`);
    return Promise.reject(error);
  }
};