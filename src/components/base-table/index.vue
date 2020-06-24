<template>
<div id="base-table">
    <el-table 
        :data="tableConfig.tableData" 
        border 
        size='mini' 
        :row-key="tableConfig.rowKey || ``"
        default-expand-all
        :indent="16"
        @row-click="onRowClick"
        :class="tableConfig.pagination.show ? 'tab' : 'tab-noPage'"
        :highlight-current-row="tableConfig.rowHighlight" >
        <el-table-column 
            v-if="tableConfig.selection" 
            type="selection" 
            width="55" 
            align="center"
            :reserve-selection="tableConfig.reserveSelection || false"/>
        <template v-for="column in tableConfig.columns">
            <!-- 插槽列 -->
            <el-table-column 
                 v-if="column.soltName"
                :key="column.id"
                :label='column.label'
                :align='column.align || tableConfig.align'
                :width="column.width"
                :prop='column.prop'
                :fixed="column.fixed">
                <template slot-scope="scope">
                    <slot :name="column.soltName" :data="scope"></slot>
                </template>
            </el-table-column>
            <!-- 文本列 -->
            <el-table-column 
                v-else
                :key="column.id"
                :label='column.label'
                :align='column.align || tableConfig.align'
                :width="column.width"
                :prop='column.prop'
                :fixed="column.fixed">
            </el-table-column>
        </template>
    </el-table>
    <el-pagination
        v-if="tableConfig.pagination.show"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
        background
        :current-page="tableConfig.pagination.currPage || 1"
        :page-sizes="[10,20,50,100]"
        :page-size="tableConfig.pagination.pageSize || 20"
        layout="total,sizes,prev, pager, next,jumper"
        :total="tableConfig.pagination.total || 0">
    </el-pagination>
</div>
</template>

<script>
export default {
    props: {
        tableConfig:{
            type:Object,
            default:() => {}
        }
    },
    created(){
        //默认为全局对齐方式center
        this.tableConfig.align = this.tableConfig.align || "center";
        //默认隐藏分页
        if(!this.tableConfig.pagination){ //没写pagination
            this.tableConfig.pagination = { show:false };
        }else{
            //没写show
            if(!this.tableConfig.pagination.show) this.tableConfig.pagination.show = false;
        }
        // 默认高亮行
        if(this.tableConfig.rowHighlight == undefined){
            this.tableConfig.rowHighlight = !this.tableConfig.selection;
        }
    },
    methods:{
        // 点击表格行触发
        onRowClick(row, column, event){
            this.$emit("row-click",row);
        },
        // pageSize 每页条数改变
        onSizeChange(pageSize){
            this.$emit("size-change",pageSize);
        },
        // currentPage 当前页码改变
        onCurrentChange(currentPage){
            this.$emit("current-change",currentPage);
        }
    }
}
</script>

<style lang="scss" scoped>
#base-table{
    /deep/ .tab{
        height: calc(100% - 32px) !important;
        overflow: auto !important;
    }
    /deep/ .tab-noPage{
        height: 100% !important;
        overflow: auto !important;
    }
}
</style>

<!--
表格组件
例：<base-table :tableConfig="tableConfig" style="height:calc(100% - 36px)">
        <template #details="{ data }">
            <el-button type="danger" size="mini" @click="onDetails(data)">
                查看详情
            </el-button>
        </template>
    </base-table>
参数说明：
tableConfig:{
    rowHighlight: true,//是否高亮选择行
    selection:true, //多选框，true为显示多选框
    rowKey:"", //在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。
    reserveSelection: true, //类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据
    align:"center", //全部列的对齐方式，默认center
    pagination: { //不写默认隐藏分页
        show:true, //是否显示分页
        currPage:1, //当前页码
        pageSize:20, //每页条数
        total:0 //总条数
    },
    tableData: [ //表格行的数据
        {
            CompanyID: ""
            ...
        },
        ...
    ],
    columns:[ //每列数据参数，选填
        {
            label:"企业ID", //列名
            prop:"CompanyID", //列对应的值
            width:"65", //宽度
            soltName:"menuSet", //是否使用插槽，有值就是有插槽，值为插槽名
            align:"center", //对齐方式,权重大于全局的align
            fixed:"", //固定位置，值为true, left, right
        },
        ...
    ]
}
-->