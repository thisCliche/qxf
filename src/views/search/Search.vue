<template>
  <div class="search">
    <div class="searchTop">
      <van-row class="searchColumn" type="flex">
      <div class="location van-ellipsis" @click="localSelect">合肥市高新区</div>
      <div style="flex:1;">
        <form action="/">
          <van-search
            v-model.trim="searchVal"
            show-action
            placeholder="请输入搜索关键词"
            shape="round"
            background="#d53c3e"
            @search="onSearch"
            @cancel="onCancel"
            @clear="onClear"
          />
        </form>
      </div>
    </van-row>
    <van-dropdown-menu z-index="999">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    </div>
    <div class="searchRes">
      <div class="noSearch" v-if="searchFlag">
          <div class="noSearchTit">
            热门搜索
          </div>
          <div class="noSearchBd">
            <van-tag v-for="(item, idx) in searchHot" @click="record(item)" :key="idx" color="#ffffff" text-color="#646464" type="primary" size="large">{{item}}</van-tag>
          </div>
          <div class="noSearchTit">
            历史搜索
          </div>
          <div class="noSearchBd">
            <van-tag v-for="(item, idx) in searchValHist" :key="idx" color="#ffffff"  @click="record(item)" text-color="#646464" type="primary" size="large">{{item}}</van-tag>
            <p class="clearHist" v-if="clearHistFlag" @click="handlerClearHist">清除搜索历史记录</p>
            <p class="clearHist" v-else>暂无搜索记录</p>
          </div>
      </div>
      <div class="hasSearch" v-else>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- 每一行 -->
            <van-row class="van-hairline--surround" type="flex" v-for="item in test" :key="item" justify="space-between">
              <van-col span="16" @dblclick.native="wjc">
                <p class="title van-ellipsis"><van-tag style="margin-right:0.1rem;" type="primary">标签</van-tag>安徽省合肥市庐阳区人力资源和社会保障局</p>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
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
      // 搜索结果显示与否
      searchFlag: true,
      // 输入搜索内容
      searchVal: "",
      // 从换从中取出的搜索内容
      searchValHist: [],
      // 热门搜索
      searchHot: ['企业技术中心', '创新型企业', '高新技术开发企业', '著名商标'],
      value1: 0,
      value2: 'a',
      value3: 'ab',
      option1: [
        { text: '所选区域', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
        { text: '全部商品', value: 3 },
        { text: '新款商品', value: 4 },
        { text: '活动商品', value: 5 },
        { text: '全部商品', value: 6 },
        { text: '新款商品', value: 7 },
        { text: '活动商品', value: 8 },
        { text: '新款商品', value: 9 },
        { text: '活动商品', value: 10 },
        { text: '全部商品', value: 13 },
        { text: '新款商品', value: 14 },
        { text: '活动商品', value: 15 },
        { text: '全部商品', value: 16 },
        { text: '新款商品', value: 17 },
        { text: '活动商品', value: 18 },
      ],
      option2: [
        { text: '发布机构', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      option3: [
        { text: '发布时间', value: 'ab' },
        { text: '好评排序', value: 'bb' },
        { text: '销量排序', value: 'cb' },
      ],
    };
  },

  components: {},
  computed: {
    clearHistFlag() {
      if(this.searchValHist.length) return true
      else false
    }
  },
  methods: {
    record(item) {
      this.searchVal = item
      this.searchFlag = false
    },
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
    localSelect() {
      this.$toast("选择地理位置");
    },
    onSearch(val) {
      if(val.length == 0) return this.$toast('请输入搜索内容');
      this.searchValHist.push(val)
      // 将历史搜索结果转为字符串存入 localStorage
      localStorage.setItem('searchValHist', JSON.stringify(this.searchValHist))
      this.searchFlag = false
    },
    onClear() {
      this.searchFlag = true
    },
    onCancel() {
      this.$toast("取消");
    },
    // 删除历史记录
    handlerClearHist() {
      console.log(1)
      this.searchValHist = []
      localStorage.setItem('searchValHist', JSON.stringify(this.searchValHist))
    }
  },
  created() {
    // 取出存储里的历史搜索记录并转为数组
    this.searchValHist = JSON.parse(localStorage.getItem('searchValHist')) || []
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@import '../../assets/less/constant.less';
.searchTop{position: fixed;top: 0;left:0;right:0;z-index: 999;}
.searchColumn{background: @mainColor;padding: 0 .16rem 0 0.24rem;
  .van-search {
  padding: 5px 0px;
  // /deep/ .van-icon-search {font-size: 18px;}
  /deep/ .van-cell{padding: 3px 8px 3px 0;}
  /deep/ .van-icon{color: @mainColor;}
  /deep/ .van-search__action{color: #fff;}
}
.van-search__action:active{background: none;}
.location{line-height: 44px; color: #fff;margin-right: .2rem;}
}

.searchRes{
  position: absolute;
    top: 1.88rem;
    z-index: 99;
  .noSearch{
    .noSearchTit{line-height: .9rem;background: #f5f5f5;padding: 0 .24rem;}
    .noSearchBd{padding: 0 .24rem;margin-bottom: .24rem;
      .van-tag{margin: .24rem 0 0 0;}
      .clearHist{color: #646464;text-align: center;margin-top: .4rem;}
    }
  }
  .hasSearch{
    padding: 0 .24rem;
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
}
</style>