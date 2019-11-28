<template>
  <div class="home">
    <Banner />
    <Purpose />
    <Services />
    <Cooperation />

  </div>
</template>

<script>
import Banner from "../components/home/Banner";
import Purpose from "../components/home/Purpose";
import Services from "../components/home/Services";
import  Cooperation from "../components/home/Cooperation";
export default {
  name: "home",
  components: {
    Banner,
    Purpose,
    Services,
    Cooperation,
  },
  activated(v) {
    console.log(v);
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>
