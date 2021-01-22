<template>
  <div class="detail">
    <div style="font-size:0.32rem;line-height:0.4rem;font-weight:700;text-align:center;" v-html="info.title"></div>
    <div style="overflow:hidden;margin:0.3rem 0 0.2rem;"><a class="source" :href="info.url">原文链接</a><p class="time">发布时间：{{time}}</p></div>
    <div style="line-height:0.4rem;" v-html="info.content"></div>
  </div>
</template>

<script>
import {getJspaPolicyInfo} from '@/api/request.js'
export default {
  name: '',
  data () {
    return {
      id:'',
      info:{}
    }
  },

  components: {},
  computed: {
    time() {
      if(this.info.handleTime) return this.info.handleTime.substring(0,10)
    }
  },
  methods: {
    async getContent() {
      let res = await getJspaPolicyInfo(this.id)
      if (res.data.code != "200") return this.$toast({ message: "新闻获取失败！", position: "bottom" });
      this.info = res.data.data
    }
  },
  created() {},
  mounted() {
    this.id = this.$route.params.id
    this.getContent()
  },
}
</script>

<style lang="less" scoped>
.detail{
  padding: .24rem;
  .source{
    float: left;
  }
.time{
  float: right;
  font-size: .26rem;
  color: rgb(156, 156, 156);
}
}

</style>