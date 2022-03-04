import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://js-post-api.herokuapp.com/api',
    headers: {
        "Content-Type":"application/json"
    },
})

axiosClient.interceptors.request.use(function (config : AxiosRequestConfig) {
    // assign header 
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosClient.interceptors.response.use(function (response :AxiosResponse) {

    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  });
export default axiosClient