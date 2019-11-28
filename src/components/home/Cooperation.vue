<template>
  <div class="cooperation">
    <div class="ct tc">
      <div class="title">
        <h4>战略合作</h4>
        <div>Customers</div>
      </div>
      <div class="businessPartner">
        <div class="image" v-for="(item, index) in img" :key="index">
          <img :src="item" alt />
        </div>
      </div>
    </div>
    <div class="tactics">
      <div class="ct tacticsOne">
        <div>
          <div class="hezuo">
            <h4>战略合作</h4>
            <div>Customers</div>
          </div>

          <div class="img1">
            <!-- <span class="el-icon-arrow-left" @click="handleRight"></span> -->
            <ul ref="image">
              <li v-for="item in img1" :key="item">
                <img :src="item" />
              </li>
            </ul>
            <!-- <span class="el-icon-arrow-right" @click="handleLeft"></span> -->
          </div>
        </div>
      </div>
    </div>
    <div class="newsInformation">
      <div class="news">
        <h4>战略合作</h4>
        <div>Customers</div>
      </div>
      <div class="information ct">
        <ul>
          <li>
            <img src="../../assets/img/KvrUUK.md.jpg" alt />
            <div class="textContent">
              <div class="date">
                <div>04-25</div>
                <div>2019</div>
              </div>
              <div class="textTitle">
                <ul>
                  <li class="titleOne">境界高！马云豪掷10亿....</li>
                  <li>一款APP从设计稿到切图过程全方位揭秘一款APP从设计稿到切图过程全方位揭秘......</li>
                  <li class="arrows">→</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <img class="imgOne" src="../../assets/img/Kvr08e.jpg" alt />
            <div class="textContent">
              <div class="date">
                <div>04-25</div>
                <div>2019</div>
              </div>
              <div class="textTitle">
                <ul>
                  <li class="titleOne">境界高！马云豪掷10亿....</li>
                  <li>一款APP从设计稿到切图过程全方位揭秘一款APP从设计稿到切图过程全方位揭秘......</li>
                  <li class="arrows">→</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/KvrDvd.md.jpg" alt />
            <div class="textContent">
              <div class="date">
                <div>04-25</div>
                <div>2019</div>
              </div>
              <div class="textTitle">
                <ul>
                  <li class="titleOne">境界高！马云豪掷10亿....</li>
                  <li>一款APP从设计稿到切图过程全方位揭秘一款APP从设计稿到切图过程全方位揭秘......</li>
                  <li class="arrows">→</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 回顶部 -->
    <div class="icon">
      <div class="icon-a">
        <span>
          <a
            href="tencent://Message/?Uin=1559661845&amp;websiteName=local.edu.com:8888=&amp;Menu=yes"
            class="btn btn-qq"
          >
            <img
              border="0"
              src="https://i.loli.net/2019/10/30/n4gHwxmNEOpce7Z.png"
              alt="hello xym!!"
              title="hello xym!!"
            />
          </a>
        </span>
      </div>
      <div>
        <el-button type="text" @click="dialogFormVisible = true">
          <img src="https://s2.ax1x.com/2019/11/05/MpJbdO.jpg" alt />
        </el-button>
        <el-dialog
          title="扫描二维码"
          style="width:80%;margin: 0 auto"
          :visible.sync="dialogFormVisible"
          :modal="false"
        >
          <el-form :model="form">
            <el-form-item :label-width="formLabelWidth">
              <img :src="form.img" alt />
            </el-form-item>
          </el-form>
          <div slot="footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
          <!-- <img src="https://s2.ax1x.com/2019/11/05/MpKTpV.jpg" alt="" /> -->
        </el-dialog>
      </div>
      <div>
        <img class="go-top" src="https://s2.ax1x.com/2019/11/05/MpKTpV.jpg" @click="backTop" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        "https://s2.ax1x.com/2019/10/31/K5LOXj.jpg",
        "https://s2.ax1x.com/2019/10/31/K5OSA0.md.jpg",
        "https://s2.ax1x.com/2019/10/31/K5Oi3F.jpg",
        "https://s2.ax1x.com/2019/10/31/K5ONUP.png",
        "https://s2.ax1x.com/2019/10/31/K5O0gg.md.jpg",
        "https://s2.ax1x.com/2019/10/31/K5OIKJ.md.jpg",
        "https://s2.ax1x.com/2019/10/31/K5ObUx.jpg",
        "https://s2.ax1x.com/2019/10/31/K5XQI0.jpg",
        "https://s2.ax1x.com/2019/10/31/K5X1iV.jpg",
        "https://s2.ax1x.com/2019/10/31/K5X3GT.jpg"
      ],
      img1: [
        "https://s2.ax1x.com/2019/11/04/KvDxBt.jpg",
        "https://s2.ax1x.com/2019/11/04/KvrC4S.jpg",
        "https://s2.ax1x.com/2019/11/04/Kvri9g.png",
        "https://s2.ax1x.com/2019/11/04/KvrF3Q.jpg",
        "https://s2.ax1x.com/2019/11/04/KvrVun.md.jpg",

        "https://s2.ax1x.com/2019/11/06/MPnfeg.jpg",
        "https://s2.ax1x.com/2019/11/06/MPm7rD.jpg",
        "https://s2.ax1x.com/2019/11/04/KvrK4U.md.jpg",
        "https://s2.ax1x.com/2019/11/06/MPmAgK.jpg",
        "https://s2.ax1x.com/2019/11/06/MPeL90.jpg"
      ],
      imgLocation: 1,
      dialogFormVisible: false,
      form: {
        img: "https://s2.ax1x.com/2019/11/07/MFh7Ix.jpg"
      },
      formLabelWidth: "100px"
    };
  },
  mounted() {
    // var timer1 = setInterval(() => {
    //   this.$refs.image.children.forEach(item => {
    //     item.style.left = "-210px";
    //   });
      // }, 3000);
      // window.clearInterval(timer1);
      // console.log(this.$refs.image.children);
      // 回顶部
      window.addEventListener("scroll", this.scrollToTop);
    },
  destroyed() {
    window.pxoveEventListener("scroll", this.scrollToTop);
  },
  methods: {
    // huidingbu
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 0) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },

    handleRight() {
      console.log(this.imgLocation);
      this.imgLocation++;
      // this.$refs.image.children.forEach(item => {
      //   item.style.left = `-210px+1px`;
      // });
    },
    handleLeft() {}
  },
  dialogTableVisible() {
    console.log(123);
  }
};
</script>

<style lang="less" scope>
.icon {
  position: fixed;
  right: 50px;
  top: 200px;
 z-index:9999;
  > img {
     
    width: 60px;
    height: 60px;
  }
}
.cooperation {
  background-color: #fff;
  margin: 40px 0;
  .tc {
    margin-bottom: 30px;
    .title {
      padding-bottom: 30px;
      font-size: 40px;
      font-weight: 400;
      display: block;
      > div {
        font-size: 30px;
        font-weight: 200;
      }
    }
    .businessPartner {
      margin: 0 190px;
      display: flex;
      flex-wrap: wrap;
      .image {
        height: 100px;
        width: 20%;
        > img {
          display: block;

          width: 90%;
          height: 90%;
        }
      }
    }
  }
}
.tactics {
  background-color: #f6f7f9;
  height: 490px;
  .tacticsOne {
    margin-bottom: 50px;
    padding-top: 50px;
    .hezuo {
      font-size: 40px;
      display: block;
      > div {
        font-size: 30px;
      }
    }
    .img1 {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      > span {
        // display: block;
        height: 104px;
        line-height: 104px;
      }
      > ul {
        width: 1060px;
        // overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        > li {
          position: relative;
          border: 1px solid #c4c5c7;
          width: 200px;
          height: 104px;
          margin-right: 10px;
          margin-top: 20px;
          img {
            display: block;
            width: 200px;
            height: 100%;
          }
        }
      }
    }
  }
}
.newsInformation {
  .news {
    font-size: 40px;
    font-weight: 400;
    display: block;
    > div {
      font-weight: 200;
      font-size: 30px;
    }
  }
}
.information {
  > ul {
    display: flex;
    > li {
      flex: 1;
      width: 30%;
      > img {
        width: 100%;
      }
      .imgOne {
        width: 88%;
        padding: 9px;
      }
      .textContent {
        display: flex;
        width: 346px;
        .date {
          width: 210px;
          font-size: 14px;
          color: #9c9c9c;
          border-right: 1px solid #d4d4d4;
        }
        .textTitle {
          padding-left: 20px;
          > ul {
            display: block;
            > li {
              font-size: 14px;
              color: #9c9c9c;
              text-align: left;
              margin-bottom: 8px;
            }
            .titleOne {
              font-size: 16px;
              font-weight: 600;
              color: #282828;
            }
            .arrows {
              width: 17px;
              height: 17px;
              color: #cecece;
              padding-left: 3px;
              border: 1px solid #ddd;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
