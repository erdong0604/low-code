<template>
  <div
    class="button-wrap"
    :style="{
      justifyContent: propsData.align,
    }"
  >
    <button
      :style="{
        width: propsData.width + 'px',
        height: propsData.height + 'px',
        justifyContent: propsData.align,
        background: propsData.background,
        borderRadius: propsData.borderRadius + 'px',
        color: propsData.fontColor,
        fontWeight: propsData.fontWeight,
      }"
      @click="handleClick"
    >
      {{ propsData.fontText }}
    </button>
  </div>
</template>

<script>
import settings from "./../settings";
const settingsDefault = {};
Object.keys(settings).forEach((key) => {
  settingsDefault[key] = settings[key]["default"];
});
export default {
  name: "CusButton",
  settings,
  data() {
    return {};
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
.button-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  button {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
  }
}
</style>
