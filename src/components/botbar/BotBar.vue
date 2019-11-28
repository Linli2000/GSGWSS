<template>
  <div class="botbar">
    <div class="bot_con ct">
      <div class="bot_con_lf bot_both">
        <span>营销产品</span>
        <span>活动策划</span>
        <span>搜索广告</span>
        <span>信息流广告</span>
      </div>
      <div class="bot_con_ct bot_both">
        <span>联系我们</span>
        <div class="tel">
          <i>QQ:</i>
          <span></span><span>1559661845</span>
        </div>
        <div class="eml">
          <i></i>
      <span style="white-space:nowrap">邮箱:1559661845@qq.com</span>
        </div>
      </div>
      <div class="bot_con_rt">
        <p>官方微信</p>
        <div class="erwm"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.botbar {
  height: 220px;
  background-color: #1b1b1b;
  color: #fff;
  // position: relative;
  // bottom: -1500px;
  .bot_con {
    padding: 32px 0;
    display: flex;
    .bot_con_lf {
      padding-left: 155px;
      margin-right: 80px;
    }
    .bot_con_ct {
      margin-right: 142px;
      .tel {
        padding-top: 22px;
      }
    }
    .bot_con_rt {
      width: 308px;
      height: 126px;
      padding: 0 84px;
      border-left: 1px solid #777;
      border-right: 1px solid #777;
      p {
        padding-bottom: 10px;
      }
      .erwm {
        width: 139px;
        height: 132px;
        background-color: #333333;
        margin: 0 auto;
      }
    }
  }
}
.bot_both {
  display: flex;
  width: 145px;
  flex-direction: column;
  text-align: justify;

  span {
    line-height: 30px;
  }
  span:first-child {
    font-size: 26px;
    padding-bottom: 8px;
    border-bottom: 2px solid #fff;
  }
  span:nth-child(2) {
    padding-top: 22px;
  }
}

</style>
