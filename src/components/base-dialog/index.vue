<template>
<el-dialog
    :class="dialogClass"
    @close="onClose"
    @open="onOpen"
    :title="dialogConfig.title || ''"
    :visible.sync="dialog"
    :center="dialogConfig.center || true"
    :close-on-click-modal="dialogConfig.closeOnClickModal || false"
    :width="dialogConfig.width || `50%`"
    append-to-body>
    <slot></slot>
    <template v-slot:footer v-if="dialogConfig.showFooter">
        <slot name="footer"></slot>
    </template>
</el-dialog>
</template>

<script>
export default {
    props:{
        dialogConfig:{
            type: Object,
            default: () => {}
        },
        visible:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            dialog:this.visible,
            dialogClass: ""
        }
    },
    watch:{
        visible:{
            immediate: true,
            handler(visible) {
                this.dialog = this.visible
            }
        }
    },
    created(){
        //如果没有showFooter，赋值为true
        if(this.dialogConfig.showFooter === undefined) this.dialogConfig.showFooter=true;
        if(this.dialogConfig.isFull){
            if(this.dialogConfig.showFooter) this.dialogClass = `full-dialog`;
            else this.dialogClass = `full-dialog-no-footer`;
        }else{
            this.dialogClass = ""
        }
    },
    methods:{
        onClose(){
            this.$emit('update:visible', false);
        },
        onOpen(){
            this.$emit('update:visible', true);
        }
    }
}
</script>

<style lang="scss" scoped>
// 普通样式
/deep/ .el-dialog {
    max-height: calc(100% - 20px);
    margin: 10px auto !important;
    overflow: auto !important;
    position: relative;
    .el-dialog__header{
        height:32px !important;
        box-sizing: border-box;
        padding:5px 10px !important;
    }
    .el-dialog__headerbtn{
        top:10px !important;
    }
    .el-dialog__body{
        box-sizing: border-box;
        padding:5px 10px !important;
    }
    .el-dialog__footer{
        box-sizing: border-box;
        height: 38px !important;
        padding:5px 10px !important;
    }
}
//弹出框中有full-dialog就是撑满的弹出框
.full-dialog{
    /deep/ .el-dialog{
        height: calc(100% - 20px) !important; //上下外边距为10px
        .el-dialog__body{
            height: calc(100% - 70px); //弹出框中头部为34px
            overflow: auto;
        }
    }
}
.full-dialog-no-footer{
    /deep/ .el-dialog{
        height: calc(100% - 20px) !important; //上下外边距为10px
        .el-dialog__body{
            height: calc(100% - 32px); //弹出框中头部为34px
            overflow: auto;
        }
    }
}
</style>
<!--
<base-dialog :dialogConfig="dialogConfig" :visible.sync="dialog">
    <template #default>
        ...
    </template>
    <template #footer>
        <btn-bottom-dialog
            :btnType="btnType"
            @btn-submit="submitForm('myform')"
            @btn-cancel="dialog=false" />
    </template>
</base-dialog>

dialog:true, //布尔类型
dialogConfig:{
    title:"添加控制台菜单按钮", // 弹出框标题
    showFooter: true, // 是否有底部按钮，默认true
    isFull: false, //是否撑满，默认false
    center:true // 是否头部和底部居中，默认true
    closeOnClickModal:false //是否可以通过点击 modal 关闭 Dialog，默认false
    width:"50%",
}

-->