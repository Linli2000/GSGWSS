<template>
  <div class="AdvInformation">
    <div class="ct">
      <div class="adv_item test">
        <span>百度搜索</span>
        <p>是国内首创的一种按效果付费的网络推广方式</p>
        <p>
          通常客户使用的百度账户分为2种类型，一种是端口户，不限消费，但网站内容和广告物料限制较多；另外一种就是框架户，顾名思义就是直接和百度总部签订的框架协议，大客户专用的账户。
        </p>
      </div>
      <div class="adv_item">
        <span>神马搜索</span>
        <p>是阿里巴巴旗下的专注移动互联网的搜索引擎</p>
        <p>
          致力于为用户创造方便、快捷、开放的移动搜索新体验。2015年8月,神马搜索一站式生活服务平台(ola.sm.cn)全新上线,致力于与合作伙伴互动互通.搭建移动搜索交互产品模式
        </p>
      </div>

      <div class="adv_item test">
        <span>搜狗搜索</span>
        <p>拥有搜狗搜索,搜狗输入法,搜狗浏览器等搜索频道</p>
        <p>
          搜狗推广包括搜索推广和图文推广,以搜狐、搜狗矩阵及众多优质网络媒体资源为平台,根据用户行为特征及潜在兴趣和需求,以关键词或者图片、文字、FLANSH动画等多种展现形式来帮助广告主实现精准推广。
        </p>
      </div>
      <div class="adv_item">
        <span>360搜索</span>
        <p>360搜索推广是当民通过360浏览器进行关键词搜索
        </p>
        <p>
         360推广包括搜索推广和图文推广,以360浏览器矩阵及众多优质网络媒体资源为平台,根据用户行为特征及潜在兴趣和需求,以关键词或者图片、文字、FLANSH动画等多种展现形式来帮助广告主实现精准推广。        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.AdvInformation {
  padding-bottom: 238px;
  .ct {
    padding-top: 62px;
    display: flex;
    flex-wrap: wrap;
    background: url("../../../assets/img/search_adv.png") no-repeat;
    background-position: center;
  }

  .test {
    margin-right: 150px;
  }
  .adv_item:nth-child(1) {
    padding-bottom: 462px;
  }
  .adv_item {
    text-align: justify;
    width: 467px;
    span:nth-child(1) {
      font-size: 30px;
      font-weight: 400;
      color: #236cb5;
    }

    p:nth-child(2) {
      padding-top: 18px;
      padding-bottom: 30px;
      font-size: 20px;
      color: #236cb5;
    }
    p:last-child {
      color: #a1a1a1;
      line-height: 30px;
      font-size: 18px;
    }
  }
  .adv_img   {
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>
