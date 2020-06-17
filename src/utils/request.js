import axios from "axios";
import { Message, Loading } from 'element-ui';
import { getToKen, getUserName } from "@/utils/app";
//配置
import { host } from "@/config/http";

/* 
*等待动画
 */
const myLoading = () =>{
    return Loading.service({
        background: 'rgba(0, 0, 0, 0.7)',
        text:"拼命加载中。。。"
    });
}

//声明一个对象用于存储请求个数
let needLoadingRequestCount = 0;
function showMyLoading() {
    if (needLoadingRequestCount === 0) {
        myLoading();
    }
    needLoadingRequestCount++;
};
function HideMyLoading() {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        myLoading().close();
    }
};

/**
 * axios拦截器
 */
const BASEURL = host;
const service = axios.create({
    baseURL: BASEURL,
    timeout: 10000
});

service.defaults.withCredentials = false;

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 添加等待动画
    showMyLoading();
    // 添加头部信息
    config.headers['Content-Type'] = 'application/json';
    if(getToKen()){
        config.headers['token'] = getToKen();
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    HideMyLoading();
    Message.error(error.message);
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 关闭动画
    HideMyLoading();
    // 处理响应数据
    let res = response.data;
    if(res.code != 20000){
        Message.error(res.msg);
        return Promise.reject(res);
    }else{
        return response;
    }
}, function (error) {
    // 对响应错误做点什么
    HideMyLoading();
    Message.error(error.message);
    return Promise.reject(error);
});

export default service;