// 入口文件
import Vue from 'vue'

// 导入 mui 的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



// 按需导入 Mint-UI 中的组件
import { Header, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'


// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


//导入根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/'



//导入时间格式化插件
import moment from 'moment'

//全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:MM:SS") {
    return moment(dataStr).format(pattern)
})



// 导入 App 根组件
import app from './App.vue'

let vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})