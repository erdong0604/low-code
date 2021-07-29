import http from "@/helper/http";

console.log("%c http ------> ", "color:#0f0;", http);
export const submitRequest = (params = {}) => {
  return http.post({
    url: "/xxxx/xx",
    params,
  });
};

/**
 * 组件分类列表
 * @param {*} params
 * @returns
 */
export const compCategory = (params = {}) => {
  return http.get({
    url: "/componentType/list",
    params,
  });
};

/**
 * 上传文件或图片
 * @param {*} params
 * @returns
 */
export const uploadFile = (params = {}) => {
  return http.post({
    url: "/upload/file",
    params,
    headers: {
      // 传输文件流需要单独设置请求头
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * 提交 上传组件
 * @param {*} params
 * @returns
 */
export const submitComp = (params = {}) => {
  return http.post({
    url: "/component/upload",
    params,
  });
};

/**
 * 组件列表
 * @param {*} params
 * @returns
 */
export const compList = (params = {}) => {
  return http.get({
    url: "/component/list",
    params,
  });
};
