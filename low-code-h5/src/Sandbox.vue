<template>
  <div id="app">
    <draggable
      v-model="devComponentItems"
      animation="500"
      :scroll="false"
      @end="onEnd"
    >
      <div
        class="component-wrapper"
        v-for="(item, index) in devComponentItems"
        :key="index"
        @mouseover="onMouseOver(index)"
        @mouseout="onMouseOut(index)"
        :class="{ active: item.isActive }"
      >
        <component :is="item.name" :propsData="item.setting"></component>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import CusImage from "@/components/CusImage";
import { draggableComEnd } from "engine/utils/draggable";
export default {
  components: {
    draggable,
    CusImage,
  },
  data() {
    return {};
  },
  computed: {
    devComponentItems: {
      get() {
        const _arr = this.$store.state.devComponentItems;
        _arr.forEach((c) => {
          this.$set(c, "isActive", false);
        });
        return this.$store.state.devComponentItems;
      },
      set() {},
    },
  },
  watch: {
    devComponentItems: {
      deep: true,
      immediate: true,
      handler(val) {},
    },
  },
  created() {},
  methods: {
    onEnd(evt) {
      draggableComEnd(evt.oldIndex, evt.newIndex);
    },
    onMouseOver(index) {
      this.devComponentItems.forEach((c) => {
        c.isActive = false;
      });
      this.devComponentItems[index].isActive = true;
    },
    onMouseOut(index) {
      this.devComponentItems.forEach((c) => {
        c.isActive = false;
      });
    },
  },
};
</script>
<style lang="scss">
.component-wrapper {
  box-sizing: border-box;
  &.active {
    border: 2px solid blue;
  }
}
</style>
