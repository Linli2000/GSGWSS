<template>
  <div class="banner">
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in img  " :key="item">
          <img   :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: [

        "https://ftp.bmp.ovh/img  s/2019/11/ff02205ef939cab2.jpg",
        "https://i.loli.net/2019/11/06/X7hRCz4qdvUEKVF.jpg",
        "https://i.loli.net/2019/11/06/uCShqUyQAlxOLtK.jpg",
       
      ]
    };
  } 
};
</script>
<style lang="less" scoped>
.banner {
  padding-top: 80px;
  width: 100%;
  img   {
    width: 100%;
  }
}
/deep/.el-carousel__button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
