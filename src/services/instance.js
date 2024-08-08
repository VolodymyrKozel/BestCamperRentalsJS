import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b3a8097fba54a5b7edc0a5.mockapi.io/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
