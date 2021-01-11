<template>
 <div class="colle">
    <!-- 导航区域 -->
    <van-nav-bar
      title="我的收藏"
      left-arrow
      @click-left="onClickLeft"
    />
  <div class="middle warpper" ref="wrapper"> 
      <div class="content">
          <div class="colleList" v-for="(item, idx) in test" :key="idx">
            <p class="title van-multi-ellipsis--l2">转发《关于组织开展2020年国家级和省级智慧健康养老应用试点示范申报的通知》</p>
            <div class="bottom">
              <span>合肥市经开区</span>
              <span>2020-7-22</span>
            </div>
          </div>
      </div>
  </div>
 </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: '',
  data () {
    return {
      test: [0,1,2,3,4,5,6,7,8]
    }
  },

  components: {},
  computed: {},
  methods: {
    onClickLeft() {

    }
  },
  created() {},
  mounted() {
    new BScroll(this.$refs.wrapper,{click: true})
  },
}
</script>

<style lang="less" scoped>
.colle{
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
  .middle{
    position: absolute;
    top: .72rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .content{padding: .24rem;}
  }
  .colleList{background: #fff;padding: .2rem;border-radius: .06rem;margin-top: .22rem;
    .title{font-size: .28rem;line-height: .4rem;}
    .bottom{display: flex;justify-content: space-between;font-size: .22rem;color: #ababab;margin: .28rem 0 .04rem;}
  }
}
</style>