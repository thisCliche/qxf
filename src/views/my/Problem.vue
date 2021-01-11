<template>
  <div class="problem">
    <!-- 导航区域 -->
    <van-nav-bar title="常见问题" left-arrow @click-left="onClickLeft" />
    <div class="middle warpper" ref="wrapper">
      <div class="content">
        <div class="OrderList">
          <h5 class="van-hairline--bottom">申报奖金说明？</h5>
          <div class="contant">
            <p>◎ 申报奖金是企先锋平台推出的，针对企业政策申报的优惠补贴，可以通过他人推荐注册、以及活动获取。
          <p>◎ 在企先锋平台对接上对应服务机构，企业只需上传合作合同，所申报项目在相关机构官网公示之后，可获得企先锋奖励对应券面值额度现金。</p>
          <p>◎ 申报奖金规则最终解释权归企先锋运营公司所有，奖励由本公司提供，与苹果官网无关。</p>
          </div>
        </div>
        <div class="OrderList">
          <h5 class="van-hairline--bottom">企先锋软件是做什么的？</h5>
          <div class="contant">
            <p>企先锋实时同步各政府机构扶持政策资讯，帮助企业了解政策；申报评估系统能一键帮助企业判断可以申报哪些扶持政策，同时对接专业服务机构，高效完成申报，获得国家补助资金。</p>
          </div>
        </div>
        <div class="OrderList">
          <h5 class="van-hairline--bottom">软件如何使用？</h5>
          <div class="contant">
            <p>1、首页浏览政策，如有意向，点击政策详情，再点击“立即咨询”按钮，您可以提出你的疑问，和咨询顾问在线沟通。</p>
            <p>2、申报评估：点击申报评估，选择意向项目，点击立即评估，即可完成评估，选择立即申报即可完成对接。</p>
          </div>
        </div>
        <div class="OrderList">
          <h5 class="van-hairline--bottom">客服联系方式？</h5>
          <div class="contant">
            <p>企业QQ：2881032337</p>
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
.problem {
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