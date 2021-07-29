class CusPostMessage {
  constructor() {
    this.childrenIframe = null;
    this.origin = "*";
  }
  init(iframe) {
    this.childrenIframe = iframe;
  }
  post(params) {
    this.childrenIframe.contentWindow.postMessage(
      {
        action: params.action,
        data: params.data,
      },
      this.origin
    );
  }
}

export default new CusPostMessage();
