<template>
  <div class="my">
    <!-- 显示头像大图 -->
    <div class="avatar" v-if="isUploader">
      <van-icon
        class="cancelIcon"
        name="cross"
        color="#ffffff"
        @click="isUploaderHandler"
        size="0.5rem"
      />
      <van-image width="4rem" height="4rem" fit="cover" :src="thumbnail" />
      <van-uploader
        v-model="fileAvatar"
        :max-size="3 * 1024 * 1024"
        :before-read="beforeRead"
        :preview-full-image="false"
        :deletable="false"
        @oversize="onOversize"
      >
        <template>
          <van-button icon="manager-o" size="small" type="primary">更换头像</van-button>
        </template>
      </van-uploader>
    </div>
    <!-- 导航区域 -->
    <van-nav-bar
      :right-text="editStatus"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="section">
      <van-cell-group>
        <van-cell class="avatarCell" title="头像" is-link center @click="isUploaderHandler">
          <template>
            <van-image round width="0.82rem" height="0.82rem" :src="thumbnail" />
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group class="row_secend">
        <van-field
          v-model="personalFrom.nick"
          label="昵称"
          placeholder="请输入昵称"
          input-align="right"
          right-icon="arrow"
          :disabled="isDis"
        />
        <van-field
          v-model="personalFrom.name"
          label="姓名"
          placeholder="请输入姓名"
          input-align="right"
          right-icon="arrow"
          :disabled="isDis"
        />
        <van-field
          v-model="personalFrom.post"
          label="职务"
          placeholder="请输入职务"
          input-align="right"
          right-icon="arrow"
          :disabled="isDis"
        />
        <van-field
          v-model="personalFrom.company"
          label="公司全称"
          placeholder="请输入公司全称"
          input-align="right"
          right-icon="arrow"
          :disabled="isDis"
        />
        <van-cell title="性质标签" is-link to="tag" />
      </van-cell-group>

      <van-cell-group class="row_third">
        <van-cell title="企业综合评估" is-link to="index" />
        <van-cell title="评估入口" is-link to="index" />
        <van-cell title="评估查询" is-link to="index" />
      </van-cell-group>
    </div>
    <!-- 剪裁图片组件 -->
    <van-popup
      class="bg-tran"
      v-model="showCropper"
      closeable
      
    >
      <div class="flex-column-center height100">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.outputSize"
          :outputType="option.outputType"
          :info="option.info"
          :full="option.full"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :fixed="option.fixed"
          :fixedNumber="option.fixedNumber"
          :centerBox="option.centerBox"
          :infoTrue="option.infoTrue"
          :fixedBox="option.fixedBox"
          :high="option.high"
          :mode="option.mode"
        ></vueCropper>
        <van-col span="24" class="col-white">
          <van-col span="8" class="p-2 text-center">
            <span @click="cancelCropper">取消</span>
          </van-col>
          <van-col span="8" class="p-2 text-center">
            <span @click="rotateImage" class="">
              <van-icon name="replay" />
            </span>
          </van-col>
          <van-col span="8" class="p-2 text-center">
            <span @click="getCropBlob">确定</span>
          </van-col>
        </van-col>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  name: "",
  data() {
    return {
      personalFrom: {
        nick: "Daimiaomaio",
        name: "代苗苗",
        post: "技术总监",
        company: "安徽艾为云网络科技有限公司",
      },
      isDis: true,
      editStatus: "编辑",
      thumbnail: "http://img.xiaojiayun.top/2020/03/115753828.jpg",
      isUploader: false,
      fileAvatar: [{ url: "http://img.xiaojiayun.top/2020/03/115753828.jpg" }],
      showCropper: false, // 截图弹窗遮罩默认隐藏
      imageAccept: "/jpg,/png,/jpeg",
      imageFileName: "",
      //vue-cropper 配置
      option: {
        img: "",
        outputSize: 0.8,
        info: false, // 裁剪框的大小信息
        outputType: "jpeg", // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: window.innerWidth - 100 + "px", // 默认生成截图框宽度
        autoCropHeight: window.innerWidth - 100 + "px", // 默认生成截图框高度
        high: true, // 是否按照设备的dpr 输出等比例图片
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [1, 1], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: false, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: false, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        mode: "100% auto", // 图片默认渲染方式
      },
    };
  },

  components: {
    VueCropper,
  },
  computed: {},
  methods: {
    onClickLeft() {
      window.webkit.messageHandlers.jsToOcBackHome.postMessage({"params":"需要返回主页"});
    },
    //是否显示头像大图
    isUploaderHandler() {
      this.isUploader = !this.isUploader;
    },
    // 保存
    onClickRight() {
      this.isDis = !this.isDis;
      if (this.editStatus == "保存") this.getReposit();
      this.editStatus = this.editStatus == "编辑" ? "保存" : "编辑";
    },
    getReposit() {
      setTimeout(() => {
        this.$toast({ position: "bottom", message: "保存成功" });
      }, 500);
    },
    // 上传文件过大
    onOversize() {
      this.$toast("图片不能大于3M");
    },

    // 获取文件后缀
    getFileSuffix(fileName) {
      return fileName.match(/\/\w+$/)[0].toLowerCase();
    },

    // 选择图片上传前操作，调起剪裁组件
    beforeRead(file) {
      this.isUploader = false;
      if (!this.imageAccept.includes(this.getFileSuffix(file.type))) {
        return this.$toast("请上传 jpg/png 格式图片");
      }
      this.showCropper = true;
      this.imageFileName = file.name;
      // 本地图片转成base64，用于截图框显示本地图片
      this.imageToBase64(file);
    },
    // 将本地图片转化为Base64，否则vue-cropper组件显示不出要本地需要剪裁的图片
    imageToBase64(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // 截图框中的图片
        this.option.img = reader.result;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },

    // 确认剪裁并上传图片
    getCropBlob() {
      this.$toast("上传中", 0);
      // let formData = new FormData();
      // this.$refs.cropper.getCropBlob((data) => {
      //   formData.append('avatar', data, this.imageFileName);
      //   // formData私有类对象，访问不到，可以通过get判断值是否传进去
      //   console.log(formData.get('avatar'));
      //   // 上传图片至服务器
      //   this.$api.modifyProfile(formData)
      //   .then(res => {
      //     if(res.code === 200){
      //       this.$toast('更改头像成功');
      //       // do something...
      //     } else {
      //       this.$toast('上传失败');
      //     }
      //   })
      //   .catch(err => console.error(err));
      // })
    },

    // 旋转图片
    rotateImage() {
      this.$refs.cropper.rotateRight();
    },

    // 取消截图上传头像
    cancelCropper() {
      this.showCropper = false; // 隐藏切图遮罩
      this.showPopup = true;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.avatar {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  .van-uploader /deep/ .van-uploader__preview {
    display: none;
  }
  .van-image {
    margin: 2rem 0 0.4rem;
  }
  .cancelIcon {
    transform: translate(2.3rem, 0px);
    margin-top: 2rem;
  }
}
.my {
  background: #f5f5f5;
  height: 100%;
  position: relative;
}
.van-nav-bar {
  background: #d53c3e;
  /deep/ .van-icon {
    color: #fff;
  }
  /deep/ .van-nav-bar__text {
    color: #fff;
  }
}

.row_secend,
.row_third {
  margin-top: 0.22rem;
}

.height100 {
  height: 100vh;
}
.flex-column-center {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.vue-cropper {
  background: #000;
  .cropper-view-box {
    outline: 1px solid #fff !important;
    outline-color: #fff !important;
  }
}
.text-center{text-align: center;}
.bg-tran{
  height: 100%;
  width: 100%;
  .col-white{background: #000;font-size: .32rem;color: #fff;padding-bottom: 1rem;}
}
.avatarCell{
  /deep/ .van-cell__value{display: flex;
    justify-content: flex-end;}
}
</style>