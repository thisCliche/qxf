<template>
  <div class="assesspolicy">
    <van-nav-bar
      title="高新技术企业认定（国家级）"
      :border="false"
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div class="content">
      {{assesssynopsis.details}}
    </div>
    <div class="pf">
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
import { mapState } from "vuex";
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {},
  computed: {...mapState(["assesssynopsis"]),},
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
.assesspolicy{
  .content{padding: .88rem .24rem;}
  .pf{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    .van-button{width: 100%;
    /deep/ .van-button__text{
      display: flex;
      align-items: center;
      }
      .iconfont{font-size: .3rem;margin-right: .1rem;}
    
    }
  }
}
</style>