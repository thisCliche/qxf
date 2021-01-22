<template>
  <div class="assess">
    <van-nav-bar title="评估" :border="false" fixed left-arrow @left-click="$router.go(-1)"></van-nav-bar>
    <div class="contanier" ref="contanier">
      <div>
        <assess-card :assessDis="item" v-for="item of assessList" :key="item.id" @goTosynopsis="goTosynopsis"></assess-card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {getMyAssessmentList} from '@/api/request.js'
import Bscroll from "better-scroll";
import AssessCard from './component/AssessCard'
export default {
  name: '',
  data () {
    return {
      query: {
        page: 1,
        size:10
      },
      assessList: []
    }
  },

  components: {
    AssessCard
  },
  computed: {},
  methods: {
    ...mapMutations(['changeassesssynopsis']),
    goTosynopsis(item) {
      this.changeassesssynopsis(item)
      this.$router.push('/assesssynopsis')
    },
    async getMyAssessmentList() {
      let res = await getMyAssessmentList(this.$qs.stringify(this.query));
      if(res.data.code != '200') return this.$toast({ message: "评估列表失败！", position: "bottom" });
      this.assessList = res.data.data.records
    }
  },
  created() {},
  mounted() {
    this.getMyAssessmentList()
    new Bscroll(this.$refs.contanier, {
      click: true,
    });
  },
}
</script>

<style lang="less" scoped>
.assess{
  height: 100%;
  padding: 1.12rem 0 0.6rem;
  background: #f0f0f0;
  .contanier{
  padding: .0 .24rem;
  
  height: 100%;
}
}
</style>