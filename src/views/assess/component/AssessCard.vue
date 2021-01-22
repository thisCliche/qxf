<template>
  <div class="assessCard">
    <div class="first">
      <van-image
        width="0.96rem"
        height="0.96rem"
        fit="cover"
        round
        :src="assessDis.url"
      />
      <p class="van-ellipsis">{{assessDis.name}}</p>
      <van-button @click="toCon()"  round size="mini" color="#d43d3d">评估</van-button>
    </div>
    <div class="second">
      <p v-for="item of advantage" :key="item.icon"><van-icon class="iconfont" class-prefix="icon" :name="item.icon" color="#d43d3d" />{{item.describe}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssessCard",
  data() {
    return {};
  },
  props:{
    assessDis:{
      type: Object,
    }
  },
  components: {},
  computed: {
    advantage() {
      return JSON.parse(this.assessDis.font)
    }
  },
  methods: {
    toCon() {
      this.$emit('goTosynopsis',this.assessDis)
    },
  },
  created() {},
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.assessCard{
  margin-top: .2rem;
  background: #fff;
  width: 100%;
  border-radius: .1rem;
  .first{
    padding: .24rem .26rem;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      flex: 1;
      font-size: .32rem;
      margin-left: .2rem;
    }
    .van-button{
      padding: 0 .3rem;
    }
  }
  .second{
    display: flex;
    padding: .26rem;
    justify-content: space-between;
    p{
      color: #d43d3d;
      .iconfont{
        margin-right: .1rem;
      }
    }
  }
}
</style>
