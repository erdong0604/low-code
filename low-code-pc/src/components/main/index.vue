<template>
  <div class="main-container">
    <div
      class="show-iframe-container"
      ref="pageIframeParent"
      :class="{ active: isDragBump }"
    >
      <iframe :src="iframeSrc" frameborder="0" ref="pageIframe"></iframe>
    </div>
  </div>
</template>

<script>
import Drag from "@/helper/drag";
import eventBus from "@/helper/eventBus";
import CusPostMessage from "@/helper/message";
export default {
  data() {
    return {
      iframeSrc: "http://192.168.46.40:8890",
      isDragBump: false,
    };
  },
  mounted() {
    // ant layout布局使用了动态计算，需要延迟初始化拖拽
    setTimeout(() => {
      Drag.initDrag({
        iframe: this.$refs.pageIframe,
      });
    }, 500);
    CusPostMessage.init(this.$refs.pageIframe);
    eventBus.$on("ondrag", (e) => {
      this.isDragBump = e;
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.main-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.show-iframe-container {
  width: 375px;
  height: 667px;
  background: #fff;
  // border: 2px solid #fff;
  margin-left: 30px;
  position: relative;
  &.active {
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(230, 247, 255, 0.6);
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
