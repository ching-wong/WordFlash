import axios from 'axios';

const api = axios.create({
  baseURL: "https://wordflash.onrender.com"
});

export default api;