import axios from 'axios'

const BASE_URL = process.env.BASE_URL;
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 30000; //30秒处理火箭蛙返回很慢
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true;

// http request 拦截器
axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  Toast.fail('接口故障,稍后再试！', 3, '', true)
  return Promise.reject(error);
});

//http response 拦截器
axios.interceptors.response.use((res) => {
  return res;
}, (error) => {
  console.log(error);
  if (error.response) {
    Toast.fail('网络异常，请稍后重试！', 3, '', true)
    switch (error.response.status) {
      case 500:
        console.log("502处理")
      case 404:
        console.log("404处理")
    }
  } else {
    Toast.fail('网络异常，请稍后重试！', 3, '', true)
    return false;
  }
  return Promise.reject(error);
});

export default axios;