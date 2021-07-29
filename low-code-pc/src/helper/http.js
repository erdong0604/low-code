import axios from "axios";
import { message } from "ant-design-vue";
const service = axios.create({
  baseURL: "/lowCode",
  timeout: 20000,
  withCredentials: true,
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const request = (options) => {
  // const toast = Toast.loading({
  //   message: "加载中...",
  //   forbidClick: true,
  // });
  return new Promise((resolve, reject) => {
    service({
      ...options,
    })
      .then(({ data }) => {
        // toast.clear();
        if (data.code !== 200) {
          message.error(data.msg);
          return reject(data);
        }
        resolve(data);
      })
      .catch((err) => {
        // toast.clear();
        return reject(err); //
      });
  });
};

const get = (options = {}) => {
  return request({
    method: "get",
    ...options,
  });
};
const post = (options = {}) => {
  return request({
    method: "post",
    url: options.url,
    data: options.params,
  });
};

export default {
  get,
  post,
};
