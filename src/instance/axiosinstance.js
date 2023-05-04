import axios from "axios";
const axiosInstance = axios.create({
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
const axiosGet = axios.create({
    baseURL: 'http://localhost:7000/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const axiosPost = axios.create({
    baseURL: 'http://localhost:7000/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
  });
  export { axiosGet, axiosPost };
