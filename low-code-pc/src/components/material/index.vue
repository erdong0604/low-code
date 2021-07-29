<template>
  <div class="material-container">
    <div class="material-header">组件选择区域</div>
    <a-tabs default-active-key="1" tab-position="left">
      <a-tab-pane v-for="item in typeItems" :key="item._id" :tab="item.name">
        <div class="material-components">
          <div
            class="component-box"
            v-for="com in item.component"
            :key="com._id"
            draggable="true"
            @drag="onDrag"
            @dragstart="(e) => onDragstart(e, com)"
            @dragend="onDragend"
          >
            <img :src="com.thumbnail | fixUrl" alt="" />
            <h2>{{ com.name }}</h2>
            <p>{{ com.desc }}</p>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import * as API from "@/apis";
import Drag from "@/helper/drag";

export default {
  data() {
    return {
      typeItems: [],
      curComponentItems: [],
    };
  },
  created() {
    this.getCompType();
  },
  mounted() {},
  methods: {
    getCompType() {
      API.compCategory({
        hasComp: true,
      })
        .then((res) => {
          this.typeItems = res.data;
        })
        .catch(console.log);
    },
    onDrag(e) {
      Drag.onDrag(e);
    },
    onDragstart(...reset) {
      Drag.onDragstart(...reset);
    },
    onDragend(e) {
      Drag.onDragend(e);
    },
  },
};
</script>
<style lang="scss" scoped>
.material-container {
  background: #fff;
}
.material-header {
  width: 100%;
  height: 60px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.component-box {
  width: 100%;
  margin: 20px 0;
  cursor: pointer;
  position: relative;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: move;
  }
  img {
    width: 100%;
  }
  h2 {
    font-size: 14px;
    color: #333;
    font-weight: 500;
    text-align: center;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
}
.component-box:hover {
  border: 1px solid blue;
}
</style>
