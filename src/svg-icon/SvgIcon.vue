<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name:"svgIcon",
    props:{
        icon:{
            type:String,
            default:''
        },
        className:{
            type:String,
            default:''
        }
    },
    computed:{
        iconName(){return `#icon-${this.icon}`} ,
        svgClass() {
            if(this.className) {
                return `svg-icon ${this.className}`;
            }else{
                return `svg-icon`;
            }
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>