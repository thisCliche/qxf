<template>
  <div class="assesstest">
    <van-nav-bar
      title="评估题目"
      :border="false"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="titleNumber"
    >
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <div class="container">
      <div class="top">
        <div class="circle"></div>
      </div>
      <div class="subject">
        <p style="font-size:0.32rem;text-align:center;margin-bottom:0.26rem;">
          <i style="color:#d53c3e;">{{questionInfo.index}}</i>/{{questionTotal}}
        </p>
        <h3 style="font-size:0.32rem;margin-bottom:0.2rem;line-height: 0.44rem;">
          {{questionInfo.question}}
        </h3>
        <p style="font-size:0.28rem;color:#8e8e8e;line-height:0.36rem;">
          <!-- （注：1，数量来说，年平均数以前是5项以上，现在是6项以上，三年的话是18项。2，同一科技成果分别在国内外转化的，或转化为多个产品、服务、工艺、样品、样机等的，只计为一项。） -->
        </p>
      </div>
      <div class="answer">
        <van-radio-group v-model="radio">
          <van-radio v-for="item of questionInfo.options" :name="item.id" checked-color="#d53c3e" :key="item.id">{{item.vaule}}</van-radio>
        </van-radio-group>
        <div class="button">
          <van-button v-if="questionInfo.index != 1" color="#d53c3e" round @click="prevQuestion">上一题</van-button>
          <van-button v-if="questionInfo.index != 10" color="#d53c3e" round @click="nextQuestion">下一题</van-button>
          <van-button v-if="questionInfo.index == 10" color="#d53c3e" round @click="submitQuestion">完成</van-button>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="right" round :style="{height:'100%',width:'70%'}">
      <p style="padding:0.3rem .2rem;color:rgb(146 146 146);font-size:0.24rem;">温馨提示</p>
      <p style="padding:0rem .2rem;color:rgb(64 64 64);font-size:0.28rem;line-height:0.4rem;">您还有 {{noAnswer}} 道题未作答，未标颜色的题目表示未作答，蓝色为已答。</p>
      <van-row style="padding: .3rem .2rem;flex-wrap:wrap;" type="flex" >
        <van-col style="margin-bottom:.3rem;" span="4" v-for="item of questionList" :key="item.id"><van-tag @click="changeNumber(item.id)" plain :type="item.chose == 0 ? 'default' : 'primary'" size="large">{{item.question_index}}</van-tag></van-col>
      </van-row>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {getMyQuestionList,getMyQuestion,submitMyAnswer} from '@/api/request.js'
export default {
  name: "",
  data() {
    return {
      radio: "",
      show:false,
      reportId: '',
      // 未答的题目
      noAnswer: '',
      questionList: [],
      questionQuery:{
        assessmentId: '',
        assessmentTypeId: '',
        id: ''
      },
      questionInfo:{},
      from:{
        answerId: '',
        assessmentId: '',
        questionId: '', 
      }
    };
  },
  components: {},
  computed: {
    ...mapState(["assesssynopsis"]),
    questionTotal() {
      return this.questionList.length 
    } 
  },
  methods: {
    prevQuestion() {
      this.questionQuery.id = this.questionInfo.index-1
      this.getMyQuestion()
    },
    nextQuestion() {
      if(this.radio != 'null'){
        this.from.answerId = this.radio;
        this.from.questionId = this.questionQuery.id
        submitMyAnswer(this.$qs.stringify(this.from)).then(res=>{
          if(res.data.code != '200') return this.$toast({ message: "问题提交失败！", position: "bottom" });
        })
      }
      this.questionQuery.id = this.questionInfo.nextQuestion
      this.getMyQuestion()
    },
    submitQuestion() {
      if(this.radio != 'null'){
        this.from.answerId = this.radio;
        this.from.questionId = this.questionQuery.id
        submitMyAnswer(this.$qs.stringify(this.from)).then(res=>{
          if(res.data.code != '200') return this.$toast({ message: "问题提交失败！", position: "bottom" });
        })
      }
      this.$router.push(`/assessreport?id=${this.reportId}`)
    },
    async titleNumber() {
      this.show = true;
      let res = await getMyQuestionList(this.reportId)
      if(res.data.code != '200') return this.$toast({ message: "评估问题列表失败！", position: "bottom" });
      let num = 0;
      res.data.data.forEach(item=>{
        if(item.chose == 0) num++
      })
      this.noAnswer = num
      this.questionList = res.data.data
    },
    changeNumber(number) {
      this.show = false;
      this.questionQuery.id = number
      this.getMyQuestion()
    },
    async getMyQuestionList() {
      let res = await getMyQuestionList(this.reportId)
      if(res.data.code != '200') return this.$toast({ message: "评估问题列表失败！", position: "bottom" });
      this.questionList = res.data.data

      this.questionQuery.id = this.questionList[0].id
      this.getMyQuestion()
    },
    async getMyQuestion() {
      let res = await getMyQuestion(this.$qs.stringify(this.questionQuery))
      if(res.data.code != '200') return this.$toast({ message: "问题获取失败！", position: "bottom" });
      if(res.data.data.choesAnser) this.radio = res.data.data.choesAnser
      this.questionInfo = res.data.data
    }
  },
  created() {},
  mounted() {
    this.questionQuery.assessmentTypeId = this.assesssynopsis.id;
    this.from.assessmentId = this.$route.query.id
    this.questionQuery.assessmentId = this.$route.query.id
    this.reportId = this.$route.query.id
    this.getMyQuestionList()
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/less/constant.less";
div.container {
  padding-top: 0.84rem;
  .top {
    height: 2.98rem;
    width: 100%;
    overflow: hidden;
    background: transparent;
    position: relative;
    .circle {
      width: 1000px;
      height: 1000px;
      border-radius: 50%;
      position: absolute;
      background: @mainColor;
      left: 50%;
      bottom: 0rem;
      z-index: -1;
      margin-left: -500px;
    }
  }
  .subject {
    background: #fff;
    border-radius: 0.1rem;
    padding: 0.46rem;
    position: relative;
    margin: -1.88rem .24rem 0;
    box-shadow: 0px 6px 8px 0px #e4e4e4;
  }
  .answer {
    padding: 0.88rem 0.24rem 0;
    .van-radio {
      margin: 0.3rem 0;
    }
    .button {
      display: flex;
      margin-top: 1rem;
      justify-content: space-around;
      .van-button {
        padding: 0 0.8rem;
      }
    }
  }
  .tagList{
    justify-content: space-around;
  }
}
</style>
