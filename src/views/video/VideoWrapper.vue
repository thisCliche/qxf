<template>
  <div class="videoWrapper">
    <keep-alive include="videopage,videocolumn">
      <router-view />
    </keep-alive>
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
  mounted() {},
}
</script>

<style lang="less" scoped>
.videoWrapper{height: 100%;}
</style>