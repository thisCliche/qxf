<template>
  <div class="homeList">
    <van-nav-bar title="视频" :border="false" fixed></van-nav-bar>
    <div class="container">
      <div style="padding-top:0.16rem;">
        <!-- banner区域 -->
      <div class="bannerWrapper">
        <van-swipe indicator-color="#d53c3e" :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="videoClumn">
        <!-- 猜你喜欢 -->
        <div class="guess">
          <div class="title">
            <p>猜你喜欢</p>
            <router-link to="/videocolumn?type=guess" style="display: flex;align-items: center;">全部 <van-icon name="arrow" /></router-link>
          </div>
          <van-row class="guessRow" type="flex" gutter="15">
            <van-col class="van-col" v-for="item in test" :key="item"  @click="toCon(item)">
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
              <div class="bottom">
                <span class="iconfont icon-jiageqian"></span><span> 69.90</span>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 精品课程 -->
        <div class="Boutique">
          <div class="title">
            <p>精品课程</p>
            <router-link to="/videocolumn?type=boutique" style="display: flex;align-items: center;">全部 <van-icon name="arrow" /></router-link>
          </div>
          <van-row
            class="van-hairline--surround"
            type="flex"
            gutter="15"
            style="flex-wrap:wrap;"
            justify="space-between"
          >
            <van-col class="van-col" span="12" v-for="item in test" :key="item" @click="toCon(item)">
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
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "videopage",
  data() {
    return {
      // tab数据
      active: 0,
      test: [1, 2, 3, 4, 5],
      scrollHeightRecord: [],
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
    toCon(item) {
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
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/less/video.less";
</style>
