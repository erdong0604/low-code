<template>
  <div class="header-container">
    <img class="logo" src="./../../assets/logo.png" alt="" />
    <div class="user">
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 60px;
  }
  .user {
    cursor: pointer;
  }
}
</style>
