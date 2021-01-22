<template>
  <div class="assesssynopsis">
    <van-nav-bar
      :title="assesssynopsis.name"
      :border="false"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div class="container">
      <div class="card">
        <div class="line" v-for="(item, idx) in font" :key="idx">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            :name="item.icon"
            color="#d43d3d"
          />
          <p>{{ item.describe }}</p>
        </div>
        <div class="button">
          <van-button round color="#d43d3d" @click="$router.push('/assesspolicy')">查看更多详细资料</van-button>
        </div>
      </div>
      <div class="card">
        <div class="title">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="lianjie"
            color="#d43d3d"
          />相关链接：
        </div>
        <div class="content">
          <p class="van-multi-ellipsis--l2" v-for="(item, idx) of releted" :key="item.id">
            {{idx+1}}.{{item.title}}
          </p>
        </div>
      </div>
    </div>
    <div class="pf">
      <p>智能算法极速帮你判断企业符合率，快来评估吧</p>
      <van-button color="#d43d3d" @click="$router.push('/assessstart')">
        <template #default>
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="renzhengpinggu"
            color="#fff"
          />立即评估
        </template>
      </van-button>
    </div>
  </div>
</template>

<script>
import { getJspaPolicy } from "@/api/request.js";
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      font: [],
      query: {
        Endtime: "",
        criCode: "",
        jspaId: "",
        page: 1,
        policyType: -1,
        size: 4,
        search: "",
        startTime: "",
      },
      releted:[],
    };
  },

  components: {},
  computed: {
    ...mapState(["assesssynopsis", "erea"]),
  },
  methods: {
    async getReleted() {
      let res = await getJspaPolicy(this.$qs.stringify(this.query))
      if(res.data.code != '200') this.$toast({ message: "相关链接失败！", position: "bottom" });
      this.releted = res.data.data.records;
    },
  },
  created() {},
  mounted() {
    this.font = JSON.parse(this.assesssynopsis.font);
    this.query.search = this.assesssynopsis.name;
    this.query.criCode = this.erea.code;
    this.getReleted()
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/less/assesssynopsis.less";
</style>
