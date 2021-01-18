<template>
  <div class="assess">
    <van-nav-bar title="评估" :border="false" fixed left-arrow @left-click="$router.go(-1)"></van-nav-bar>
    <div class="contanier" ref="contanier">
      <div>
        <assess-card :assessDis="item" v-for="item of assessList" :key="item.id"></assess-card>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import AssessCard from './component/AssessCard'
export default {
  name: '',
  data () {
    return {
      assessList: [
        {
          logo: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '高新技术企业认定(国家级)',
          id: 1,
          advantage: [{
            icon: 'wodeqiye',
            describe: '20-40万补贴',
          },
          {
            icon: 'time',
            describe: '4月、8月申报',
          },
          {
            icon: 'servicejinkoubaoshui',
            describe: '税减免10%',
          }
          ]
        },{
          logo: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '高新技术企业认定(国家级)1',
          id: 2,
          advantage: [{
            icon: 'qian',
            describe: '20-40万补贴',
          },
          {
            icon: 'time',
            describe: '4月、8月申报',
          },
          {
            icon: 'servicejinkoubaoshui',
            describe: '税减免10%',
          }
          ]
        },{
          logo: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '高新技术企业认定(国家级)2',
          id: 3,
          advantage: [{
            icon: 'qian',
            describe: '20-40万补贴',
          },
          {
            icon: 'servicejinkoubaoshui',
            describe: '税减免10%',
          }
          ]
        },{
          logo: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '高新技术企业认定(国家级)2',
          id: 4,
          advantage: [{
            icon: 'qian',
            describe: '20-40万补贴',
          },
          {
            icon: 'servicejinkoubaoshui',
            describe: '税减免10%',
          }
          ]
        },{
          logo: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '高新技术企业认定(国家级)2',
          id: 5,
          advantage: [{
            icon: 'qian',
            describe: '20-40万补贴',
          },
          {
            icon: 'servicejinkoubaoshui',
            describe: '税减免10%',
          }
          ]
        },{
          logo: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '高新技术企业认定(国家级)2',
          id: 6,
          advantage: [{
            icon: 'qian',
            describe: '20-40万补贴',
          },
          {
            icon: 'servicejinkoubaoshui',
            describe: '税减免10%',
          }
          ]
        },{
          logo: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '高新技术企业认定(国家级)2',
          id: 7,
          advantage: [{
            icon: 'qian',
            describe: '20-40万补贴',
          },
          {
            icon: 'servicejinkoubaoshui',
            describe: '税减免10%',
          }
          ]
        },{
          logo: 'https://img.yzcdn.cn/vant/cat.jpeg',
          title: '高新技术企业认定(国家级)2',
          id: 8,
          advantage: [{
            icon: 'qian',
            describe: '20-40万补贴',
          },
          {
            icon: 'servicejinkoubaoshui',
            describe: '税减免10%',
          }
          ]
        },
      ]
    }
  },

  components: {
    AssessCard
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    new Bscroll(this.$refs.contanier, {
      click: true,
    });
  },
}
</script>

<style lang="less" scoped>
.assess{
  height: 100%;
  padding: 1.12rem 0 0.6rem;
  background: #f0f0f0;
  .contanier{
  padding: .0 .24rem;
  
  height: 100%;
}
}
</style>