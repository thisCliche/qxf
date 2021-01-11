<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar :border="false" fixed title="区域选择" @click-left="cancel">
      <template #left>
        <van-icon class-prefix="icon" class="iconfont" name="guanbi"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 搜索框 -->
    <city-search :cities="areaList.cities" @searchRes="getSeaRes"></city-search>
    <!-- 搜索结果展示 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item van-hairline--bottom"
          v-for="(item, idx) of searchList"
          :key="idx"
        >
          {{ item.name }}
        </li>
        <li class="search-item van-hairline--bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
    <!-- 省区选择 -->
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item name="1" value="选择县区">
        <template #title>
          当前定位城市：<strong>合肥</strong>
        </template>
        <template #default>
          <van-row type="flex" gutter="5">
            <van-col>
              <van-button>肥西县</van-button>
            </van-col>
            <van-col>
              <van-button>庐江县</van-button>
            </van-col>
            <van-col>
              <van-button>长丰县</van-button>
            </van-col>
            <van-col>
              <van-button>肥东县</van-button>
            </van-col>
            <van-col>
              <van-button>巢湖市</van-button>
            </van-col>
            <van-col>
              <van-button>瑶海区</van-button>
            </van-col>
            <van-col>
              <van-button>包河区</van-button>
            </van-col>
            <van-col>
              <van-button>庐阳区</van-button>
            </van-col>
            <van-col>
              <van-button>蜀山区</van-button>
            </van-col>
          </van-row>
        </template>
      </van-collapse-item>
      <van-collapse-item title="可切换省级地域" name="2">
        <van-row type="flex" gutter="5">
          <van-col v-for="item of areaList.province" :key="item.id">
            <van-button>{{ item.name }}</van-button>
          </van-col>
        </van-row>
      </van-collapse-item>
    </van-collapse>
    <!-- 最近访问 -->
    
    <!-- 城市选择 -->
    <div class="listContent">
      <van-index-bar :index-list="indexList" highlight-color="#d53c3e">
        <template v-for="(item, key) of areaList.cities">
          <van-index-anchor :index="key" :key="key" />
          <van-cell
            v-for="innerItem of item"
            :key="innerItem.id"
            :title="innerItem.name"
          />
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import initReaList from "../../assets/js/area.js";
import CitySearch from "./components/Search.vue";
export default {
  name: "",
  data() {
    return {
      areaList: initReaList.cityInfo,
      searchList: [],
      keyword: false,
      hasNoData: false,
      activeName: "1",
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  components: {
    CitySearch,
  },
  computed: {},
  methods: {
    cancel() {},
    getSeaRes(res, status) {
      this.keyword = status;
      this.hasNoData = res.length == 0 ? true : false;
      this.searchList = res;
    },
  },
  created() {},
  mounted() {
    new Bscroll(this.$refs.search, {
      click: true,
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/less/constant.less";
.van-nav-bar {
  background: @mainColor;
  color: #fff;
  height: 0.88rem;
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
.city-search {
  position: fixed;
  top: 0.88rem;
  left: 0;
  right: 0;
  z-index: 999;
}
.search-content {
  overflow: hidden;
  position: absolute;
  z-index: 1000;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eeeeee;
  .search-item {
    padding: 0.1rem .2rem;
    line-height: 0.62rem;
    background: #fff;
    color: #666;
  }
}
.van-collapse {
  margin-top: 1.6rem;
  /deep/ .van-collapse-item__content {
    background: #f2f2f2;
  }
  .van-row {
    flex-wrap: wrap;
    .van-col {
      margin: 0.05rem 0;
    }
  }
}
.van-index-bar {
  overflow: hidden;
  /deep/ .van-index-anchor--sticky {
    top: 1.6rem;
  }
  /deep/ .van-index-bar__sidebar {
    top: 7.58rem;
  }
}
</style>
