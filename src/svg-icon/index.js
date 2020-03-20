import SvgIconComponent from "./SvgIcon";

// 只要在index.js里规定了install方法，就可以向其他ui组件库那样，使用Vue.use()来全局使用
const SvgIcon = {
    install: Vue => {
    Vue.component("SvgIcon", SvgIconComponent);
    }
}

const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => {
    return requireContext.keys().map(requireContext)
};
requireAll(req);

export default SvgIcon;