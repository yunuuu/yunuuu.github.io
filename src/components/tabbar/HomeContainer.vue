<template>
  <div>
    <mt-swipe :auto="4000" style="height:200px">
      <mt-swipe-item v-for="item in lunbolist" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
  data() {
    return {
      lunbolist: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http
        .get("api/getlunbo")
        .then(res => {
          console.log(res.body);
          if (res.body.status === 0) {
            this.lunbolist = res.body.message;
          } else {
            Toast("轮播图失败");
          }
        });
    }
  }
};
</script>

<style scoped>
div{
  height: 100%;
  background-color: #fff;
}
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
li{
  border: 0!important;
}
li img{
  width: 60px;
  height: 60px;
}
</style>