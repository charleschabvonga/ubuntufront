import {
  API_PREFIX,
  getAuthHeaders,
  getHttpDeleteData,
  getHttpGetData,
  getHttpPostData,
  getHttpPutData,
} from './index';

const getUsersEndpoint = () => `${API_PREFIX}/users`;
const getUserEndpoint = (id) => `${API_PREFIX}/users/${id}`;

export const getUsersRequest = () => [
  getUsersEndpoint(),
  getHttpGetData(getAuthHeaders()),
];

export const getCreateUserRequest = (user) => [
  getUsersEndpoint(),
  getHttpPostData(user, getAuthHeaders()),
];

export const getUserRequest = (id) => [
  getUserEndpoint(id),
  getHttpGetData(getAuthHeaders()),
];

export const getUpdateUserRequest = (id, user) => [
  getUserEndpoint(id),
  getHttpPutData(user, getAuthHeaders()),
];

export const getDestroyUserRequest = (id) => [
  getUserEndpoint(id),
  getHttpDeleteData(getAuthHeaders()),
];
