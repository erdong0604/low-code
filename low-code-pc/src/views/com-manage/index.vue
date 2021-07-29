<template>
  <div class="component-manage-container">
    <a-page-header title="组件列表">
      <a-button type="primary" @click="handleUpload"> 新增组件 </a-button>
    </a-page-header>
    <a-table :data-source="componentItems" rowKey="_id" bordered>
      <a-table-column key="name" title="组件名称" data-index="name" />
      <a-table-column key="fileUrl" title="文件地址" data-index="fileUrl">
        <template slot-scope="fileUrl">
          <a>{{ fileUrl | fixUrl }}</a>
        </template>
      </a-table-column>
      <!-- <a-table-column key="settings" title="属性" data-index="settings" /> -->
      <a-table-column key="thumbnail" title="组件缩略图" data-index="thumbnail">
        <template slot-scope="thumbnail">
          <img class="com-thumbnail" :src="thumbnail | fixUrl" alt="" />
        </template>
      </a-table-column>
      <a-table-column key="operation" title="操作" data-index="operation">
        <template slot-scope="text, record">
          <a-button type="primary"> 修改 </a-button>
        </template>
      </a-table-column>
    </a-table>
    <!-- 上传组件弹窗 -->
    <upload-component :show.sync="isShowUpload"></upload-component>
  </div>
</template>

<script>
import UploadComponent from "./component/UploadComponent";
import { compList } from "@/apis";
export default {
  components: {
    UploadComponent,
  },
  data() {
    return {
      componentItems: [],
      isShowUpload: false,
    };
  },
  created() {
    this.getCompList();
  },
  methods: {
    handleUpload() {
      this.isShowUpload = true;
    },
    getCompList() {
      compList()
        .then((res) => {
          console.log(res);
          this.componentItems = res.data;
        })
        .catch(console.log);
    },
  },
};
</script>
<style lang="scss" scoped>
.component-manage-container {
  padding: 30px;
}
.com-thumbnail {
  width: 60px;
}
</style>
