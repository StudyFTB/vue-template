import { MessageBox, Message } from "element-ui";

export default {
    install(Vue) {
        /**
         * 确认框
         * @param {
         * {
         *  message 提示内容，可空
         *  title 提示标题，可空
         *  type 提示类型，可空。success / info / warning / error图标
         *  confirmFn 执行行数，非空。() => {}
         * }
         * } options 
         */
        Vue.prototype.$_confirm = options => {
            MessageBox.confirm(options.message || "此操作将为删除, 是否继续?",options.title || "提示",{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: options.type || 'warning'
            }).then(() => {
                options.confirmFn() || ""
            }).catch(() => {});
        }
        /**
         * 设置时间日期
         * @param {
         * date 距离今天的天数
         * } date 
         */
        Vue.prototype.$_setDate = date => {
            let d = new Date();
            d.setDate(d.getDate() + date);
            let y = d.getFullYear();
            let m = (d.getMonth()+1).toString().padStart(2,"0");
            let day = d.getDate().toString().padStart(2,"0");
            return `${y}-${m}-${day}`;
        }

        /**
         * 
         * @param {
         * message 提示消息的内容，非空
         * type 提示消息的类型，可空
         * } param0 
         */
        Vue.prototype.$_tip = (message,type="warning") => {
            Message({
                type,message
            })
        }
    }
}