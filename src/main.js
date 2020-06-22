import Vue from 'vue'
import App from './App.vue'
// elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 路由
import router from '@/router';
import "@/router/navGuard";
// vuex
import store from '@/store';
//自定义svg图标组件
import SvgIcon from "@/svg-icon/SvgIcon";
//全局实例方法
import global from "@/utils/global";

//自定义指令
import "@/utils/directives";

Vue.use(ElementUI).use(global).use(SvgIcon);
Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
