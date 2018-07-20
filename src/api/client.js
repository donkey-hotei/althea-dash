import axios from 'axios';
import { underscoreKeys, camelizeKeys } from '../lib/utils';

// const url = window.location.hostname + ":4877";
const url = 'http://192.168.10.1:4877';

const client = axios.create({
  baseUrl: process.env.PORTAL_API_BASE,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  transformRequest: [underscoreKeys, JSON.stringify],
  transformResponse: [
    (data) => {
      try {
        return JSON.parse(data);
      } catch (e) {
        return data;
      }
    },
    camelizeKeys,
  ],
});

export default client;
