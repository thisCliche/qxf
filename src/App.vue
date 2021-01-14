<template>
  <div id="app" >
    <!-- :style="{height: bodyHeight + 'px'}" -->
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bodyHeight: ''
    }
  },
  mounted() {
    this.bodyHeight = document.documentElement.clientHeight
  }
}
</script>
<style lang="less">

</style>
