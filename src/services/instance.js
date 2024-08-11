import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b8cd753ce57325ac782c22.mockapi.io/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
