import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  // baseURL: 'http://localhost:3000/',
  baseURL: process.env.REACT_APP_ENDPOINT,
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
