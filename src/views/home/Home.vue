<template>
  <div class="homeList">
    <!-- 政策 -1 申报 0 公示 2 培训 1 -->
    <!-- header区域 -->
    <div class="header">
      <div class="header-left">
        <van-image
          round
          width="0.6rem"
          height="0.6rem"
          :src="avatarUrl"
        ></van-image>
      </div>
      <div @click="$router.push('/search')" class="header-input">
        <van-icon
          class-prefix="icon"
          class="iconfont"
          name="sousuo"
        />高新技术企业
      </div>
      <router-link to="/location">
        <div class="header-right">
          {{areaName}}<van-icon
            class-prefix="icon"
            class="iconfont"
            name="jiantou"
          />
        </div>
      </router-link>
    </div>
    <!-- banner区域 -->
    <div class="bannerWrapper">
      <van-swipe indicator-color="#d53c3e" :autoplay="3000">
        <van-swipe-item v-for="item in bannerList" :key="item.id">
          <img v-lazy="item.url" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- table区域 -->
    <van-tabs animated v-model="active" :before-change="beforeChange" @change="tabsChange">
      <!-- 政策选项卡 -->
      <van-tab title="政策" name="zcList">
        <!-- 列表区域 -->
        <van-skeleton style="padding-top:0.4rem;" v-if="isSkeleton" :row="14" />
        <van-pull-refresh v-model="typeStatues.zcList.refreshing" @refresh="onRefresh(-1)">
          <van-list
            :error.sync="typeStatues.zcList.error"
            error-text="请求失败，点击重新加载"
            :immediate-check="false"
            v-model="typeStatues.zcList.loading"
            :finished="typeStatues.zcList.finished"
            finished-text="没有更多了"
            @load="onLoad(-1, typeStatues.zcList.keepPage)"
          >
            <!-- 每一行 -->
            <van-row
              class="hairline--bottom van-clearfix"
              type="flex"
              v-for="item in zcList"
              :key="item.id"
              justify="space-between"
            >
              <van-col span="16">
                <p class="title van-ellipsis">
                  {{ item.orginName }}
                </p>
                <p
                  class="description van-multi-ellipsis--l2"
                  v-html="item.title"
                >
                  <!-- {{item.title}} -->
                </p>
                <div class="bottom">
                  <span>
                    <span class="iconfont icon-yanjing"></span
                    >{{ item.read_num }}阅读
                  </span>
                  <span>
                    <span class="iconfont icon-rili"></span
                    >{{ item.handle_time }}
                  </span>
                </div>
              </van-col>
              <van-col span="7">
                <van-image
                  :src="item.imgUrl"
                  fit="cover"
                  radius="10"
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <!-- <template v-slot:default>
                    <div class="cover"></div>
                  </template> -->
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 申报选项卡 -->
      <van-tab title="申报" name="sbList">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="typeStatues.sbList.refreshing" @refresh="onRefresh(0)">
          <van-list
            :error.sync="typeStatues.sbList.error"
            error-text="请求失败，点击重新加载"
            :immediate-check="false"
            v-model="typeStatues.sbList.loading"
            :finished="typeStatues.sbList.finished"
            finished-text="没有更多了"
            @load="onLoad(0, typeStatues.sbList.keepPage)"
          >
            <!-- 每一行 -->
            <van-row
              class="hairline--bottom  van-clearfix"
              type="flex"
              v-for="item in sbList"
              :key="item.id"
              justify="space-between"
            >
              <van-col span="16">
                <p class="title van-ellipsis">
                  {{ item.orginName }}
                </p>
                <p
                  class="description van-multi-ellipsis--l2"
                  v-html="item.title"
                ></p>
                <div class="bottom">
                  <span>
                    <span class="iconfont icon-yanjing"></span
                    >{{ item.read_num }}阅读
                  </span>
                  <span>
                    <span class="iconfont icon-rili"></span
                    >{{ item.handle_time }}
                  </span>
                </div>
              </van-col>
              <van-col span="7">
                <van-image
                  :src="item.imgUrl"
                  fit="cover"
                  radius="10"
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <!-- <template v-slot:default>
                    <div class="cover"></div>
                  </template> -->
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 公示选项卡 -->
      <van-tab title="公示" name="gsList">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="typeStatues.gsList.refreshing" @refresh="onRefresh(2)">
          <van-list
            :error.sync="typeStatues.gsList.error"
  error-text="请求失败，点击重新加载"
            :immediate-check="false"
            v-model="typeStatues.gsList.loading"
            :finished="typeStatues.gsList.finished"
            finished-text="没有更多了"
            @load="onLoad(2, typeStatues.gsList.keepPage)"
          >
            <!-- 每一行 -->
            <van-row
              class="hairline--bottom  van-clearfix"
              type="flex"
              v-for="item in gsList"
              :key="item.id"
              justify="space-between"
            >
              <van-col span="16">
                <p class="title van-ellipsis">
                  {{ item.orginName }}
                </p>
                <p
                  class="description van-multi-ellipsis--l2"
                  v-html="item.title"
                ></p>
                <div class="bottom">
                  <span>
                    <span class="iconfont icon-yanjing"></span
                    >{{ item.read_num }}阅读
                  </span>
                  <span>
                    <span class="iconfont icon-rili"></span
                    >{{ item.handle_time }}
                  </span>
                </div>
              </van-col>
              <van-col span="7">
                <van-image
                  :src="item.imgUrl"
                  fit="cover"
                  radius="10"
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <!-- <template v-slot:default>
                    <div class="cover"></div>
                  </template> -->
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 培训选项卡 -->
      <van-tab title="培训" name="pxList">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="typeStatues.pxList.refreshing" @refresh="onRefresh(1)">
          <van-list
          :error.sync="typeStatues.pxList.error"
  error-text="请求失败，点击重新加载"
            :immediate-check="false"
            v-model="typeStatues.pxList.loading"
            :finished="typeStatues.pxList.finished"
            finished-text="没有更多了"
            @load="onLoad(1, typeStatues.pxList.keepPage)"
          >
            <!-- 每一行 -->
            <van-row
              class="hairline--bottom  van-clearfix"
              type="flex"
              v-for="item in pxList"
              :key="item.id"
              justify="space-between"
            >
              <van-col span="16">
                <p class="title van-ellipsis">
                  {{ item.orginName }}
                </p>
                <p
                  class="description van-multi-ellipsis--l2"
                  v-html="item.title"
                ></p>
                <div class="bottom">
                  <span>
                    <span class="iconfont icon-yanjing"></span
                    >{{ item.read_num }}阅读
                  </span>
                  <span>
                    <span class="iconfont icon-rili"></span
                    >{{ item.handle_time }}
                  </span>
                </div>
              </van-col>
              <van-col span="7">
                <van-image
                  :src="item.imgUrl"
                  fit="cover"
                  radius="10"
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <!-- <template v-slot:default>
                    <div class="cover"></div>
                  </template> -->
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 剩下的代码在其他vue文件里 -->
    </van-tabs>
  </div>
</template>
<script>
import { getBanner, getNewsPhone, getpolicy, getUserAvatar } from "@/api/request.js";
export default {
  name: "Home",
  data() {
    return {
      areaName: '',
      // 占位加载
      isSkeleton: true,
      // 当前选项卡
      currentTab: ['zcList'],
      avatarUrl: '',
      // tab数据
      active: 'zcList',
      test: [1, 2, 3, 4, 5, 6],
      // 列表数据
      list: [],
      criCode: "",
      bannerList: [],
      zcList: [],
      sbList: [],
      gsList: [],
      pxList: [],
      typeStatues: {
        zcList: { loading: false, finished: false, refreshing: false, scrollHeight: 0, error: false,keepPage:2 },
        sbList: { loading: false, finished: false, refreshing: false, scrollHeight: 0, error: false,keepPage:2 },
        gsList: { loading: false, finished: false, refreshing: false, scrollHeight: 0, error: false,keepPage:2 },
        pxList: { loading: false, finished: false, refreshing: false, scrollHeight: 0, error: false,keepPage:2 },
      },
    };
  },
  components: {},
  computed: {
    newImgQuery() {
      let criCode = this.criCode;
      return { criCode, page: 1, size: 10 };
    },
    newListQuery() {
      let criCode = this.criCode;
      return {
        criCode,
        page: 1,
        size: 10,
        policyType: 0,
      };
    },
  },
  watch: {},
  methods: {
    //  切换后回到记录位置
    tabsChange(name,title) {
      let top = this.typeStatues[name].scrollHeight;
      window.scrollTo(0, top);
    },
    //  切换前记录当前位置
    beforeChange(name) {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      let currentTab = this.currentTab[this.currentTab.length-1];
      this.typeStatues[currentTab].scrollHeight = top;
      this.currentTab.push(name)
      return true
    },
    //滚动到底部会触发的事件
    async onLoad(type, page) {
      try {let newList = await this.baseGetPolicy(type, page);
      this.judgmentType(type).push(...newList);
      let classify = this.judgmentType2(type);
      this.typeStatues[this.judgmentType2(type)].keepPage += 1;
      this.typeStatues[this.judgmentType2(type)].loading = false;
      if (newList.length < 10) {
        this.typeStatues[this.judgmentType2(type)].loading = false;
        this.typeStatues[this.judgmentType2(type)].finished = true;
      }}catch(e) {
        this.typeStatues[this.judgmentType2(type)].error = true;
      }
    },
    // 下拉刷新事件
    onRefresh(type) {
      this.finished = false;
      this.typeStatues[this.judgmentType2(type)].loading = true;
      this.reGetPolicy(type);
    },
    // 判断类型
    judgmentType(type) {
      switch (type) {
        case -1:
          return this.zcList;
        case 0:
          return this.sbList;
        case 1:
          return this.pxList;
        default:
          return this.gsList;
      }
    },
    // 判断类型
    judgmentType2(type) {
      switch (type) {
        case -1:
          return "zcList";
        case 0:
          return "sbList";
        case 1:
          return "pxList";
        default:
          return "gsList";
      }
    },
    // 获取banner图 && 头像
    async getBanner() {
      let res = await getBanner(this.criCode);
      if (res.data.code != "200") return this.$toast({ message: "轮播图获取失败！", position: "bottom" });
      this.bannerList = res.data.data;
      let avatar = await getUserAvatar()
      if (avatar.data.code != "200") return this.$toast({ message: "头像获取失败！", position: "bottom" });
      this.avatarUrl = avatar.data.data;
    },
    //  获取新闻基础代码
    async baseGetPolicy(idx, page = 1) {
      let newListQuery = this.newListQuery;
      newListQuery.policyType = idx;
      newListQuery.page = page;
      let res = await getpolicy(this.$qs.stringify(newListQuery));
      if (res.data.code != "200")
        return this.$toast({ message: "新闻获取失败！", position: "bottom" });
      let imgRes = await getNewsPhone(this.$qs.stringify(this.newImgQuery));
      if (imgRes.data.code != "200")
        return this.$toast({ message: "新闻图获取失败！", position: "bottom" });
      res = res.data.data.records;
      imgRes = imgRes.data.data.records;
      res.forEach((item) => {
        item.handle_time = item.handle_time.substr(0, 10);
      });
      imgRes.forEach((item) => {
        item.imgUrl = item.url;
      });
      imgRes.length = res.length;
      let newList = imgRes.map((key, index) => {
        return { ...key, ...res[index] };
      });
      return newList;
    },
    //  刷新新闻列表
    async reGetPolicy(idx) {
      let newList = await this.baseGetPolicy(idx);
      this.judgmentType(idx).splice(0, this.judgmentType(idx).length);
      this.judgmentType(idx).push(...newList);
      this.typeStatues[this.judgmentType2(idx)].refreshing = false;
      this.typeStatues[this.judgmentType2(idx)].loading = false;
    },
    //  获取新闻列表
    async getPolicy(idx) {
      let newList = await this.baseGetPolicy(idx);
      this.judgmentType(idx).push(...newList);
      this.isSkeleton = false;
    },
    //  初次获取新闻列表
    async initGetPolicy() {
      for (let i = -1; i < 3; i++) {
        this.getPolicy(i);
      }
    },
  },
  created() {
    // 为了调试临时写的信息
    // let criCode = '320100' , token = '488b9faad488fcc05dd80a1287bc2b34', areaName = '南京市';
    // localStorage.setItem('areaName', areaName)
    // localStorage.setItem('criCode', criCode)
    // localStorage.setItem('token', token)

    this.criCode = localStorage.getItem('criCode')
    this.areaName = localStorage.getItem('areaName')
    this.getBanner();
    this.initGetPolicy();
  },
  // beforeRouteEnter(to, from, next) {
  //   if(from.path == '/location') {
  //     return next(vm=>{
  //       vm.criCode = localStorage.getItem('criCode')
  //     vm.areaName = localStorage.getItem('areaName')
  //     vm.getBanner();
  //     vm.initGetPolicy();
  //     })
  //   }
  //   next()
  // },
  activated() {
    let criCode = localStorage.getItem('criCode')
    if(this.criCode != criCode) {
      this.criCode = localStorage.getItem('criCode')
      this.areaName = localStorage.getItem('areaName')
      this.getBanner();
      this.initGetPolicy();
    }
  },
  mounted() {
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/less/home.less";
</style>
