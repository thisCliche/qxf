<template>
  <div>
    <!-- 汇编选项卡 -->
      <van-tab title="汇编" class="difference assembly">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <!-- 每一行 -->
            <van-row
              class="van-hairline--surround"
              v-for="item in test"
              :key="item"
            >
              <van-image
                height="3.1rem"
                fit="cover"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <p class="asseTitle van-ellipsis">
                国家级、省级同时申报，市截止时间8月
              </p>
              <p class="asseDescri van-multi-ellipsis--l2">
                关于开展第四批智慧健康养老应用试点示范的通知
              </p>
              <p class="asseDate">2020-07-30</p>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 简报选项卡 -->
      <van-tab title="简报" class="difference briefing">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <!-- 每一行 -->
            <van-row
              class="van-hairline--surround"
              type="flex"
              v-for="item in test"
              :key="item"
              justify="space-between"
            >
              <van-col span="11">
                <van-image
                  src="http://img.xiaojiayun.top/2020/03/3503899455.jpg"
                  fit="cover"
                  height="3.1rem"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover">简报<br />“第八期”</div>
                  </template>
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
              <van-col span="13">
                <p class="brieTit van-multi-ellipsis--l2">
                  2019年湖南中小企业服务联盟会议召开
                </p>
                <p class="brieTit van-multi-ellipsis--l2">
                  湖南省中小企业服务联盟创业创新分会2019年成员大会暨...
                </p>
                <p class="brieTit van-multi-ellipsis--l2">
                  柳州市召开小微企业创业创新基地城市示范创建工作总结会
                </p>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- 评估选项卡 -->
      <van-tab title="评估">
        <!-- 列表区域 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <!-- 每一行 -->
            <van-row
              class="van-hairline--surround"
              type="flex"
              v-for="item in test"
              :key="item"
              justify="space-between"
            >
              <van-col span="16">
                <p class="title van-ellipsis">
                  安徽省合肥市庐阳区人力资源和社会保障局
                </p>
                <p class="description van-multi-ellipsis--l2">
                  安徽省2020年度就业困难人员社保保险补贴（高校毕业生就业见习补贴）申
                </p>
                <div class="bottom">
                  <span>
                    <span class="iconfont icon-yanjing"></span>408阅读
                  </span>
                  <span>
                    <span class="iconfont icon-rili"></span>2020-07-07
                  </span>
                </div>
              </van-col>
              <van-col span="7">
                <van-image
                  src="http://img.xiaojiayun.top/2020/03/3503899455.jpg"
                  fit="cover"
                  radius="10"
                  height="1.5rem"
                >
                  <!-- 播放标识插槽 -->
                  <template v-slot:default>
                    <div class="cover"></div>
                  </template>
                  <template v-slot:loading></template>
                </van-image>
              </van-col>
            </van-row>
          </van-list>
        </van-pull-refresh>
      </van-tab>
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
</style>