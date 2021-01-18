<template>
  <div class="assesspolicy">
    <van-nav-bar
      title="高新技术企业认定（国家级）"
      :border="false"
      fixed
      left-arrow
      @left-click="$router.go(-1)"
    ></van-nav-bar>
    <div class="content">
      一、高新技术企业申报认定条件:
      1、产品服务属于2016年颁布的新版《国家重点支持的高新技术领域》规定的范围，其新领域是:电子信息、生物与新医药、航空航天、新材料、高技术服务、新能源与节能、资源与环境、先进制造与自动化。

2、在中国境内不含港、澳、台地区注册的企业，近三年内通过自主研发、受让、受赠、并购等方式，对其主要产品服务的核心技术拥有自主知识产权。企业拥有1项发明专利或者6项实用新型专利、或者6个集成电路布图设计专有权或6个植物新品种权。

3、具有大学专科以上学历的研发人员与相关科技人员总数占企业当年职工总数的10%以上;

4、企业为获得科学技术不包括人文、社会科学新知识，创造性运用科学技术新知识，或实质性改进技术、产品服务而持续进行了研究开发活动，且近三个会计年度的研究开发费用总额占销售收入总额的比例符合如下要求:

a.最近一年销售收入小于5,000万元的企业，比例不低于5%;
b.最近一年销售收入在5,000万元至2亿元以内的企业，比例不低于4%;
c.最近一年销售收入在2亿元元以上的企业，比例
不低于3%。其中，企业在中国境内发生的研究开发
费用总额占全部研究开发费用总额的比例不低于
60%。
d.高新技术产品服务收入占企业当年总收入的60%
以上;
e.企业研究开发组织管理水平、科技成果转化能
力、自主知识产权数量、销售与总资产成长性等指
标符合《高新技术企业认定管理工作指引》的要
求。
    </div>
    <div class="pf">
    <van-button color="#d43d3d">
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