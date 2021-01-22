<template>
  <div id="app" >
    <!-- :style="{height: bodyHeight + 'px'}" -->
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import {  mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      bodyHeight: ''
    }
  },
  methods:{
  ...mapActions(['changeCity']),
  },
  mounted() {
    // this.changeCity({name:localStorage.getItem('areaName'),code:localStorage.getItem('criCode')})
    this.bodyHeight = document.documentElement.clientHeight
  }
}
</script>
<style lang="less">

</style>
