import axios from 'axios';

const ApiService = {
  get(resource, config) {
    return axios.get(resource, config);
  },
  post(resource, data, config) {
    return axios.post(resource, data, config);
  },
  put(resource, data, config) {
    return axios.put(resource, data, config);
  }
};

export default ApiService;
