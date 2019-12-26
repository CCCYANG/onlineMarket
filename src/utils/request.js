import axios from 'axios';

const instance = axios.create({
  timeout: 10000
})

//http request 拦截器
instance.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Access-Control-Allow-Origin': '*'
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


//http response 拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

export function get(url, options){
  return request(url, { ...options, method: 'get' })
}

export function post(url, options){
  return request(url, { ...options, method: 'post' })
}

export function put(url, options){
  return request(url, { ...options, method: 'put' })
}

export function remove(url, options){
  return request(url, { ...options, method: 'delete' })
}

export default function request(url, options={}){
  return instance({
    url,
    ...options
  }).then(response => {
    return response.status===200 ? response.data : response;
  })
  .catch(err => {err} )
}
