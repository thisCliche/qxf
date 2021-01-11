<template>
  <div class="changepwd">
    <!-- 导航区域 -->
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit" validate-first @failed="onFailed">
      <van-field
        v-model="form.oldpwd"
        type="password"
        name="handlerCheckOld"
        placeholder="旧密码"
        :rules="[{required: true, message: '请输入旧密码'},{ validator: handlerCheckOld, message: '请输入6-18位' }]"
      >
        <template #left-icon>
          <van-icon class-prefix="iconfont icon-mima"></van-icon>
        </template>
      </van-field>
      <van-field
        v-model="form.newpwd"
        type="password"
        name="newpwd"
        placeholder="新密码"
        :rules="[{ required: true, message: '请输入新密码' },{ validator: handlerCheckOld, message: '请输入6-18位' }]"
      >
        <template #left-icon>
          <van-icon class-prefix="iconfont icon-mima"></van-icon>
        </template>
      </van-field>
      <van-field
        v-model="form.renewpwd"
        type="password"
        name="renewpwd"
        placeholder="重复新密码"
        :rules="[{ required: true, message: '请重复输入新密码' },{ validator: handlerCheckOld, message: '请输入6-18位' }]"
      >
        <template #left-icon>
          <van-icon class-prefix="iconfont icon-mima1" style="font-size:0.40rem"></van-icon>
        </template>
      </van-field>
      <div class="btn">
        <van-button color="#d43d3d" block type="info" native-type="submit">完成</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      form: {
        oldpwd: '',
        newpwd: '',
        renewpwd: ''
      },
    };
  },

  components: {},
  computed: {},
  methods: {
    //验证函数
    handlerCheckOld(val) {
      if(val.length<6 || val.length>18) return false
      return true
    },
    // 提交按钮
    onSubmit() {
      console.log(1)
    },
    //校验不通过函数
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
    //返回按钮
    onClickLeft() {},

  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.changepwd {
  height: 100%;
  background: #f5f5f5;
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
  .van-field{margin-top: .2rem;}
  .btn{margin: .8rem .24rem;}
  // .van-button{margin-top: .8rem;}
}
</style>