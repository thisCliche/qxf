<template>
  <div class="evaluate">
    <van-nav-bar title="评价" left-arrow @click-left="onClickLeft" />
    <div class="rowOne">
      <van-image
        width="1rem"
        height="1rem"
        fit="cover"
        radius="10"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="titleWrap">
        <p class="title van-multi-ellipsis--l3">转发《关于组织开展2020年国家级和省级智慧健康养老应用试点示范申报的通知》</p>
      </div>
    </div>
    <div class="rowTwo">
      <van-form @submit="onSubmit">
        <h5>您对视频知识点满意吗？</h5>
        <div class="rate">
          <span>服务评价</span>
          <van-rate v-model="form.rate" color="#d53c3e"/>
        </div>
        <div class="tag">
          <div class="tagList">
            <div class="tagUnit" v-for="item in form.tagList" :key="item.id">
              <span @click="onCheck(item.id)" :class="item.checked ? 'active' : ''">
                {{item.name}}
              </span>
            </div>
          </div>
        </div>
        <van-field
        class="textarea"
          v-model="form.message"
          type="textarea"
          placeholder="还想说点什么吗？"
          autosize
          row="3"
          show-confirm-bar
          :autosize="{minHeight:100}" 
        />
        <van-checkbox v-model="form.checked" icon-size="0.3rem">匿名评价</van-checkbox>
        <van-button block type="info" native-type="submit" color="#d53c3e">
          立即评价
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      form: {
        rate: 3,
        tagList: [
        {name: '精彩绝伦', id: 1, checked: true},
        {name: '知识细', id: 2, checked: false},
        {name: '仪容整洁', id: 3, checked: false},
        {name: '态度友好', id: 4, checked: false},
        {name: '按时到', id: 5, checked: false},
        {name: '口齿清晰', id: 6, checked: false},
        {name: '讲解清晰', id: 7, checked: false},
        {name: '态度友好', id: 8, checked: false}]
        },
        message: '',
        checked: false
      }
    
  },

  components: {},
  computed: {},
  methods: {
    onClickLeft() {},
    onSubmit(values) {
      console.log(this.form)
      console.log('submit', values);
    },
    onCheck (id) {
      for(let i in this.form.tagList) {
        if(this.form.tagList[i].id == id) return this.form.tagList[i].checked = !this.form.tagList[i].checked
      }
    }
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.evaluate {
  height: 100%;
  background: #f5f5f5;
  .rowOne{background: #fff;padding: .38rem .24rem;display: flex;justify-content: space-between;
    .van-image{flex-shrink: 0;}
          .titleWrap{flex-shrink: 1;
            .title{color: #414141;font-size: .28rem;line-height: .4rem;margin-left: .12rem;}
            .quantity{font-size: .24rem; color: #666;text-align: right;}
          }
  }
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
  .tagList{display: flex;flex-flow: wrap;
    justify-content: space-between;
      .tagUnit{
        margin-top: 0.2rem;
        span{display: block; border: 1px solid #888888;border-radius: 0.3rem;padding: 0 .24rem;line-height: .6rem;color: #888888;}
        span.active{ color: #d43d3d; border: 1px solid #d43d3d;}
      }
    }
  .rowTwo{background: #fff;padding: 0.34rem .45rem;margin-top: .2rem;
    h5{font-size: .34rem;}
    .rate{margin: .3rem 0;display: flex;justify-content: space-between;align-items: center;
      span{font-size: .24rem;color: #888888;}
    }
    .textarea{background: #eee;border-radius: .1rem;margin-top: .6rem;}
    .van-checkbox{color: #7e7e7e;justify-content: flex-end;margin: .6rem 0 .2rem;}
  }
}
</style>