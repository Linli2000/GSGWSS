<template>
  <div class="navbar">
    <div class="nav_main">
      <div class="logo">
        <h1>logo</h1>
      </div>
      <div class="nav_meau">
        <ul>
          <li :class="{ active: this.$route.path == '/' }">
            <router-link to="/" class="hh">首页</router-link>
          </li>
          <li :class="{ active: this.$route.path == '/search' }">
            <router-link to="/search">搜索广告</router-link>
          </li>
          <li :class="{ active: this.$route.path == '/advertising' }">
            <router-link to="/advertising">信息流广告</router-link>
          </li>
          <li :class="{ active: this.$route.path == '/eventPlanning' }">
            <router-link to="/eventPlanning">活动策划</router-link>
          </li>
          <li :class="{ active: this.$route.path == '/case' }">
            <router-link to="/case">客户案例</router-link>
            <i class="icon el-icon-caret-bottom"></i>
          </li>
          <li :class="{ active: this.$route.path == '/news' }">
            <router-link to="/news">新闻资讯</router-link>
          </li>
          <li :class="{ active: this.$route.path == '/about' }">
            <router-link to="/about">关于我们</router-link>
          </li>
          <li :class="{ active: this.$route.path == '/callus' }">
            <router-link to="/callus">联系我们</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: ["首页", "首页", "首页"]
    };
  }
};
</script>
<style lang="less" scoped>
.navbar {
  position: fixed;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  .nav_main {
    display: flex;
    margin: 0 auto;
    width: 1152px;
    background-color: #fff;
    overflow: hidden;
    .logo {
      width: 135px;
      height: 58px;
      background-color: aliceblue;
      //   margin-top: 10px;
      margin: 15px 0 11px;
      margin-right: 44px;
      h1 {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        background-image: url("../../assets/img/logo.png");
        background-size: 97% 93%;
        background-color: #fff;
        background-repeat: no-repeat;
        font-size: 0;
      }
    }
    .nav_meau {
      ul {
        padding-top: 14px;
      }
      li {
        padding: 0 23px;
        position: relative;
        text-align: center;

        cursor: pointer;
        a {
          display: inline-block;
          line-height: 53px;
          color: #454545;
        }
        .icon {
          position: absolute;
          top: 15px;
          right: 2px;;
        }
      }
      li:last-child {
        padding: 0px 11px !important;
      }
      .active {
        border-bottom: 2px solid #0260bb;
        color: #2c85dc;
      }
      .active a {
        color: #2c85dc;
      }
      li:hover a {
        color: #2c85dc;
      }
      li:last-child {
        padding-right: 0;
      }
    }
  }
}
.router-link-active {
  width: 100%;
  height: 100%;
  display: inline-block !important;
  color: aquamarine;
}
/deep/.hh {
}
</style>
