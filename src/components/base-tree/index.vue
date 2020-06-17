<template>
<div>
    <el-tree
        :data="treeConfig.treeData"
        :default-expand-all="treeConfig.expandAll || true"
        :expand-on-click-node="false"
        :check-on-click-node="true"
        :show-checkbox="treeConfig.showCheckbox || false"
        :check-strictly="false"
        :highlight-current="true"
        @node-click="onNodeClick"
        :node-key="treeConfig.nodeKey || ``"
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
    },
    methods:{
        onNodeClick(data,node){
            this.$emit("node-click",data,node);
        }
    }
}
</script>

<style lang="scss" scoped>
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
    showCheckbox: true, // 可空，Boolean，默认true
    defaultProps: { //可空，默认为下面数据
        children: 'children',
        label: 'label'
    },
    expandAll:false, //刚开始是否全部展开，默认为true展开。
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