<template>
  <div class="setting">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="账号绑定" is-link to="my">
        <!-- 使用 icon 插槽来自定义左侧图标 -->
        <template #icon>
          <van-icon class-prefix="iconfont icon-guanlian" />
        </template>
      </van-cell>
      <van-cell title="修改密码" is-link to="my">
        <template #icon>
          <van-icon class-prefix="iconfont icon-mima" />
        </template>
      </van-cell>
      <van-cell title="关于APP" is-link to="my">
        <template #icon>
          <van-icon class-prefix="iconfont icon-guanyu" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-button type="default">退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
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
.setting {
  height: 100%;
  background: #f5f5f5;
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
  .van-cell{padding: 20px 16px;
    .iconfont{font-size: .42rem;margin-right: .2rem;}
    /deep/ .van-cell__title{font-size: .32rem;color: #000;}
  }
  .van-button{width: 100%;margin-top: 1.28rem;
    /deep/ .van-button__text{color: #d53c3e;}
  }
}
</style>