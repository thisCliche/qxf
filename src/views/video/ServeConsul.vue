<template>
  <div class="serveCon">
    <van-nav-bar
      title="公司简介"
      @click-left="onClickLeft"
      left-arrow
    ></van-nav-bar>
    <div class="summary">
      <van-row style="padding:0.32rem 0;" type="flex">
        <van-col span="4">
          <van-image
            round
            width="1rem"
            height="1rem"
            :src="require('../../assets/testlogo.png')"
          ></van-image>
        </van-col>
        <van-col span="13">
          <p style="font-size:0.32rem;margin:0.1rem 0;">企先锋官方咨询</p>
          <p style="font-size:0.24rem;line-height:0.4rem;">
            中小微企业政策一站式服务平台
          </p>
        </van-col>
        <van-col span="7" style="font-size:0.22rem;">
          <p style="margin:0.14rem 0;">咨询人数 / 968</p>
          <p>评分 / <i style="font-size:0.32rem;">4.8</i>分</p>
        </van-col>
      </van-row>
      <div class="bannerWrapper">
        <van-swipe indicator-color="#d53c3e" :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="content">
      <div class="card">
        <h3 class="cardTit van-hairline--bottom">公司简介</h3>
        <div class="cardCon">
          安徽艾为云科技有限公司近年来一直致力于为中小微企业提供软件开发、设计等一站式服务，2016年先后被授予“安徽省高新技术企业”、“安徽省中小企业公共服务示范平台”称号。
        </div>
      </div>
      <div class="card">
        <h3 class="cardTit van-hairline--bottom">产品服务</h3>
        <div class="cardCon" v-html="testcont"></div>
      </div>
      <div class="card">
        <h3 class="cardTit van-hairline--bottom">公司地址</h3>
        <div class="cardCon">
          安徽省安徽合肥市高新区习友路与香樟大道交叉口深港产业园7B501室
        </div>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div><img src="../../assets/pg2.png" /></div>
          </div>
          <div class="swiper-slide">
            <div><img src="../../assets/pg3.png" /></div>
          </div>
          <div class="swiper-slide">
            <div><img src="../../assets/pg1.png" /></div>
          </div>
          <div class="swiper-slide">
            <div><img src="../../assets/pg4.png" /></div>
          </div>
          <div class="swiper-slide">
            <div><img src="../../assets/pg2.png" /></div>
          </div>
          <div class="swiper-slide">
            <div><img src="../../assets/pg3.png" /></div>
          </div>
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
      someList: [],
      stackinit: {
        visible: 3,
      },
      testcont:
        "◎  企先锋企业政策服务平台软件开发与运营 <br/> ◎  移动端软件、微商城、网站设计与开发",
      images: [
        "http://img.xiaojiayun.top/2020/03/115753828.jpg",
        "http://img.xiaojiayun.top/2020/03/1270226805.jpg",
        "http://img.xiaojiayun.top/2020/03/128578367.png",
        "http://img.xiaojiayun.top/2020/03/1362501591.jpg",
      ],
    };
  },
  components: {},
  computed: {},
  methods: {
    onClickLeft() {
      console.log(1);
    },
    loadScript() {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "./swiper-bundle.min.js";
      script.onload = _ => {
        let swiper = new Swiper(".swiper-container", {
          watchSlidesProgress: true, 
          resistanceRatio: 0, 
          on: {
            init: function() {
              let slides = this.slides;
              for (let i = 0; i < slides.length; i++) {
                let slide = slides.eq(i);
                slide.css("zIndex", 100 - i); 
              }
            },
            resize: function(swiper) {
              swiper.update();
            },
            setTranslate: function() {
              let slides = this.slides;
              let offsetAfter = this.width * 0.95; 
              for (let i = 0; i < slides.length; i++) {
                let slide = slides.eq(i);
                let progress = slides[i].progress;
                if (progress <= 0) {
                  slide.transform(
                    "translate3d(" +
                      progress * offsetAfter +
                      "px, 0, 0) scale(" +
                      (1 - Math.abs(progress) / 20) +
                      ")"
                  );
                  slide.css("opacity", progress + 3); 
                }
                if (progress > 0) {
                  slide.transform("rotate(" + -progress * 5 + "deg)"); 
                  slide.css("opacity", 1 - progress); 
                }
              }
            },
            setTransition: function(swiper, transition) {
              for (let i = 0; i < this.slides.length; i++) {
                let slide = this.slides.eq(i);
                slide.transition(transition);
              }
            },
          },
        });
      };
      document.body.appendChild(script);
    },
  },
  created() {},
  mounted() {
    this.loadScript();
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/less/swiper-bundle.min.css";
.serveCon {
  background: #f0f0f0;
  height: 100%;
  .van-nav-bar {
    background: #d53c3e;
    /deep/ .van-icon {
      color: #fff;
    }
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
  .van-nav-bar::after {
    border-bottom-width: 0px;
  }
  .summary {
    padding: 0 0.24rem;
    height: 3.2rem;
    background: #d53c3e;
    color: #fff;
    .van-swipe {
      border-radius: 0.2rem;
      top: 0.2rem;
      .van-swipe-item {
        img {
          width: 100%;
          height: 3.05rem;
        }
      }
    }
  }
  .content {
    margin-top: 1.76rem;
    padding: 0 0.24rem; 
    .card {
      background: #fff;
      padding: 0.2rem;
      border-radius: 0.1rem;
      margin-top: 0.2rem;
      .cardTit {
        line-height: 0.56rem;
        font-size: 0.32rem;
      }
      .cardCon {
        padding: 0.18rem 0 0;
        font-size: 0.26rem;
        line-height: 0.36rem;
      }
    }
    .swiper-container {
        width: 100%;
        .swiper-slide {
          text-align: center;
          div {
            width: 86%;
            border-radius: 7px;
            margin: 10px 0 10px 4%;
            img {
              width: 100%;
              display: block;
              border-radius: 7px;
            }
          }
        }
      }
  }
}
</style>
