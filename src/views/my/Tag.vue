<template>
  <div class="tag">
    <!-- 导航区域 -->
    <van-nav-bar
      title="标签选择"
      left-text="取消"
      right-text="保存"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="section">
      <p class="tip">添加标签（最多十个）</p>
      <div class="tagList">
        <div class="tagUnit" v-for="item in tagList" :key="item.id">
          <span @click="onCheck(item.id)" :class="item.checked ? 'active' : ''">
            {{item.name}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tagList: [
        {name: '通信电子', id: 1, checked: true},
        {name: '机械重工', id: 2, checked: false},
        {name: '新型材料', id: 3, checked: false},
        {name: '生物医疗', id: 4, checked: false},
        {name: '机械重工', id: 5, checked: false},
        {name: '新型材料', id: 6, checked: false},
        {name: '生物医疗', id: 7, checked: false},
        {name: '通信电子', id: 8, checked: false}]
    };
  },

  components: {},
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.push('/my')
    },
    onClickRight() {
      this.$toast("保存");
    },
    onCheck (id) {
      for(let i in this.tagList) {
        if(this.tagList[i].id == id) return this.tagList[i].checked = !this.tagList[i].checked
      }
    }
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.tag {
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
  .section{
    margin: .4rem .24rem 0;
    .tip{ color: #6e6e6e; font-size: .26rem; }
    .tagList{display: flex;flex-flow: wrap;
    justify-content: space-between;
      .tagUnit{
        margin-top: 0.2rem;
        span{display: block; border: 1px solid #d43d3d;border-radius: 0.3rem;padding: 0 .24rem;line-height: .6rem;color: #6e6e6e;}
        span.active{ background: #d43d3d; color: #fff;}
      }
    }
  }
}
</style>