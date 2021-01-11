<template>
  <div class="information">
    <!-- 导航区域 -->
    <van-nav-bar title="联系方式" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="客服热线" value="18905694335" />
      <van-cell title="客服QQ" value="2880505120" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      message: '',
    };
  },

  components: {},
  computed: {},
  methods: {
    onClickLeft() {},
    
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.information {
  height: 100%;
  .van-nav-bar {
    background: #d53c3e;
    /deep/ .van-icon {
      color: #fff;
    }
    /deep/ .van-nav-bar__text {
      color: #fff;
    }
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
  .van-cell{
    /deep/ .van-cell__value{color: #d53c3e;}
  }
}
</style>