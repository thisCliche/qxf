<template>
  <div class="videoColumn">
    <van-nav-bar title="猜你喜欢" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style lang="less" scoped>
@import "../../assets/less/constant.less";

</style>