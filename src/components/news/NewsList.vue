<template>
	<div>
	    <ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
		    	<router-link :to="'/home/newsinfo/'+item.id" class="">
		    		<img class="mui-media-object mui-pull-left" :src="item.img_url">
		    		<div class="mui-media-body">
		    			<h3>{{ item.title}}</h3>
		    			<p class="mui-ellipsis"><span>发表时间：{{ item.add_time | dateFormat }}</span><span>点击：{{ item.click }}</span></p>
		    		</div>
		    	</router-link>
		    </li>
	    </ul>
    </div>
</template>

<script>
    import { Toast } from "mint-ui"
    export default{
        data(){
            return{
                newlist: []
            };
        },
        created(){
            this.getnewsList()
        },
        methods:{
            getnewsList(){
                this.$http.get("api/getnewsList")
                .then(res=>{
                    if(res.body.status===0){
                        this.newlist = res.body.message
                    }else{
                        Toast("列表获取失败")
                    }
                })
            }
        }
    }
</script>

<style scoped>
    h3{
        font-size: 14px;
    }
    .mui-ellipsis{
        display:flex;
        justify-content: space-between;
        font-size: 12px;
        color: rgb(42, 136, 167);
    }
</style>