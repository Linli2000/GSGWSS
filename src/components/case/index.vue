<template>
  <div class="advertising">
    <div class="ct">
      <div class="advertising-up">
        <div class="dangqian">
          <span>当前位置：</span>
          <a href="#/">双国广告</a>
          <span>＞</span>
          <a href="#">客户案例</a>
          <span>＞</span>
          <a href="#">活动案例</a>
        </div>
      </div>
      <div class="activity">
        <span>活动类型</span>
        <span>周年庆</span>
        <span>开业庆典</span>
        <span>年会</span>
        <span>发布会</span>
        <span>招商会</span>
        <span>路演推广</span>
        <span>商场活动</span>
        <span>地产活动</span>
        <span>节点活动</span>
      </div>
    </div>
    <div class="advertising-down">
     <div class="ct">
       <ul>
         <li> <img src="../../assets/img/KL9GQJ.md.jpg" alt="">
      <p>重庆华骏龙汽车销售有限公司</p></li>
         <li><img src="../../assets/img/KvG6HJ.md.jpg" alt="">
      <p>峨眉山假日酒店开业典礼</p></li>
         <li> 
      <img src="../../assets/img/KvanAg.md.jpg" alt="">
      <p>文化东方酒店巡展</p></li>
           <li> 
      <img src="../../assets/img/KvNpDO.md.jpg" alt="">
      <p>盛景基因招商会</p></li>
         <li> 
      <img src="../../assets/img/KxQy6g.md.jpg" alt="">
      <p>宜百味 品牌战略升级发布会</p></li>
         <li> 
      <img src="../../assets/img/KvoqCd.md.jpg" alt="">
      <p>中美史克商场活动</p></li>
         <li> 
      <img src="../../assets/img/KvTC5Q.md.jpg" alt=""> 
      <p>广东鸿粤集团年会</p></li>
         <li> 
      <img src="../../assets/img/KvTebT.md.jpg" alt="">
      <p>缤纷主题婚礼</p></li>   
         <li> 
      <img src="../../assets/img/KvT12R.md.jpg" alt="">
      <p>金爵华府活动</p></li>
  </ul>
</div>
</div>
 
    </div>

</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.advertising {
  background-color: #f6f7f8;
  text-align: left;
  margin-top: 80px;
}
.advertising-up {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 100px;
}
.dangqian {
  font-size: 15px;
  > :nth-child(6) {
    font-weight: 550;
    font-size: 18px;
  }
}
.activity {
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  > :nth-child(1) {
    font-size: 18px;
   margin-right: 15px;
  }
  font-size: 15px;
}

.advertising-down {
  padding-top: 95px;
  background-color: #fff;
  height: 940px;

}
  li{
    width: 366px;
    height: 250px;
    margin-bottom: 25px;
  }
  
img{
  width: 300px; 
}
</style>
