<template>
  <div
    class="img-warp"
    :style="{
      justifyContent: propsData.align,
    }"
  >
    <img
      :src="propsData.src || settings['src']['default']"
      :style="{
        width: propsData.width + 'px',
        height: propsData.height + 'px',
      }"
    />
  </div>
</template>

<script>
import settings from "./../settings";
const settingsDefault = {};
Object.keys(settings).forEach((key) => {
  settingsDefault[key] = settings[key]["default"];
});
console.log(settingsDefault);
export default {
  name: "CusImage",
  data() {
    return {
      settings,
    };
  },
  props: {
    width: {
      default: 100,
    },
    propsData: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { ...settingsDefault };
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      if (this.propsData.isJump) {
        location.href = this.propsData.jumpUrl;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.img-warp {
  width: 100%;
  display: flex;
}
</style>
