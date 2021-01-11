<template>
  <div class="homeList">
    <!-- header区域 -->
    <div class="header">
      <div class="header-left">
        <van-image round width="0.6rem" height="0.6rem" src="https://img.yzcdn.cn/vant/cat.jpeg"></van-image>
      </div>
      <div class="header-input"><van-icon class-prefix="icon" class="iconfont" name="sousuo" />高新技术企业</div>
      <router-link to="/city">
        <div class="header-right">合肥市高新区<van-icon class-prefix="icon" class="iconfont" name="jiantou" /></div>
      </router-link>
    </div>
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
      <van-tab title="政策">
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
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover"></div>
                  </template>
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 申报选项卡 -->
      <van-tab title="申报">
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
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover"></div>
                  </template>
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 公示选项卡 -->
      <van-tab title="公示">
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
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover"></div>
                  </template>
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 培训选项卡 -->
      <van-tab title="培训">
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
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover"></div>
                  </template>
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 汇编选项卡 -->
      <van-tab title="汇编" class="difference assembly">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- 每一行 -->
            <van-row class="van-hairline--surround" v-for="item in test" :key="item">
              <van-image height="3.1rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <p class="asseTitle van-ellipsis">国家级、省级同时申报，市截止时间8月</p>
              <p class="asseDescri van-multi-ellipsis--l2">关于开展第四批智慧健康养老应用试点示范的通知</p>
              <p class="asseDate">2020-07-30</p>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 简报选项卡 -->
      <van-tab title="简报" class="difference briefing">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- 每一行 -->
            <van-row class="van-hairline--surround" type="flex" v-for="item in test" :key="item" justify="space-between">
              <van-col span="11" @dblclick.native="wjc">
                <van-image
                  src="http://img.xiaojiayun.top/2020/03/3503899455.jpg"
                  fit="cover"
                  height="3.1rem"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover">简报<br/>“第八期”</div>
                  </template>
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
              <van-col span="13">
                <p class="brieTit van-multi-ellipsis--l2">2019年湖南中小企业服务联盟会议召开</p>
                <p class="brieTit van-multi-ellipsis--l2">湖南省中小企业服务联盟创业创新分会2019年成员大会暨...</p>
                <p class="brieTit van-multi-ellipsis--l2">柳州市召开小微企业创业创新基地城市示范创建工作总结会</p>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 评估选项卡 -->
      <van-tab title="评估">
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
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover"></div>
                  </template>
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
@import "../../assets/less/constant.less";
.homeList {
  padding: 0 0.24rem;
  position: relative;
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: .88rem;
    display: flex;
    z-index: 999;
    background: @mainColor;
    padding: .14rem .24rem;
    align-items: center;
    .header-input{
      .iconfont{font-size: 24px;}
      margin: 0 .2rem;
      height: 100%;
      display: flex;
      flex: 1;
      padding: .18rem;
      align-items: center;
      border-radius: .3rem;
      line-height: .6rem;
      font-size: .24rem;
      color: #fff;
      background: rgba(255, 255, 255, 0.3);
    }
    .header-right{
      color: #fff;
    }
  }
  .van-swipe {
    border-radius: 0.2rem;
    top: 1.86rem;
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
      top: 0.88rem;
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
      .van-tab__pane{
        margin-top: 1.86rem;
      }
      .difference{
        margin-top: -1.62rem;
      }
      .assembly{
        .van-image{border-radius: .2rem 0.2rem 0 0;overflow: hidden;}
        .asseTitle{font-size: .35rem;line-height: .7rem;letter-spacing: .05rem;}
        .asseDescri{font-size: .32rem;color: #898989;line-height: .46rem;letter-spacing: 0.04rem;}
        .asseDate{font-size:.26rem;line-height: .46rem;color: #c4c4c4;text-align: right;}
        .van-row {
          padding: 0.38rem 0 0;
          &:first-child{padding: 0;}
        }
      }    
      .briefing{
        .van-row{padding: .2rem 0 0 0;
          .van-col--11{
            .van-image{border-radius: .2rem 0 0 .2rem;overflow: hidden;
              /deep/ .cover{
                background: none;
                // background: #000 url(../assets/workTrends.png) center no-repeat;
                // background-size: 1.29rem 1.29rem;
                background: #000;
                font-size: .32rem;
                line-height: .7rem;
                color: #fff;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
          .van-col--13{padding: 0 .2rem;
            .brieTit{font-size: .24rem;line-height: .35rem;padding: .17rem 0;border-bottom: 1px solid #edebeb;
              &:last-child{border-bottom: none;}
            }
          }
        }
      }  
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