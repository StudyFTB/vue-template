import Vue from "vue";
import store from '@/store';

Vue.directive("auth",{ //按钮权限的指令
    inserted(el, binding, vnode){
        let authVal = false; //按钮权限
        const btnAuths = store.state.authority.authorityArr;
        for(const item of btnAuths){
            if(item.menuNo == binding.value){
                authVal = item.authority;
            }
        }
        if(!authVal && binding.value!==""){
            el.parentNode.removeChild(el);
        }
    }
})