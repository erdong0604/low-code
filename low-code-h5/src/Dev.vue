<template>
  <div id="app">
    <component
      :is="item"
      v-for="item in devComponentItems"
      :key="item"
    ></component>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import CusImage from "@/components/CusImage";
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
        return this.$store.state.devComponentItems;
      },
      set() {},
    },
  },
  methods: {},
};
</script>
<style lang="scss"></style>
