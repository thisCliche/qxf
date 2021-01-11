<template>
  <div class="order">
    <!-- 导航区域 -->
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />
    <div class="middle warpper" ref="wrapper">
      <div class="content">
        <div class="OrderList">
          <div class="top">
            <van-image
              width="1.66rem"
              height="1.66rem"
              fit="cover"
              radius="10"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="titleWrap">
              <p class="title van-multi-ellipsis--l3">转发《关于组织开展2020年国家级和省级智慧健康养老应用试点示范申报的通知》</p>
              <p class="quantity">x1</p>
            </div>
          </div>
          <van-row class="priceWrap">
            <van-col offset="10" span="14"><span class="num">共1件商品</span><span class="totalPrice">合计￥6000</span></van-col>
          </van-row>
          <van-row class="btnWrap">
            <van-col span="24">
              <span class="btn">删除订单</span>
              <span class="btn">评价</span>
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
    return {};
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
.order {
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
      .OrderList{padding: .2rem;background: #fff;margin-top: .22rem;border-radius: .06rem;
        .top{display: flex;justify-content: space-between;
          .van-image{flex-shrink: 0;}
          .titleWrap{flex-shrink: 1;
            .title{color: #414141;font-size: .28rem;line-height: .4rem;margin-left: .12rem;}
            .quantity{font-size: .24rem; color: #666;text-align: right;}
          }
        }
        .priceWrap{text-align: right;margin: .3rem 0 .4rem;
          .num{font-size: .28rem;margin-right: .2rem;color: #414141;}
          .totalPrice{font-size: .28rem;color: #d53c3e;}
        }
        .btnWrap{text-align: right;margin-bottom: .14rem;
          .btn{margin-left: .3rem;display: inline-block;height: .55rem;padding: 0 .36rem;line-height: .57rem;border: 1px solid #999999;border-radius: .30rem;}
        }
      }
    }
  }
}
</style>