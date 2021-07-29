<template>
  <div class="layout-container">
    <a-layout>
      <!-- 头部 -->
      <a-layout-header class="header">
        <page-header></page-header>
      </a-layout-header>
      <a-layout>
        <!-- 左侧 -->
        <a-layout-sider width="300" class="sider">
          <page-material></page-material>
        </a-layout-sider>
        <!-- 中间 -->
        <a-layout>
          <page-main></page-main>
        </a-layout>
        <!-- 右侧 -->
        <a-layout-sider width="400" class="sider">
          <page-picker></page-picker>
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import PageHeader from "@com/header";
import PageMaterial from "@com/material";
import PageMain from "@com/main";
import PagePicker from "@com/picker";
export default {
  components: {
    PageHeader,
    PageMaterial,
    PageMain,
    PagePicker,
  },
  data() {
    return {
      collapsed: true,
    };
  },
  created() {},
  mounted() {
    console.log(2);
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.ant-layout-header {
  height: 80px;
  background-color: #fff;
}
.layout-container {
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.2);
}
.ant-layout {
  height: calc(100vh - 80px);
}
.header {
  border-bottom: 1px solid #eee;
}
.ant-layout-sider {
  background-color: #fff;
}
</style>
