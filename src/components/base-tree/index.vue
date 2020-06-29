<template>
<div id="base-tree">
    <el-tree
        ref="tree"
        :data="treeConfig.treeData"
        :default-expand-all="treeConfig.expandAll"
        :expand-on-click-node="false"
        :check-on-click-node="true"
        :show-checkbox="treeConfig.showCheckbox || false"
        :check-strictly="false"
        :highlight-current="true"
        @node-click="onNodeClick"
        :node-key="treeConfig.nodeKey || ``"
        :default-checked-keys="treeConfig.defaultCheckedKeys || []"
        :props="treeConfig.defaultProps">
        <!-- 插槽 -->
        <template v-slot="{ node, data }" v-if="treeConfig.isSolt || false">
            <slot :node="node" :data="data"></slot>
        </template>
    </el-tree>
</div>
</template>

<script>
export default {
    props: {
        treeConfig:{
            type: Object,
            default:() => {}
        }
    },
    created(){
        //若defaultProps为空，默认
        if(!this.treeConfig.defaultProps){
            this.treeConfig.defaultProps = {
                children: 'children',
                label: 'label'
            };
        }
        // 若expandAll为空，默认true展开
        if(this.treeConfig.expandAll == undefined){
            this.treeConfig.expandAll = true;
        }
    },
    methods:{
        // 点击树状图节点
        onNodeClick(data,node){
            this.$emit("node-click",data,node);
        },
        // 树状图展开或关闭的方法
        expandAll(expandState){
            for(var i=0;i<this.$refs.tree.store._getAllNodes().length;i++){
                this.$refs.tree.store._getAllNodes()[i].expanded=expandState;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#base-tree{
    // 高亮
    // /deep/ .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    //     background-color: #cce7ff !important;
    // }
    /deep/ .el-tree{
        .el-tree-node {
            position: relative;
            padding-left: 3px;
        }
        //节点有间隙，隐藏掉展开按钮就好了,如果觉得空隙没事可以删掉
        .el-tree-node__expand-icon.is-leaf{
            display: none;
        }
        .el-tree-node__children {
            padding-left: 16px;
            .el-tree-node__content{
                padding-left: 0px !important;
                // background-color: #fff;
                z-index: 999;
            }
        }
        .el-tree-node__expand-icon{
            padding: 0px !important;
            font-size: 18px !important;
        }

        .el-tree-node :last-child:before {
            height: 38px;
        }

        &> .el-tree-node:before {
            border-left: none;
        }

        &> .el-tree-node:after {
            border-top: none;
        }

        .el-tree-node:before {
            content: "";
            left: -7px;
            position: absolute;
            right: auto;
            border-width: 1px;
        }

        .el-tree-node:after {
            content: "";
            left: -7px;
            position: absolute;
            right: auto;
            border-width: 1px;
        }

        .el-tree-node:before {
            border-left: 1px dashed #4386c6;
            bottom: 0px;
            height: 100%;
            top: -26px;
            width: 1px;
        }

        .el-tree-node:after {
            border-top: 1px dashed #4386c6;
            height: 20px;
            top: 12px;
            width: 8px;
        }
    }
}
</style>
<!--
说明：
例：
<base-tree :treeConfig="treeConfig"> //可以带class=width: 300px;height: 100%;overflow: auto;
    <template v-slot="{ node, data }">
        <span class="custom-tree-node">
            <span>{{ node.label }}</span>
            ...
        </span>
    </template>
</base-tree>
参数为：
treeConfig: {
    isSolt:true, //可空，默认为false
    nodeKey: "", // 可空，String
    showCheckbox: true, // 可空，Boolean，默认false
    defaultProps: { //可空，默认为下面数据
        children: 'children',
        label: 'label'
    },
    expandAll:false, //刚开始是否全部展开，默认为true展开。
    defaultCheckedKeys: [] // 刚开始勾选的节点的keys，默认为[]
    treeData: [ //不可空，需按照下面的结构数据，看配置
        {
            id: 1,
            label: '一级 1',
            children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                    id: 9,
                    label: '三级 1-1-1'
                }, {
                    id: 10,
                    label: '三级 1-1-2'
                }]
            }]
        }, {
            ...
        }
    ]
}
-->