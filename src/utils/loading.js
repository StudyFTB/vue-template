import { Loading } from 'element-ui';

export const startLoading = () =>{
    return Loading.service({
        background: 'rgba(0, 0, 0, 0.7)',
        text:"拼命加载中。。。"
    });
}

export const closeLoading = () => {
    return startLoading().close();
}

