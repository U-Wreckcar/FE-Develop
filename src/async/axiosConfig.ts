import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
