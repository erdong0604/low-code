export const loadComponentByScript = (src, name) => {
  return new Promise((resolve, reject) => {
    // 如果加载过,则直接读取
    if (window[name.toLocaleUpperCase()]) {
      resolve(window[name.toLocaleUpperCase()]);
      return;
    }
    const scriptDom = document.createElement("script");
    const head = document.querySelector("head");
    scriptDom.src = src;
    scriptDom.onload = () => {
      resolve(window[name.toLocaleUpperCase()]);
    };
    head.appendChild(scriptDom);
  });
};
