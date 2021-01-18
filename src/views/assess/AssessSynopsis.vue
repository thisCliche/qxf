<template>
  <div class="assesssynopsis">
    <van-nav-bar
      title="高新技术企业认定（国家级）"
      :border="false"
      fixed
      left-arrow
      @left-click="$router.go(-1)"
    ></van-nav-bar>
    <div class="container">
      <div class="card">
        <div class="line">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="time"
            color="#d43d3d"
          />
          <p><strong>申报时间：</strong>每年<i>2</i>次<i>4月</i>/<i>8月</i></p>
        </div>
        <div class="line">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="qian"
            color="#d43d3d"
          />
          <p><strong>补助资金：</strong>每年<i>2</i>次<i>4月</i>/<i>8月</i></p>
        </div>
        <div class="line">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="rongyu"
            color="#d43d3d"
          />
          <p>
            <strong>荣誉资质：</strong
            >获得国家级高企荣誉资质，提高影响力便于市场扩张
          </p>
        </div>
        <div class="button">
          <van-button round color="#d43d3d">查看更多详细资料</van-button>
        </div>
      </div>
      <div class="card">
        <div class="title">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="lianjie"
            color="#d43d3d"
          />相关链接：
          </div>
          <div class="content">
            <p class="van-multi-ellipsis--l2">1.关于组织开展合肥高新区2020年度高新技术企业认定工作的通知</p>
            <p class="van-multi-ellipsis--l2">2.关于组织开展合肥高新区2020年度高新技术企业认定工作的通知</p>
            <p class="van-multi-ellipsis--l2">3.关于组织开展合肥高新区2020年度高新技术企业认定工作的通知</p>
            <p class="van-multi-ellipsis--l2">4.关于组织开展合肥高新区2020年度高新技术企业认定工作的通知认定工度高新技术企业认定工作的通知认定工作的通知</p>
          </div>
        
        
      </div>
    </div>
    <div class="pf">
      <p>智能算法极速帮你判断企业符合率，快来评估吧</p>
    <van-button color="#d43d3d">
      <template #default>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          name="renzhengpinggu"
          color="#fff"
        />立即评估
      </template>
    </van-button>
    </div>
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
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.assesssynopsis {
  background: #f0f0f0;
  height: 100%;
  .container {
    padding: 0.88rem 0.24rem 0;
    .card {
      margin-top: 0.24rem;
      width: 100%;
      background: #fff;
      border-radius: 0.1rem;
      padding: 0.24rem;
      .button {
        padding: 0.3rem 0;
        text-align: center;
        .van-button{
          padding: 0 .6rem;
        }
      }
      .line {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .iconfont {
          margin-right: 0.2rem;
          margin-top: 0.18rem;
        }
        p {
          line-height: 0.4rem;
          font-size: 0.28rem;
          padding: 0.14rem 0;
          border-bottom: 1px solid #f0f0f0;
          i {
            color: #d43d3d;
          }
        }
      }

      .title{
        font-size: .3rem;
        color: #d43d3d;
        font-weight: 700;
        .iconfont{
          font-size: .3rem;
          margin-right: .1rem;
        }
      }
      .content{
        padding: .2rem 0 0 .4rem;
        p{
          font-size: .26rem;
          color: #2177e2;
          text-decoration: underline;
          line-height: .44rem;
          margin: .04rem 0;
        }
      }
    }
  }
  .pf{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    p{color: #9a9a9a;font-size: .24rem;margin-bottom: .24rem;}
    .van-button{width: 100%;
    
    /deep/ .van-button__text{
      display: flex;
      align-items: center;
      }
      .iconfont{font-size: .3rem;margin-right: .1rem;}
    
    }
  }
}
</style>
