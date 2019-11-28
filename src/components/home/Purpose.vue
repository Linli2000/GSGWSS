<template>
  <div class="purpose ct">
    <div class="title">
      <span>我们的宗旨</span>
      <span>Our Purpose</span>
    </div>
    <div class="pur_main">
      <div class="item" v-for="(item, index) in purpose" :key="index">
        <div class="item_img  ">
          <img   :src="item.img  " alt="" />
        </div>
        <div class="item_content">
          <span>{{ item.title }}</span>
          <span>{{ item.title2 }}</span>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      purpose: [
        {
          img  : "https://s2.ax1x.com/2019/10/31/KoEgAK.jpg",
          title: "我们的目标",
          title2: "Our goal",
          content:
            "让每一位客户通过我司的精准广告投放，都取得不错的品牌宣传、推广以及带来的客户转化，做到物超所值。"
        },
        {
          img  : "https://s2.ax1x.com/2019/10/31/KoVnD1.jpg",
          title: "我们的产品",
          title2: "Our Product",
          content:
            "产品的创新是一个优秀企业的灵魂，产品的质量是一个优秀的企业的命脉，我们需要好的产品来证明我们的地位与尊严。"
        },
        {
          img  : "https://s2.ax1x.com/2019/10/31/Komqqs.jpg",
          title: "我们的服务",
          title2: "Our Service",
          content:
            "当我们第一次建立沟通时，我们的服务就已经开始，客户永远是被放在第一位，我们始终站在客户的角度去思考。"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.purpose {
  padding-top: 88px;
  padding-bottom: 70px;
  .title {
    padding-bottom: 30px;
    span {
      display: block;
    }
    span:nth-child(1) {
      font-size: 40px;
      font-weight: 400;
    }
    span:nth-child(2) {
      font-size: 30px;
      color: #6a6a6a;
      font-weight: 0;
      font-family: monospace;
    }
  }
  .pur_main {
    display: flex;
    justify-content: space-between;
    .item {
      width: 340px;
      height: 384px;
      cursor: pointer;
      //   box-shadow: 0 0 5px 1px #eee;
      .item_img   {
        padding-top: 16px;
        padding-bottom: 28px;
        img   {
          display: block;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto;
        }
      }
      .item_content {
        display: flex;
        flex-direction: column;
        padding: 0 25px;
        // padding-left: 10px;
        span:nth-child(1) {
          font-size: 26px;
          color: #3f84d4;
          padding-bottom: 10px;
        }
        span:nth-child(2) {
          padding-bottom: 20px;
          color: #d7d7d7;
        }
        p {
          color: #ccc;
          font-size: 16px;
          text-align: justify;
          line-height: 25px;
        }
      }
    }
    .item:hover {
      box-shadow: 0 0 5px 2px #eee;
    }
  }
}
</style>
