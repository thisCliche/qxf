<template>
  <div class="assessreport">
    <van-overlay :show="show">
  <div class="wrapper" >
    <van-loading size="24px" vertical>正在生成报告...</van-loading>
  </div>
</van-overlay>
<van-nav-bar
      title="评估报告"
      :border="false"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div class="container">
      <div class="top">
        <div class="circle"></div>
        <p style="font-size:0.4rem;padding-top:.6rem;line-height:0.8rem;">当前评分<i style="font-size:0.54rem;color:#d53c3e;">{{total}}</i>分</p>
        <p style="font-size:0.4rem;">建议您提升科技成果转化能力</p>
      </div>
     <div ref="chartDom" style="height:400px;"></div>
    </div>
  </div>
</template>

<script>
import {myAssessInfo} from '@/api/request.js'
import echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      chart: null,
      option: {},
      show:true,
      total: '',
      report: []
    };
  },
  components: {},
  computed: {
    result() {
      if(this.total>=75) return '建议您进行申报'
      else{
        let min = this.report[0].value;
        this.report.forEach(item=>{
          if(item.value<min) return `建议您提升${item.name}`
        })
        return `建议您提升${this.report[0].value}`
      }
    }
  },
  methods: {
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom);
      this.chart.setOption(this.option);
      this.show = false
    },
    async getOption() {
      let res = await myAssessInfo(this.$route.query.id)
      if(res.data.code != '200') return this.$toast({ message: "评估报告获取失败！", position: "bottom" });
      this.total = res.data.data.zongfen.value
      this.report = res.data.data.qita
      let base,legendate=[],sum=0;
      res.data.data.qita.forEach(item=>{
        legendate.push(item.name);
        sum+=item.value
      })
      base = (res.data.data.zongfen.value-sum);
      res.data.data.qita.push({name:'基础分',value:base})
      this.option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "auto",
          data: legendate,
        },
        series: [
          {
            name: "分数比例",
            type: "pie",
            radius: "55%",
            top:0,
            center: ["50%", "60%"],
            data: res.data.data.qita,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.renderChart()
    },
  },
  created() {},
  mounted() {
    this.getOption()
  },
};
</script>

<style lang="less" scoped>
.assessreport {
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
  
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
}
</style>