<template>
  <div class="about">
      <div class="ct">
      <div class="about-a">
        <div class="about-b">关于我们</div>
          <div class="dangqian">
            <span>当前位置：</span>
            <a href="#/">首页</a>
            <span>＞</span>
            <a href="#/search">关于我们</a>
          </div>
        </div>
      </div>

      <div class="synopsis">
        <div class="synopsis-a">
          <div>简介</div>
        </div>
        <div class="synopsis-b ct">
         <div class="synopsis-img">
           <img src="../../assets/img/K71FwF.md.jpg" alt="">
          </div>
          <div class="synopsis-text">
           <div>双国广告拥有独特的技术优势和丰富的移动广告开发经验,通过先进的数据挖掘技术满足广告主的精确投放需求,开设多种广告模式让广告主花费更少效果更佳。</div>
           <div>双国广告专注于移动网站广告营销的平台,致力于为广告主提供精准高效的产品和品牌推广服务,同时为网站主提供丰富高效的流量变现方案 ,使得双方营销资源价值最大化,投放广告的最佳选择,最值得信赖的广告投放平台！</div>
    
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>

.about {
  background-color: #f6f7f8;
  
  text-align: left;
  margin-top: 80px;
}
.about-a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 100px;
}
.about-b {
  font-weight: bold;
}
.dangqian {
  font-size: 16px;
}
.synopsis {
 align-items: center;
  background-color: #fff;
  height: 940px;
}

.synopsis-a{
  padding-top: 60px;
  font-size: 30px;
  text-align: center;
}
.synopsis-img{

>img{
width: 107%;
height: 100%;
margin-left: 80px;
}
  width: 100%;
  height: 100%;
  
}
.synopsis-b{
   display: flex;
  //  justify-content: center;
   padding-top:80px;
  //  align-items: center;
}
.synopsis-text{ 
  :nth-child(1){
    padding-bottom: 25px;
    
  }
  >div{
    margin-left: 125px;
    width: 55%;
  }
padding-left: 40px;
   
}

</style>
