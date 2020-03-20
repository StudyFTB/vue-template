/* 导航守卫 */
import router from "./index";
import { Message } from 'element-ui';
import { getToKen, emptyCookie } from "@/utils/app"

/* 路由白名单 */
const whiteRouter = ["/login"];

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }else{
        document.title = `TRU云门禁`;
    }

    /* 判断是否需要弹出到登录页面 */
    if(getToKen()){
        if(to.path === "/login"){
            emptyCookie();
            next();
        }else{
            next();
        }
    }else{
        if(whiteRouter.indexOf(to.path) !== -1) {  // 存在
            next();  // to
        }else{
            Message({
                message:"请先登录",
                showClose:true
            });
            next('/login')  // 路由指向
        }
    }
});