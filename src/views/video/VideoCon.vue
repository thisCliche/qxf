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
      <p class="title">{{videoInfo.title}}</p>
      <p class="discript">
        <van-icon
          class-prefix="icon"
          class="iconfont"
          color="#d53c3e"
          name="jieshao"
        />
        {{videoInfo.details}}
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
            :src="videoInfo.lecturerUrl"
          />
        </van-col>
        <van-col span="16">
          <p style="font-size:0.36rem;line-height:0.56rem;">{{videoInfo.lecturer}}</p>
          <p style="font-size:0.28rem;line-height:0.36rem;color:#999;">
            {{videoInfo.lecturerDetails}}
          </p>
        </van-col>
      </van-row>
      <!-- 会议介绍 -->
      <h3 style="font-size:0.36rem;line-height:0.56rem;margin-top:0.96rem">
        会议介绍
      </h3>
      <van-image
        class="conferenceIntroduction"
        :src="require('../../assets/videobg.jpg')"
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
    <van-overlay :show="show">
  <div class="wrapper" >
    <van-loading size="24px" vertical>加载中...</van-loading>
  </div>
</van-overlay>
    
  </div>
</template>

<script>
import {getVideo} from '@/api/request.js'
import "videojs-contrib-hls";
export default {
  name: "",
  data() {
    return {
      params: '',
      showAbs: true,
      likeColor: "rightDef",
      distance: 70,
      videoInfo:{},
      show: true,
    };
  },
  components: {},
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    playerOptions() {
        return {
          playbackRates: [0.5, 1.0, 1.5, 2.0], 
        autoplay: false, 
        muted: false, 
        loop: false, 
        preload: "auto", 
        language: "zh-CN",
        aspectRatio: "16:9", 
        fluid: true, 
        sources: [
          {
            // type: "application/x-mpegURL", // 类型
            type: "video/mp4", // 类型
            // src: "http://hls01open.ys7.com/openlive/6d499d610a0c4a6182e36ac7dca124ad.m3u8", // url地址
            src: this.videoInfo.videoUrl, // url地址
            // src: "https://lmm1120564654.oss-cn-beijing.aliyuncs.com/shipin/2e3ca16e0ba7d35d912d093fbfddc84f.mp4?Expires=1609994097&OSSAccessKeyId=TMP.3Khea7je2CM6nnGTHEh86CDXEam1ZA2papT6zRY7Nrv28HyoQzUFBXBvMMVYf1ivCKK68nkDqf7N3kkREGnhn3oDc3MWS9&Signature=udMawVe5r3iRW97FIb4VVBZCmss%3D", // url地址
          },
        ],
        poster: this.videoInfo.videoDetailsUrl, // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false, 
          durationDisplay: false, 
          remainingTimeDisplay: true, 
          fullscreenToggle: true, 
        }
        }
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
    async getVideo() {
      let res = await getVideo(this.params)
      if(res.data.code != '200') return this.$toast({ message: "视频获取失败！", position: "bottom" });
      this.videoInfo = res.data.data
      this.show = false
    }
  },
  created() {},
  mounted() {
    this.params = this.$route.params.id;
    window.addEventListener("scroll", this.handleScroll);
    this.getVideo()
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/less/videocon.less";
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
