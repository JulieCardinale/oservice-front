/* Import(s) */
import axios from 'axios';

import AdminToken from 'configuration/AdminToken';

const { connectedUserToken } = sessionStorage;

/*
 * api
 * @infos : api adress
 */
export const api = 'https://aws.oservice.cloudns.cl/oservice-back';

/*
 * ApiClient
 * @infos : Axios instance for api request without token
 */
export const ApiClient = axios.create({
  baseURL: `${api}/wp-json`,
});

/*
 * ApiClientUserToken
 * @infos : Axios instance for user api request
 */
export const ApiClientUserToken = axios.create({
  baseURL: `${api}/wp-json`,
  headers: {
    Authorization: `Bearer ${connectedUserToken}`,
  },
});

/*
 * ApiClientAdminToken
 * @infos : Axios instance for api admin api request
 */
export const ApiClientAdminToken = axios.create({
  baseURL: `${api}/wp-json`,
  headers: {
    Authorization: `Bearer ${AdminToken && AdminToken}`,
  },
});
