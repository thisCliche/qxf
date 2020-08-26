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
      <van-tab v-for="(item, idx) in tableName" :title="item.name" :key="idx">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- 每一行 -->
            <van-row class="van-hairline--surround" type="flex" v-for="item in test" :key="item" justify="space-between">
              <van-col span="16" @dblclick.native="wjc">
                <p class="title van-ellipsis">安徽省合肥市庐阳区人力资源和社会保障局</p>
                <p class="description van-multi-ellipsis--l2">安徽省2020年度就业困难人员社保保险补贴（高校毕业生就业见习补贴）申</p>
                <div class="bottom">
                  <span>
                    <span class="iconfont icon-yanjing"></span>408阅读
                  </span>
                  <span>
                    <span class="iconfont icon-rili"></span>2020-07-07
                  </span>
                </div>
              </van-col>
              <van-col span="7">
                <van-image
                  src="http://img.xiaojiayun.top/2020/03/3503899455.jpg"
                  fit="cover"
                  radius="10"
                  height="75"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover"></div>
                  </template>
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>

            <van-row class="van-hairline--top" type="flex" justify="space-between">
              <van-col span="16">
                <p class="title van-ellipsis">安徽省合肥市庐阳区人力资源和社会保障局</p>
                <p class="description van-multi-ellipsis--l2">2020年度就业困难人员社保保险补贴（高校毕业生就业见习补贴）申</p>
                <div class="bottom">
                  <span>
                    <span class="iconfont icon-yanjing"></span>408阅读
                  </span>
                  <span>
                    <span class="iconfont icon-rili"></span>2020-07-07
                  </span>
                </div>
              </van-col>
              <van-col span="7">
                <van-image
                  src="http://img.xiaojiayun.top/2020/04/1691296065.jpg"
                  fit="cover"
                  radius="10"
                  height="75"
                >
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
            
          </van-list>
        </van-pull-refresh>
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
      test:[1,2,3,4,5,6],
      tableName: [
        { name: "政策" },
        { name: "申报" },
        { name: "公示" },
        { name: "培训" },
        { name: "汇编" },
        { name: "简报" },
        { name: "评估" },
      ],
      // 列表数据
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
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
  methods: {
    //滚动到底部会触发的事件
    onLoad() {
      setTimeout(() => {
        // 判断是否由下拉刷新所激活的
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        //增加数据代码
        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1);
        }
        //数据更新完毕后将loading改为false
        this.loading = false;
        //数据全部加载完毕后 finished 改为true
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    // 下拉刷新事件
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    wjc() {
      this.$toast('你好啊');
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "../assets/less/constant.less";
.homeList {
  padding: 0 0.24rem;
  position: relative;
  .van-swipe {
    border-radius: 0.2rem;
    top: .98rem;
    .van-swipe-item {
      img {
        width: 100%;
        height: 2.6rem;
      }
    }
  }
  .van-tabs {
    z-index: 99;
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
      margin-top: 0.98rem;
    }
    .van-image {
      width: 100%;
      /deep/ .cover {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: #000 url(../assets/player.png) center no-repeat;
        background-size: 0.72rem 0.72rem;
        opacity: .4;
      }
    }
    
  }
  
  .van-row {
    padding: 0.3rem 0;
  }
  .title {
    color: #797979;
    font-size: 0.26rem;
    margin-bottom: 0.16rem;
  }
  .description {
    font-size: 0.28rem;
    color: #414141;
    line-height: 0.38rem;
    margin-bottom: 0.08rem;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    span {
      color: #8c8c8c;
      font-size: 0.18rem;
      &.iconfont {
        margin-right: 0.06rem;
      }
    }
  }
}
</style>