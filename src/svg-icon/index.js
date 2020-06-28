import Vue from "vue";
import SvgIconComponent from "./SvgIcon";

Vue.component("SvgIcon", SvgIconComponent);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => {
    return requireContext.keys().map(requireContext)
};
requireAll(req);