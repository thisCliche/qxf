<template>
  <div class="feedback">
    <!-- 导航区域 -->
    <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
      border
        v-model="message"
        :autosize="{minHeight:100}"
        type="textarea"
        maxlength="400"
        placeholder="请填写10个字以上问题描述"
        show-word-limit
      />
      <van-button color="#d53c3e" block type="info" native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      message: '',
    };
  },

  components: {},
  computed: {},
  methods: {
    onClickLeft() {},
    onSubmit() {
      // console.log(this.message)
      if(this.message.length < 10) return this.$toast({message: '请输入正确内容！',position: 'bottom'})
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.feedback {
  height: 100%;
  // background: #f5f5f5;
  .van-nav-bar {
    background: #d53c3e;
    /deep/ .van-icon {
      color: #fff;
    }
    /deep/ .van-nav-bar__text {
      color: #fff;
    }
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
  .van-form{padding: .42rem .24rem 0;
    .van-button{margin-top: .95rem;}
  }
}
</style>