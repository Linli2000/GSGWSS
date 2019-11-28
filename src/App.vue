<template>
  <div id="app">
    <Navbar />
    <router-view />
    <BotBar />
  </div>
</template>

<script>
import Navbar from "./components/navbar/Nvabar";
import BotBar from "./components/botbar/BotBar";
export default {
  components: {
    Navbar,
    BotBar
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  min-width: 1200px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
