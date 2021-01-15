<template>
  <div class="homeList">
    <!-- banner区域 -->
    <div class="bannerWrapper">
      <van-swipe indicator-color="#d53c3e" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- table区域 -->
    <van-tabs v-model="active" swipeable>
      <!-- 政策选项卡 -->
      <van-tab title="政府会议">
        <div class="rowTitile">
          <span class="titile">会议直播</span>
          <router-link to="/">全部</router-link>
        </div>
        <!-- 列表区域 -->
        <van-list>
          <!-- 每一行 -->
          <van-row
            class="van-hairline--surround"
            type="flex"
            v-for="item in test"
            :key="item"
            justify="space-between"
          >
            <van-col span="10">
              <van-image
                src="http://img.xiaojiayun.top/2020/03/3503899455.jpg"
                fit="cover"
                radius="10"
                height="1.5rem"
              >
                <!-- 播放标识插槽 -->
                <template v-slot:default>
                  <div class="cover"></div>
                </template>
                <template v-slot:loading></template>
              </van-image>
            </van-col>
            <van-col span="13">
              <p class="ClumnTitle van-ellipsis">
                企业业绩长期不能突破的原因所在
              </p>
              <p class="description van-multi-ellipsis--l2">
                某某金牌老师为您解答，为你带来问题的答案
              </p>
              <div class="bottom">
                <span class="iconfont icon-jiageqian"></span><span> 69.90</span>
              </div>
            </van-col>
          </van-row>
        </van-list>
        <div class="rowTitile">
          <span class="titile">往期回顾</span>
          <router-link to="/">全部</router-link>
        </div>
        <!-- 列表区域 -->
        <van-list>
          <!-- 每一行 -->
          <van-row
            class="van-hairline--surround"
            type="flex"
            gutter="15"
            style="flex-wrap:wrap;"
            justify="space-between"
          >
            <van-col class="van-col1" span="12" v-for="item in test"
            :key="item">
              <van-image
                src="http://img.xiaojiayun.top/2020/03/3503899455.jpg"
                fit="cover"
                radius="10"
                height="1.5rem"
              >
                <!-- 播放标识插槽 -->
                <template v-slot:default>
                  <div class="cover1">58:35</div>
                </template>
                <template v-slot:loading></template>
              </van-image>
              <p class="ClumnTitle1 van-ellipsis">
                企业业绩长期不能突破的原因所在
              </p>
              <p class="description van-multi-ellipsis--l2">
                某某金牌老师为您解答，为你带来问题的答案
              </p>
              <div class="bottom">
                <span class="iconfont icon-jiageqian"></span><span> 69.90</span>
              </div>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
      <!-- 申报选项卡 -->
      <van-tab title="学习培训">
        <div class="rowTitile">
          <span class="titile">会议直播</span>
          <router-link to="/">全部</router-link>
        </div>
        <!-- 列表区域 -->
        <van-list>
          <!-- 每一行 -->
          <van-row
            class="van-hairline--surround"
            type="flex"
            v-for="item in test"
            :key="item"
            justify="space-between"
          >
            <van-col span="10">
              <van-image
                src="http://img.xiaojiayun.top/2020/03/3503899455.jpg"
                fit="cover"
                radius="10"
                height="1.5rem"
              >
                <!-- 播放标识插槽 -->
                <template v-slot:default>
                  <div class="cover"></div>
                </template>
                <template v-slot:loading></template>
              </van-image>
            </van-col>
            <van-col span="13">
              <p class="ClumnTitle van-ellipsis">
                企业业绩长期不能突破的原因所在
              </p>
              <p class="description van-multi-ellipsis--l2">
                某某金牌老师为您解答，为你带来问题的答案
              </p>
              <div class="bottom">
                <span class="iconfont icon-jiageqian"></span><span> 69.90</span>
              </div>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
      <!-- 公示选项卡 -->
      <van-tab title="企业学习">
        <div class="rowTitile">
          <span class="titile">会议直播</span>
          <router-link to="/">全部</router-link>
        </div>
        <!-- 列表区域 -->
        <van-list>
          <!-- 每一行 -->
          <van-row
            class="van-hairline--surround"
            type="flex"
            v-for="item in test"
            :key="item"
            justify="space-between"
          >
            <van-col span="10">
              <van-image
                src="http://img.xiaojiayun.top/2020/03/3503899455.jpg"
                fit="cover"
                radius="10"
                height="1.5rem"
              >
                <!-- 播放标识插槽 -->
                <template v-slot:default>
                  <div class="cover"></div>
                </template>
                <template v-slot:loading></template>
              </van-image>
            </van-col>
            <van-col span="13">
              <p class="ClumnTitle van-ellipsis">
                企业业绩长期不能突破的原因所在
              </p>
              <p class="description van-multi-ellipsis--l2">
                某某金牌老师为您解答，为你带来问题的答案
              </p>
              <div class="bottom">
                <span class="iconfont icon-jiageqian"></span><span> 69.90</span>
              </div>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      // tab数据
      active: 0,
      test: [1, 2, 3],
      images: [
        "http://img.xiaojiayun.top/2020/03/115753828.jpg",
        "http://img.xiaojiayun.top/2020/03/1270226805.jpg",
        "http://img.xiaojiayun.top/2020/03/128578367.png",
        "http://img.xiaojiayun.top/2020/03/1362501591.jpg",
      ],
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "../../assets/less/constant.less";
.homeList {
  padding: 0 0.24rem;
  position: relative;
  .van-swipe {
    border-radius: 0.2rem;
    top: 0.98rem;
    .van-swipe-item {
      img {
        width: 100%;
        height: 2.6rem;
      }
    }
  }
  .van-tabs {
    z-index: 99;
    .rowTitile {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.38rem;
      }
      a {
        color: #a0a0a0;
      }
    }
    .van-row {
      padding: 0.3rem 0;
      .van-col1{margin-bottom: .24rem;}
    }
    .van-image {
      width: 100%;
      /deep/ .cover {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: #000 url(../../assets/player.png) center no-repeat;
        background-size: 0.72rem 0.72rem;
        opacity: .4;
      }
      /deep/ .cover1{
        width: 95%;
        height: 100%;
        position: absolute;
        top: 0;
        background: #000;
        background-size: 0.72rem 0.72rem;
        opacity: .4;
        text-align: right;
        color: #fff;
        padding-right: .16rem;
        padding-top: .2rem;
      }
    }
    .ClumnTitle1{margin-top: .2rem;}
    .description {
      color: #a0a0a0;
      font-size: 0.24rem;
      line-height: 0.36rem;
      margin: 0.1rem 0;
    }
    .bottom {
      color: #d53c3e;
    }
    /deep/ .van-tabs__wrap {
      height: 0.78rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 999;
      box-shadow: 0px 0px 5px #c1c1c1;
      .van-tabs__nav {
        padding-left: 0;
        padding-right: 0;
        .van-tab {
          padding: 0;
          font-size: 0.3rem;
          color: @fontColor;
        }
        .van-tab--active {
          color: @mainColor;
        }
        .van-tabs__line {
          background-color: @mainColor;
          height: 0.04rem;
          border-radius: 0;
        }
      }
    }
    /deep/ .van-tabs__content {
      background: #fff;
      .van-tab__pane {
        margin-top: 1.28rem;
      }
      .difference {
        margin-top: -1.62rem;
      }
      .assembly {
        .van-image {
          border-radius: 0.2rem 0.2rem 0 0;
          overflow: hidden;
        }
        .asseTitle {
          font-size: 0.35rem;
          line-height: 0.7rem;
          letter-spacing: 0.05rem;
        }
        .asseDescri {
          font-size: 0.32rem;
          color: #898989;
          line-height: 0.46rem;
          letter-spacing: 0.04rem;
        }
        .asseDate {
          font-size: 0.26rem;
          line-height: 0.46rem;
          color: #c4c4c4;
          text-align: right;
        }
        .van-row {
          padding: 0.38rem 0 0;
          &:first-child {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
