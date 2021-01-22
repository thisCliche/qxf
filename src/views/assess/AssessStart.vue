<template>
  <div class="assessstart">
    <van-overlay :show="show">
  <div class="wrapper" >
    <van-loading size="24px" vertical>正在评估...</van-loading>
  </div>
</van-overlay>
    <van-nav-bar
      title="企业评估"
      :border="false"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div class="container">
      <div class="top">
        <div class="circle"></div>
        <p style="font-size:0.4rem;padding-top:.6rem;line-height:0.8rem;">当前评分<i style="font-size:0.54rem;color:#d53c3e;">{{reportInfo.total_score}}</i>分</p>
        <p style="font-size:0.4rem;">请填写以下<i style="color:#d53c3e;">题目</i>完善评估</p>
      </div>
      <div class="circleWrapper">
        <van-circle
        v-model="currentRate"
        :rate="reportInfo.total_score"
        :speed="80"
        layer-color="#e0e0e0"
        size="158"
        :stroke-width="80"
        :color="gradientColor"
      >
        <template #default>
          <p style="line-height:0.4rem;margin-top:1.2rem;color:#5f5f5f;"><i style="font-size:0.82rem;color:#333;">{{reportInfo.total_score}}</i>分</br>评估得分</p>
        </template>
      </van-circle>
      </div>
      <div class="button" >
        <van-button @click="$router.push(`/assesstest/?id=${reportInfo.id}`)" color="#d53c3e" round style="padding:0 2rem;">开始答题</van-button>
      </div>
    </div>
     
  </div>
</template>

<script>
import { mapState } from "vuex";
import { createMyAssessment } from "@/api/request.js";
export default {
  name: "",
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        "0%": "#34aae7",
        "50%": "#d486f9",
        "100%": "#885ffb",
      },
      show: true,
      reportInfo: {
        total_score: "_",
        id: "",
      },
      query: {
        assessmentTypeId: "",
        orderId: "",
      },
    };
  },

  components: {},
  computed: {
    ...mapState(["assesssynopsis"]),
  },
  methods: {
    async createMyAssessment() {
      try {
        let res = await createMyAssessment(this.$qs.stringify(this.query));
        if (res.data.code != "200")
          return this.$toast({ message: "评估失败！", position: "bottom" });
        this.reportInfo = res.data.data;
        this.show = false;
      } catch (e) {
        this.$toast({ message: "网络连接错误", position: "bottom" });
      }
    },
  },
  created() {},
  mounted() {
    this.query.assessmentTypeId = this.assesssynopsis.id;
    this.createMyAssessment();
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.92rem 0 0;
  text-align: center;
  .top {
    height: 3.38rem;
    width: 100%;
    background: transparent;
    position: relative;
    overflow: hidden;
    .circle {
      width: 1000px;
      height: 1000px;
      border-radius: 50%;
      position: absolute;
      background: #f4f4f4;
      left: 50%;
      bottom: 0.2rem;
      z-index: -1;
      margin-left: -500px;
      box-shadow: 0px 6px 8px 0px #e4e4e4;
    }
    p {
      width: 100%;
      text-align: center;
    }
  }
  .circleWrapper {
    margin-top: 1rem;
  }
  .button {
    position: absolute;
    bottom: 2.8rem;
    text-align: center;
    left: 0;
    right: 0;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
