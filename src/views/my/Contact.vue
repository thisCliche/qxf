<template>
  <div class="contact">
    <van-nav-bar title="联系我们" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="常见问题" is-link to="my">
        <!-- 使用 icon 插槽来自定义左侧图标 -->
        <template #icon>
          <van-icon class-prefix="iconfont icon-changjianwenti" />
        </template>
      </van-cell>
      <van-cell title="意见反馈" is-link to="my">
        <template #icon>
          <van-icon class-prefix="iconfont icon-ziyuan" />
        </template>
      </van-cell>
      <van-cell title="消息通知" is-link to="my">
        <template #icon>
          <van-icon class-prefix="iconfont icon-yijianfankui" />
        </template>
      </van-cell>
      <van-cell title="联系方式" is-link to="my">
        <template #icon>
          <van-icon class-prefix="iconfont icon-ermai" />
        </template>
      </van-cell>
    </van-cell-group>
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
.contact {
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
    .iconfont{font-size: .42rem;color: #d53c3e;margin-right: .2rem;}
    /deep/ .van-cell__title{font-size: .32rem;color: #000;}
  }
}
</style>