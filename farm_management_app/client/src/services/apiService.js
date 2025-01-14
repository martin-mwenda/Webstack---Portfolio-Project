import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your API base URL
});

export default apiClient;
