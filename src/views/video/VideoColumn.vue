<template>
  <div class="videoColumn">
    <van-nav-bar
      :title="type"
      left-arrow
      fixed
      :border="false"
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-row
        class="van-hairline--surround"
        type="flex"
        gutter="15"
        style="flex-wrap:wrap;"
        justify="space-between"
      >
        <van-col
          class="van-col"
          span="12"
          v-for="item in test"
          :key="item"
          @click="tuCon(item)"
        >
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
  </div>
</template>

<script>
export default {
  name: "videocolumn",
  data() {
    return {
      test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      type: "",
      loading: false,
      finished: false,
      error: false,
      scrollHeightRecord: []
    };
  },

  components: {},
  computed: {},
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 11; i < 41; i++) {
          this.test.push(this.test.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.test.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    tuCon(item){
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollHeightRecord.push(top)
      this.$router.push(`/videocon/${item}`)
    }
  },
  activated() {
    if(this.scrollHeightRecord.length != 0) {
      let top = this.scrollHeightRecord[this.scrollHeightRecord.length-1];
      setTimeout(_=>{
        scrollTo(0, top);
      },100)
    }
  },
  created() {},
  mounted() {
    let type = this.$route.query.type;
    if (type == "guess") return (this.type = "猜你喜欢");
    else this.type = "精品视频";
  },
};
</script>

<style lang="less" scoped>
.van-list {
  padding: 0.88rem 0.24rem 0;
  .van-row {
    padding: 0.3rem 0;
    .van-col {
      margin-bottom: 0.24rem;
      .van-image {
        width: 100%;
        /deep/ .cover {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          background: #000 url(../../assets/player.png) center no-repeat;
          background-size: 0.72rem 0.72rem;
          opacity: 0.4;
        }
        /deep/ .cover1 {
          font-size: 0.22rem;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          background: #000;
          background-size: 0.72rem 0.72rem;
          opacity: 0.4;
          text-align: right;
          color: #fff;
          padding-right: 0.16rem;
          padding-top: 0.2rem;
        }
      }
      .ClumnTitle {
        margin: 0.2rem 0 0.1rem;
      }
      .description {
        color: #a0a0a0;
        font-size: 0.24rem;
        line-height: 0.36rem;
        margin-top: 0.1rem;
      }
      .bottom {
        color: #d53c3e;
      }
    }
  }
}
</style>
