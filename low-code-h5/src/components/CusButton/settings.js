export default {
  width: {
    default: "200",
    label: "宽度",
    type: "numberInput",
    require: true,
    placeholder: "请输入图片宽度",
  },

  height: {
    default: "40",
    label: "高度",
    type: "numberInput",
    require: true,
    placeholder: "请输入图片高度",
  },
  background: {
    default: "#ff0000",
    label: "背景颜色",
    type: "colorPicker",
  },
  borderRadius: {
    default: "100",
    label: "圆角",
    type: "numberInput",
    require: true,
    placeholder: "请输入图片高度",
  },
  fontText: {
    default: "这是一个按钮",
    label: "字体颜色",
    type: "textInput",
    require: true,
    placeholder: "请输入按钮文字",
  },
  fontColor: {
    default: "#ffffff",
    label: "字体颜色",
    type: "colorPicker",
  },
  fontWeight: {
    default: "normal",
    label: "高度",
    type: "boldPicker",
  },
  align: {
    default: "center",
    label: "对齐方式",
    type: "align",
    require: true,
  },
  isJump: {
    default: false,
    label: "是否跳转",
    type: "switch",
    require: true,
  },
  jumpUrl: {
    default: "",
    label: "跳转地址",
    type: "input",
    require: false,
    placeholder: "请输入跳转地址",
  },
};
