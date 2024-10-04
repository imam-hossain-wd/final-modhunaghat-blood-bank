import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Base URL from environment variables
  timeout: 10000, // Timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json', // Default headers (optional)
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config before sending it, such as adding authorization headers
    // For example, if you need to add a token:
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data or just return it as it is
    return response;
  },
  (error) => {
    // Handle the response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access or token expiration
      console.log('Unauthorized, please log in again.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
