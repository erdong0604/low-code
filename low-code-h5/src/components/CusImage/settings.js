export default {
  src: {
    default: "https://web-data.zmlearn.com/image/vhZfCTJjPpKUHV2gTi447y/1.jpg",
    label: "图片地址",
    type: "input",
    require: true,
    placeholder: "请输入图片地址",
  },
  width: {
    default: "200",
    label: "宽度",
    type: "numberInput",
    require: true,
    placeholder: "请输入图片宽度",
  },
  height: {
    default: "200",
    label: "高度",
    type: "numberInput",
    require: true,
    placeholder: "请输入图片高度",
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
