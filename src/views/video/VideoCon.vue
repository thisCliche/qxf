<template>
  <div>
    <van-nav-bar @click-left="$router.go(-1)" left-arrow></van-nav-bar>
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
    >
    </video-player>
    <div class="detail">
      <p class="title">企业业绩长期不能突破原因在哪（直播）</p>
      <p class="discript">
        <van-icon
          class-prefix="icon"
          class="iconfont"
          color="#d53c3e"
          name="jieshao"
        />
        产品描述，详情解析产品描述，详情解析产品描述，详情解析产品描述
      </p>
      <p class="like">
        <van-row type="flex" justify="space-between">
          <van-col span="4" class="left">已购买</van-col>
          <van-col span="4" :class="likeColor" @click="like"
            ><van-icon class-prefix="icon" class="iconfont" name="dianzan1" />
            点赞</van-col
          >
        </van-row>
      </p>
      <!-- 主讲介绍 -->
      <h3 style="font-size:0.36rem;line-height:0.56rem;margin-top:0.96rem">
        主讲介绍
      </h3>
      <van-row style="margin-top:0.26rem" type="flex" justify="space-between">
        <van-col span="8">
          <van-image
            round
            width="1.8rem"
            height="1.8rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-col>
        <van-col span="16">
          <p style="font-size:0.36rem;line-height:0.56rem;">张三</p>
          <p style="font-size:0.28rem;line-height:0.36rem;color:#999;">
            主讲的工作履历介绍，负责的项目介绍积累了那些经验以及那些成就主讲的工作履历介绍，负责的项目介绍积累了那些经验以及那些成就
          </p>
        </van-col>
      </van-row>
      <!-- 会议介绍 -->
      <h3 style="font-size:0.36rem;line-height:0.56rem;margin-top:0.96rem">
        会议介绍
      </h3>
      <van-image
        class="conferenceIntroduction"
        :src="require('../../assets/videobg.png')"
      >
        <template v-slot:default>
          <div class="cover">
            <p>主办方：安徽省经济和信息化厅</p>
            <p>企办方：安徽艾为云科技有限公司</p>
          </div>
        </template>
      </van-image>
      <div class="introduction">
        <div class="j-fontContent newscontnet minh300">
          <!--enpcontent-->
          <p style="text-align: center;">
            <span style="font-weight: bold;">合肥市2021年兵役登记公告</span>
          </p>
          <p>
            依法服兵役和进行兵役登记是每个适龄公民应尽的光荣义务和神圣职责。根据《中华人民共和国兵役法》《征兵工作条例》有关规定，现将合肥市2021年度兵役登记有关事项公告如下：
          </p>
          <p>一、登记对象</p>
          <p>
            户籍在合肥市所辖各县（市、区），2021年12月31日前年满18周岁的男性公民，以及在我市全日制普通高等学校就读的大学生，必须进行兵役登记。2021年12月31日以前年满17周岁未满18岁的男性高中（含中专、职高、技校）毕业生，本人自愿应征的，也可参加兵役登记。
          </p>
          <p>二、登记时间</p>
          <p>截至2021年6月30日。</p>
          <p>三、登记流程</p>
          <p>
            （一）网上信息登记。登录“全国征兵网”（http://www.gfbzb.gov.cn），点击“兵役登记（男兵）”选项，进行实名注册并真实、完整填写个人基本信息，下载打印《男性公民兵役登记/应征报名表》。
          </p>
          <p>
            （二）现场确认。持《男性公民兵役登记/应征报名表》，携带身份证、户口簿、毕业证（学历证明）等证件到乡镇（街道）武装部兵役登记站或者高校征兵工作站现场确认。
          </p>
          <p>
            （三）初检初审得出结论。乡镇（街道）兵役登记站、高校征兵工作站对参加兵役登记的适龄男性公民进行初检初审，填写《男性公民兵役登记/应征报名表》，依法作出应征、缓征、免征和不得征集的结论，并报县（市、区）兵役机关审核。
          </p>
          <p>
            （四）发放《兵役登记证》。乡镇（街道）兵役登记站、高校征兵工作站将县（市、区）兵役机关审核盖章的《兵役登记证》发给登记青年。《兵役登记证》作为有关部门查验适龄男性公民履行兵役义务情况的依据。
          </p>
          <p>四、法律责任</p>
          <p>
            （一）根据《中华人民共和国兵役法》《征兵工作条例》有关规定：男性适龄公民拒绝、逃避兵役登记的，机关、团体、企业事业单位阻挠公民履行兵役登记或有妨害兵役工作行为的，由当地人民政府征兵办公室按照有关条款予以处罚，构成犯罪的依法追究刑事责任。
          </p>
          <p>
            （二）根据《关于建立完善守信联合激励和失信联合惩戒制度加快推进社会诚信建设的指导意见》规定，对“拒不履行国防义务，拒绝、逃避兵役”等行为，要进行联合惩戒，拒不履行后果可能严重的，将面临以下法律惩处：不能参加公务员、事业单位和国有（国有控股）企业等单位招聘，不能出国（境），不能取得毕业证，不能办理高校入学、升学手续，不能办理身份证、户口簿、驾驶证，不能办理银行贷款，不能购买机票、高铁票，不能享受社会保障等，所在单位作为违法失信记录记入个人档案等。
          </p>
          <p>
            （三）各机关、团体、企业事业单位，特别是高中（含中专、职高、技校）要依法组织和督促适龄男性公民及时履行兵役登记义务，确保本辖区、本单位或本学校所有适龄男性公民全部完成兵役登记。
          </p>
          <p>五、政策咨询</p>
          <p>
            （一）网上咨询：登录“全国征兵网”或关注“安徽征兵”微信公众号进行查阅咨询。
          </p>
          <p>
            （二）现场咨询：各县级人民政府征兵办公室、各乡镇（街道）、高校武装部（征兵工作站）。
          </p>
          <p>
            （三）电话咨询：合肥市人民政府征兵办公室：65964159；肥东县人民政府征兵办公室：67749451；肥西县人民政府征兵办公室：68892405；长丰县人民政府征兵办公室：66671009；庐江县人民政府征兵办公室：87322814；巢湖市人民政府征兵办公室：82352160；瑶海区人民政府征兵办公室：64498798；庐阳区人民政府征兵办公室：65699888；蜀山区人民政府征兵办公室：65121038；包河区人民政府征兵办公室：63357980。
          </p>
          <p>欢迎广大适龄青年依法进行兵役登记，踊跃报名应征!</p>
          <p style="text-align: right;">合肥市人民政府征兵办公室</p>
          <p style="text-align: right;">2021年1月5日</p>
          <!--/enpcontent--><!--enpproperty <date>2021-01-06 00:00:00:0</date><author></author><subtitle></subtitle><introtitle></introtitle><keyword></keyword><id>221122</id><nodeid>0</nodeid><nodename></nodename><url></url><siteid>1</siteid>
<title>合肥市2021年兵役登记公告</title>
/enpproperty-->
        </div>
      </div>
    </div>
    <transition name="van-slide-up">
      <div class="backTop" v-show="!showAbs" @click="backTop">
        <van-icon
          class-prefix="icon"
          class="iconfont"
          color="#d53c3e"
          name="dingbu"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import "videojs-contrib-hls";
export default {
  name: "",
  data() {
    return {
      showAbs: true,
      likeColor: "rightDef",
      distance: 70,
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            // type: "application/x-mpegURL", // 类型
            type: "video/mp4", // 类型
            // src: "http://hls01open.ys7.com/openlive/6d499d610a0c4a6182e36ac7dca124ad.m3u8", // url地址
            src: "http://img.xiaojiayun.top/demoPlayer.mp4", // url地址
            // src: "https://lmm1120564654.oss-cn-beijing.aliyuncs.com/shipin/2e3ca16e0ba7d35d912d093fbfddc84f.mp4?Expires=1609994097&OSSAccessKeyId=TMP.3Khea7je2CM6nnGTHEh86CDXEam1ZA2papT6zRY7Nrv28HyoQzUFBXBvMMVYf1ivCKK68nkDqf7N3kkREGnhn3oDc3MWS9&Signature=udMawVe5r3iRW97FIb4VVBZCmss%3D", // url地址
          },
        ],
        poster: "http://img.xiaojiayun.top/2020/03/3503899455.jpg", // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false, // 当前时间和持续时间的分隔符
          durationDisplay: false, // 显示持续时间
          remainingTimeDisplay: true, // 是否显示剩余时间功能
          fullscreenToggle: true, // 是否显示全屏按钮
        },
      },
    };
  },
  components: {},
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    like() {
      this.likeColor = this.likeColor == "rightDef" ? "rightSele" : "rightDef";
    },
    // 返回顶部
    backTop() {
      let start = document.documentElement.scrollTop;
      let that = this;
      function gotop() {
        scrollTo(0, start - that.distance);
        start = start - that.distance;
        if (start > 0) {
          window.requestAnimationFrame(gotop);
        }
      }
      window.requestAnimationFrame(gotop);
    },
    // 返回顶部按钮随着滚动渐显的效果
    handleScroll() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 260) {
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: transparent;
  position: fixed;
  top: 0;
  /deep/ .van-icon {
    color: #333;
    background: #fff;
    border-radius: 50%;
    padding: 8px;
    opacity: 0.8;
  }
}
.video-player-box /deep/ .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  width: 1.8em;
  height: 1.8em;
  border-radius: 50%;
  margin-left: -0.9em;
  margin-top: -0.9em;
  line-height: 1.7em;
}
.detail {
  padding: 0 0.24rem;
  .title {
    font-size: 0.32rem;
    color: #333333;
    margin: 0.3rem 0;
  }
  .discript {
    font-size: 0.28rem;
    color: #999999;
    line-height: 0.36rem;
  }
  .like {
    margin-top: 0.3rem;
    .left {
      color: #d53c3e;
      font-size: 0.32rem;
      font-weight: 500;
    }
    .rightDef {
      color: #999;
    }
    .rightSele {
      color: #d53c3e;
    }
  }
  .conferenceIntroduction {
    margin: 0.64rem 0;
    /deep/ .cover {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      background: rgba(83, 83, 83, 0.4);
      text-align: center;
      color: #fff;
      font-size: 0.3rem;
      line-height: 0.4rem;
    }
    /deep/ p:first-child {
      margin-top: 0.7rem;
    }
  }
}
.backTop {
  position: fixed;
  right: 0.3rem;
  bottom: 0.5rem;
  background: #fbe1e1;
  border-radius: 50%;
  padding: 0.05rem;
  box-shadow: 0px 3px 2px #cacaca;
  .iconfont {
    font-size: 36px;
  }
}
</style>
