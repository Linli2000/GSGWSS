<template>
  <!-- 面包靴 -->
  <div class="advertising">
    <div class="message">
      <!-- //面包屑 -->
      <div class="sea_bread ct">
        <span>当前位置：</span>
        <a href="#/">双国广告</a>
        <span> ＞ </span>
        <a href="#/search">信息广告流</a>
      </div>
    </div>
    <!-- 下面的内容 -->
    <!-- 广告信息和今日头条 -->
    <div class="advertising1 ct">
      <div class="widePoint">
        <h3>广点通</h3>
        <p>广点通有效实现智能的广告匹配和高效的资源利用</p>
        <span
          >广点通是基于腾讯大社交网络体系的效果广告平台，依托优质流量资源，为广告提供QQ空间，QQ客户端，微信等诸多广告投放平台。</span
        >
      </div>
      <div>
        <h3>今日头条</h3>
        <p>一款基于数据挖掘的推荐引擎产品</p>
        <span
          >今日头条，是国内移动互联网域成长最快的产品服务之一，于2012年3月创建，截止2016年5月，今日头条累计激活用户已达4.8亿，日活跃用户超4700万，月活跃人数超过1.25亿。</span
        >
      </div>
    </div>
    <div class="headline ct">
      <img src="../../assets/img/qNkXzPDirMIe81h.jpg" alt="" />
      <div>
        <h3>UC头条</h3>
        <p>平台主打基于大数据分析用户兴趣标签广告投放</p>
        <span
          >一方面由UC提供海里流量资源，另一方面则由阿里妈妈提供专业的广告后台和服务支持，全面帮助广告主将服务，产品信息更精准有效地推向全球5亿+的UC游览器用户，目前日活跃用户突破1亿+</span
        >
      </div>
    </div>
    <div class="advertising1 ct">
      <div class="widePoint">
        <h3>网易有道</h3>
        <p>有道是网易旗下利用大数据技术提供移动互联网应用的子公司</p>
        <span
          >2012年9月。原有道购物搜索，有道购物助手，网易返现金现全面整合，以"为消费者代言"为宗旨的惠惠网上线，为消费者呈现超值、使用、及时的优惠信息，并保证这些信息的客观公正。惠惠购物助手用户超过3000万。</span
        >
      </div>
      <div>
        <h3>WIFI</h3>
        <p>是一款基于分享紧急模式而推出的免费上网工具</p>
        <span
          >一款自动获取周边免费Wi-Fi热点信息并建立连接的android和iOS手机工具。WiFi万能钥匙已积累热点坐标超过10亿个，每天通过WiFi万能钥匙连接上网的次数超过17亿次</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.advertising {
  font-weight: 300;
  font-size: 16px !important;
  padding-top: 80px;
  .message {
    background-color: #f6f7f8;
    .sea_bread {
      height: 100px;
      line-height: 100px;
      text-align: left;
      margin-bottom: 80px;
      
      a:last-child {
        // font-weight: 900;
      }
      a:hover {
        color: cornflowerblue;
      }
    }
  }
  .advertising1 {
    display: flex;
    margin-bottom: 30px;
    > div {
      width: 450px;
      text-align: left;
      > h3 {
        display: block;
        font-size: 26px;
        color: #1a61b3;
        padding-bottom: 20px;
      }
      > p {
        display: block;
        font-size: 18px;
        color: #1a61b3;
        padding-bottom: 20px;
      }
      > span {
        display: block;
        font-size: 16px;
        color: #a7a7a7;
      }
    }
    .widePoint {
      margin-right: 67px;
    }
  }
  .headline {
    display: flex;
    margin-bottom: 30px;
    > img {
      padding-left: 200px;
      display: block;
      width: 37%;
      height:334px;
    }
    > div {
      text-align: left;
      padding-top: 95px;
      margin-left: 35px;
      > h3 {
        display: block;
        font-size: 26px;
        color: #1a61b3;
        padding-bottom: 20px;
      }
      > p {
        display: block;
        font-size: 18px;
        color: #1a61b3;
        padding-bottom: 20px;
      }
      > span {
        display: block;
   
      }
    }
  }
}
</style>
