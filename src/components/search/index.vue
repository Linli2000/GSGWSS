<template>
  <div class="search ">
    <BreadCrumbs>
      <!-- //面包屑 -->
      <div class="sea_bread ct">
        <span>当前位置：</span>
        <a href="#/">双国广告</a>
        <span> ＞ </span>
        <a href="#/search">搜索广告</a>
      </div>
    </BreadCrumbs>
    <!-- 广告信息 -->
    <AdvInformation />
   
  </div>
</template>
<script>
import BreadCrumbs from "./children/BreadCrumbs";
import AdvInformation from "./children/AdvInformation";
export default {
  data() {
    return {};
  },
  components: {
    BreadCrumbs,
    AdvInformation
  }
};
</script>
<style lang="less" scoped>
.search {
  font-weight: 300;
  font-size: 16px !important;
  padding-top: 80px;
}
.sea_bread {
  a:last-child {
    // font-weight: 900;
  }
  a:hover {
    color: cornflowerblue;
  }
}
</style>
