<template>
<div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title"> {{newsinfo.title}} </h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间： {{newsinfo.add_time}} </span>
      <span>点击： {{newsinfo.click}} 次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>


    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>



  </div>
</template>


<script>
  import Comment from '../comment/Comment.vue'

  import { Toast } from "mint-ui"
  export default{
     data(){
       return{
         id:this.$route.params.id,
         newsinfo:{}
       }
     },
     created(){
       this.getnewsinfo()
     },
     methods:{
       getnewsinfo(){
         this.$http.get("api/getnew/"+ this.id).then(res=>{
           if(res.body.status===0){
             this.newsinfo = res.body.message[0]
             console.log(this.newsinfo);
             
           }else{
             Toast("获取详情失败");
           }
         })
       }
     },
     components:{
       "comment-box": Comment
     }
   }

</script>

<style>
  .newsinfo-container {
    padding: 0 4px;
  }
  .newsinfo-container .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .newsinfo-container .subtitle {
    font-size: 13px;
    color: rgb(42, 136, 167);
    display: flex;
    justify-content: space-between;
  }
  
</style>