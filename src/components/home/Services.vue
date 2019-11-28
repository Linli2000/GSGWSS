<template>
  <div class="services">
    <div class="ct ser_item">
      <div class="item" v-for="(item, index) in services" :key="index">
        <div class="mask"></div>
        <div class="item_title">
          <div class="content">
            {{ item.title }}
          </div>
          <div class="triangle-down"></div>
        </div>
        <div class="item_con">
          <p>
            {{ item.content }}
          </p>
        </div>
        <div class="more" @click="handleSkip(index)">
          {{ item.more }}
        </div>
      </div>
    </div>
  </div>

  
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          title: "搜索广告",
          content:
            "可在百度、神马、搜狗、360等自有一线主流媒体资源中进线效果投放，为客户提升广告效果，投放0风险。",
          more: "More +"
        },
        {
          title: "信息流广告",
          content:
            "广州双国师华南区最大的移动互联网广告技术与服务商之一，拥有国内外一线移动广告平台，包括WIFI、网易有道、UC、今日头条、广点通。",
          more: "More +"
        },
        {
          title: "活动策划",
          content:
            "我们拥有实力雄厚的创新活动策划团队，从创意、策划、设计、物料到执行完美配合，一站式服务。",
          more: "More +"
        }
      ]
    };
  },
  methods: {
    handleSkip(i) {
      // console.log(i);
      if (i === 0) {
        this.$router.push({ path: "search" });
      }
      if (i === 1) {
        this.$router.push({ path: "advertising" });
      }
      if (i === 2) {
        this.$router.push({ path: "eventPlanning" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.services {
  padding-top: 50px;
  padding-bottom: 68px;
  background-color: #f5f8f8;
  .ser_item {
    display: flex;
    justify-content: space-between;
    .item {
      position: relative;
      width: 340px;
      height: 354px;
      background-color: #fff;
      .item_title {
        position: absolute;
        top: -6px;
        left: 74px;
        .content {
          width: 190px;
          text-align: center;
          line-height: 50px;
          color: #fff;
          background-color: #46a0f4;
        }
      }
      .item_con {
        padding: 0 45px;
        padding-top: 96px;
        font-size: 16px;
        text-align: justify;
        text-indent: 2em;
        p {
          line-height: 25px;
          color: #6e6e6e;
        }
      }
      .more {
        position: absolute;
        bottom: 50px;
        left: 115px;
        width: 110px;
        font-size: 16px;
        line-height: 28px;
        background-color: #2458da;
        color: #fff;
        font-weight: normal;
        border-radius: 20px;
      }
    }
  }
}

.mask {
  //   left: 50%;
  position: absolute;
  top: -6px;
  left: 67px;
  width: 192px;
  height: 0;
  border-width: 0 6px 6px 6px;
  border-style: none solid solid;
  border-color: transparent transparent #00377c;
}
.triangle-down {
  position: absolute;
  left: 80px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #46a0f4;
}
</style>
