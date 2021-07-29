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
export default {
  name: "CusImage",
  data() {
    return {
      settings,
    };
  },
  props: {
    propsData: {
      type: Object,
      default() {
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
