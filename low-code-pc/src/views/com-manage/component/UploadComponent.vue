<template>
  <a-modal
    class="upload-comp-modal"
    v-model="visible"
    title="上传组件"
    @ok="onSubmit"
    @cancel="onCancel"
    width="70%"
  >
    <a-form-model
      ref="ruleForm"
      :rules="rules"
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item
        ref="name"
        label="组件名称"
        placeholder="请输入组件名称"
        prop="name"
      >
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="组件类别" prop="type">
        <a-select v-model="form.type" placeholder="请选择组件类型">
          <a-select-option
            v-for="(item, index) in categoryList"
            :key="item._id"
            :value="item._id"
            >{{ item.name }}</a-select-option
          >
        </a-select>
      </a-form-model-item>
      <a-form-model-item ref="imgUrl" label="组件缩略图" prop="imgUrl">
        <a-upload
          name="img"
          accept=".png,.jpg"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          :customRequest="customRequest"
          :before-upload="beforeImgUpload"
        >
          <img
            class="upload-preview-img"
            v-if="form.imgUrl"
            :src="form.imgUrl | fixUrl"
            alt="upload-img"
          />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-form-model-item>
      <a-form-model-item ref="compFile" label="组件文件" prop="compFile">
        <a-upload
          name="file"
          :customRequest="customRequest"
          :showUploadList="false"
          accept=".js"
          @change="handleFileChange"
        >
          <a-button> <a-icon type="upload" /> Click to Upload File </a-button>
        </a-upload>
        <a :href="form.compFile | fixUrl" target="_blank">{{
          form.compFile | fixUrl
        }}</a>
      </a-form-model-item>
      <a-form-model-item label="组件描述" prop="desc">
        <a-textarea v-model="form.desc" placeholder="组件相关描述" :rows="4" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import * as API from "@/apis";

export default {
  data() {
    return {
      visible: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        name: "",
        type: "",
        imgUrl: "",
        compFile: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入组件名称",
            trigger: "blur",
          },
        ],
        type: [
          {
            required: true,
            message: "请选择组件类型",
            trigger: "change",
          },
        ],
        imgUrl: [
          {
            required: true,
            message: "请上传组件缩略图",
            trigger: "change",
          },
        ],
        compFile: [
          {
            required: true,
            message: "请上传组件文件",
            trigger: "change",
          },
        ],
      },
      loading: false,
      categoryList: [],
      imageUrl: "",
    };
  },
  props: ["show"],
  watch: {
    show: {
      handler(val) {
        this.visible = val;
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    this.handleCompCategory();
  },
  mounted() {},
  methods: {
    // 自定义的上传请求
    customRequest(info) {
      const { file, filename } = info;
      // 组装数据
      const formData = new FormData();
      formData.append("file", file);
      // 发送请求
      API.uploadFile(formData).then((res) => {
        if (filename == "img") {
          this.form.imgUrl = `${res.data}`;
          this.loading = false;
          this.$refs.imgUrl.onFieldChange();
        } else {
          this.form.compFile = `${res.data}`;
          this.$refs.compFile.onFieldChange();
        }
      });
    },

    handleFileChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },

    beforeImgUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },

    async handleCompCategory() {
      let res = await API.compCategory();
      console.log("%c res ------> ", "color:#0f0;", res);
      let { data } = res;
      this.categoryList = data;
      // console.log('%c variable ------> ', 'color:#0f0;', variable)
    },

    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.handleSubmitComp();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onCancel() {
      this.$emit("update:show", false);
      this.resetForm();
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },

    handleSubmitComp() {
      const {
        name,
        type,
        imgUrl: thumbnail,
        compFile: fileUrl,
        desc,
      } = this.form;
      API.submitComp({
        name,
        type,
        fileUrl,
        thumbnail,
        desc,
      }).then((res) => {
        this.$emit("update:success", false);
        this.onCancel();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.upload-comp-modal {
  .upload-preview-img {
    width: 102px;
    height: 102px;
  }
}
</style>
