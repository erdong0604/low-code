<template>
  <div class="test">
    <div class="box">
      <button draggable="true" @dragstart="onDragstart" @dragend="onDragend">
        拖拽我
      </button>
    </div>
    <div class="content"></div>
    <iframe
      src="http://192.168.46.40:8890"
      frameborder="0"
      ref="pageIframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    onDragstart() {
      console.log("begin drag");
    },
    onDragend() {
      console.log("end drag");
    },
    onDrop(e) {
      console.log(e);
    },
    onDragenter(e) {
      console.log(1);
      e.preventDefault();
      // console.log(e.target);
    },
    onDragleave(e) {
      console.log("onDragleave");
      e.preventDefault();
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 40%;
  top: 40%;
  border: 1px solid red;
  p {
    width: 100%;
    height: 100%;
  }
}
iframe {
  width: 375px;
  height: 667px;
}
</style>
