<template>
  <div class="reserve">
    <!-- 导航区域 -->
    <van-nav-bar title="我的预约" left-arrow @click-left="onClickLeft" />
    <div class="middle warpper" ref="wrapper">
      <div class="content">
        <div class="reserveList" v-for="(item, idx) in test" :key="idx">
          <div class="top van-hairline--bottom">
            <p class="top_l">
              <span class="iconfont icon-rili"></span>
              <span>2020-07-30</span>
            </p>
            <p class="top_r">未观看</p>
          </div>
          <van-row>
            <van-col span="10"><van-image
              width="2.52rem"
              height="1.71rem"
              fit="cover"
              radius="10"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            /></van-col>
            <van-col span="14">
              <div class="titleWrap">
              <p class="title van-ellipsis">转发《关于组织开展2020年国家级和省级智慧健康养老应用试点示范申报的通知》</p>
              <p class="discri van-multi-ellipsis--l2">李建老师为学员深度解析MVVC架构，不同维度展现如何高效理解学习代码编写。</p>
              <p class="quantity"><span class="quantity_l">免费</span><span class="quantity_r">214人已报名</span></p>
            </div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "",
  data() {
    return {
      test: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  },

  components: {},
  computed: {},
  methods: {
    onClickLeft() {},
  },
  created() {},
  mounted() {
    new BScroll(this.$refs.wrapper, { click: true });
  },
};
</script>

<style lang="less" scoped>
.reserve {
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
    }
  }
  .reserveList {
    background: #fff;
    padding: 0.2rem;
    border-radius: 0.06rem;
    margin-top: 0.22rem;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: .12rem;
      .top_l {
        span {
          color: #333333;
          font-size: 0.28rem;
          margin-right: 0.14rem;
        }
      }
      .top_r {
        line-height: 0.53rem;
        background: #d53c3e;
        padding: 0 0.2rem;
        border-radius: 0.26rem;
        font-size: 0.28rem;
        color: #fff;
      }
    }
    .van-row{
      margin-top: .32rem;
      .titleWrap{flex-shrink: 1;
            .title{color: #414141;font-size: .28rem;line-height: .4rem;}
            .discri{color: #909090;font-size: .24rem;line-height: .36rem;}
            .quantity{font-size: .24rem;display: flex;justify-content: space-between;margin-top: .22rem;
                  .quantity_l{color: #d53c3e;}
                  .quantity_r{color: #909090;}
            }
          }
    }
  }
}
</style>