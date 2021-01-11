<template>
  <div class="notice">
    <!-- 导航区域 -->
    <van-nav-bar title="消息通知" left-arrow @click-left="onClickLeft" />
    <div class="middle warpper" ref="wrapper">
      <div class="content">
        <div class="OrderList">
          <h5 class="van-hairline--bottom">系统升级公告</h5>
          <div class="contant">
            <p>尊敬的客户:目前我公司正对系统进行优化，优化期间可能出现APP、WEB、WAP等办理渠道登陆业务查办不稳性请及时联系我们。
</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {},
  computed: {},
  methods: {
    onClickLeft() {

    }
  },
  created() {},
  mounted() {new BScroll(this.$refs.wrapper, { click: true });},
}
</script>

<style lang="less" scoped>
.notice {
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
  .middle {
    position: absolute;
    top: 0.72rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .content {
      padding: 0.24rem;
      .OrderList{
        background: #fff;padding: 0 .2rem;margin-top: .2rem;border-radius: .1rem;
        h5{line-height: .86rem;font-size: .32rem;color: #333333;}
        .contant{padding: .24rem 0;
          p{font-size: .26rem;color: #333333;line-height: .4rem;}
        }
      }
    }
  }
}
</style>