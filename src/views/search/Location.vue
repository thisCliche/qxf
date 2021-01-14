<template>
  <div class="location">
    <!-- 头部导航 -->
    <van-nav-bar :border="false" fixed title="区域选择" @click-left="$router.go(-1)">
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
          @click="changeDistrict(item.id,item.name)"
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
       <van-cell v-if="!ifCity">
      <template #title>
        当前定位地区：<strong>{{areaName}}</strong>
  </template>
    </van-cell>
      <van-collapse-item v-else name="1" value="选择县区">
        <template #title>
          当前定位城市：<strong>{{areaName}}</strong>
        </template>
        <template #default>
          <van-row type="flex" gutter="5">
            <van-col v-for="item of district" :key="item.criId"> 
              <van-button @click="changeDistrict(item.criCode,item.criName)">{{item.criName}}</van-button>
            </van-col>
          </van-row>
        </template>
      </van-collapse-item>
      <van-collapse-item title="切换省级地域" value="选择省级" name="2">
        <van-row type="flex" gutter="5">
          <van-col v-for="item of areaList.province" :key="item.id">
            <van-button @click="changeDistrict(item.id,item.name)">{{ item.name }}</van-button>
          </van-col>
        </van-row>
      </van-collapse-item>
    </van-collapse>
    <!-- 最近访问 -->
    <div class="recentVisit">
      <p class="title">最近访问</p>
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
      </van-row>
    </div>
    <!-- 城市选择 -->
    <div class="listContent">
      <van-index-bar :index-list="indexList" highlight-color="#d53c3e">
        <template v-for="(item, key) of areaList.cities">
          <van-index-anchor :index="key" :key="key" />
          <van-cell
            v-for="innerItem of item"
            :key="innerItem.id"
            :title="innerItem.name"
            @click="changeDistrict(innerItem.id,innerItem.name)"
          />
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import {isInclude} from '@/api/utils.js'
import {getRegion,getJscodeOpen} from '@/api/request.js'
import Bscroll from "better-scroll";
import initReaList from "../../assets/js/area.js";
import CitySearch from "./components/Search.vue";
export default {
  name: "",
  data() {
    return {
      areaType: '',
      areaList: initReaList.cityInfo,
      district: [],
      searchList: [],
      keyword: false,
      hasNoData: false,
      activeName: "0",
      criCode: '',
      areaName: '',
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
  computed: {
    ifCity() {
      if(this.areaType == '2') return true
      else return false
    }
  },
  methods: {
    getSeaRes(res, status) {
      this.keyword = status;
      this.hasNoData = res.length == 0 ? true : false;
      this.searchList = res;
    },
    async getDistrict() {
      let res = await getRegion(this.criCode)
      if(res.data.code != '200') return this.$toast({ message: "行政区获取失败！", position: "bottom" });
      this.district = res.data.data
    },
    async changeDistrict(code,name) {
      let res = await getJscodeOpen(code)
      if(res.data.code != '200') return this.$toast({ message: "选取失败！", position: "bottom" });
      if(res.data.data == 'false') return this.$dialog.alert({title:'提示',message:'当前地区暂未开通，请选择其他地区!'})
      localStorage.setItem('areaName', name)
      localStorage.setItem('criCode', code)
      this.$router.go(-1)
    }
  },
  created() {},
  mounted() {
    this.criCode = localStorage.getItem('criCode')
    this.areaName = localStorage.getItem('areaName')
    console.log(this.criCode)
    this.areaType = isInclude(this.criCode)
    console.log(isInclude(this.criCode))
    if(this.areaType == '2') this.getDistrict()
    new Bscroll(this.$refs.search, {
      click: true,
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/less/location.less";
</style>
