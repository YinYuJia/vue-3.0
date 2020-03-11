<!--  -->
<template>
    <div style="padding:.15rem .20rem" class="system">
        <div style="margin-top:.55rem;margin-bottom:.15rem">
            <!-- <el-button class="goback" @click="goback">返回</el-button> -->
            <el-date-picker v-model="form.value1" type="date" value-format="yyyy-MM-dd" placeholder="选择开始日期">
            </el-date-picker>
            -
            <el-date-picker v-model="form.value2" type="date" value-format="yyyy-MM-dd" placeholder="选择结束日期">
            </el-date-picker>
            <!-- <el-button style="margin-left:15px" @click="getMessage">查询</el-button> -->
            <el-select style="margin-left:.15rem" v-model="status" placeholder="状态查询">
                <el-option label="全部" value=""></el-option>
                <el-option label="正常" value="1"></el-option>
                <el-option label="异常" value="2"></el-option>
            </el-select>
            <el-button style="margin-left:15px" icon="el-icon-search" type="warning" @click="getMessage">查询</el-button>
        </div>
        <el-table :row-class-name="tableRowClassName" :data="tableData.slice((form.page-1)*15,(form.page)*15)" style="width: 100%;height:7.7rem">
            <el-table-column label="站点名称" width="182">
                <template slot-scope="scope">
                                    <span>{{ scope.row.StationName }}</span>
</template>
            </el-table-column>
            <el-table-column
            label="柜名"
            min-width="182">
<template slot-scope="scope">
    <span>{{ scope.row.CabinetName }}</span>
</template>
           </el-table-column>
            <el-table-column
            label="更新时间"
            min-width="182">
<template slot-scope="scope">
    <span>{{ scope.row.UpdateTime | formatterTims() }}</span>
</template>
           </el-table-column>
            <el-table-column
                    label="温度"
                    min-width="82">
<template slot-scope="scope">
    <span>{{ scope.row.TempNum }}℃</span>
</template>
            </el-table-column>
            <el-table-column
                    label="湿度"
                    min-width="82">
<template slot-scope="scope">
    <span>{{ scope.row.HumidityNum }}%rh</span>
</template>
            </el-table-column>
            <el-table-column
                    label="电流A"
                    min-width="82">
<template slot-scope="scope">
    <span>{{ scope.row.CurrentA }}</span>
</template>
            </el-table-column>
            <el-table-column
                    label="电流B"
                    min-width="82">
<template slot-scope="scope">
    <span>{{ scope.row.CurrentB }}</span>
</template>
            </el-table-column>
            <el-table-column
                    label="电流C"
                    min-width="82">
<template slot-scope="scope">
    <span>{{ scope.row.CurrentC }}</span>
</template>
            </el-table-column>
            <el-table-column
                    label="状态"
                    min-width="82">
<template slot-scope="scope">
    <span v-if="scope.row.Status == 1">{{ scope.row.Status | status()  }}</span>
    <span style="color:red" v-if="scope.row.Status == 2">{{ scope.row.Status | status()  }}</span>
</template>
            </el-table-column>
        </el-table>
        <el-pagination
        style="color:#fff"
            background="transpraent"
            @current-change="handleCurrentChange"
            :current-page="form.page"
            :page-sizes="[10, 20, 30, 40,50]"
            :page-size="page"
            layout="total, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import {
        getDay,
        ParameterMatching
    } from "../utils/util"
    export default {
        components: {
           
        },
        data() {
            return {
                form: {
                    value1: "2019-12-26",
                    value2: "2019-12-26",
                    page: 1,
                },
                total: 1,
                tableData: [],
                status: ""
            }
        },
        watch: {
            "form.page": function(val) {
                console.log("监听", val)
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
            console.log('getDay(-1,"-")', getDay(-1, "-"))
            this.form.value1 = getDay(-1, "-")
            this.form.value2 = getDay(0, "-")
            this.getMessage()
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {},
        methods: {
            goback(data) {
                console.log(data);
                if (data) {
                    this.$router.push({
                        path: "/",
                        query: {}
                    })
                }
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.form.page = val
                // this.getMessage()
            },
            getMessage() {
                let parmas = {
                    status: this.status,
                    startTime: this.form.value1,
                    endTime: this.form.value2,
                    page: this.form.page,
                    limit: 1000000
                }
                console.log("parmas-----", parmas)
                let formatterUrlData = ParameterMatching("/qukuai/blockchain/ddkj/query", parmas)
                console.log("ParameterMatching1", formatterUrlData)
                this.$axios.get(formatterUrlData).then((data) => {
                    console.log("---data-返回值--", data)
                    this.tableData = data.data
                    this.total = data.data.length
                })
            }
        }
    }
</script>
<style lang='less' scoped>
/deep/ .el-select-dropdown {
    background-color: transparent;
}
/deep/ .el-select-dropdown__item.hover {
    background-color: rgba(22, 16, 253, 0.7);
}
    /deep/ .el-pagination__total {
        color: #fff;
    }
    /deep/ .el-pagination__jump {
        color: #fff;
    }
    /deep/ .el-table th.is-leaf {
        border-bottom: 1px solid rgba(22, 16, 253, 0.7); // border-bottom: #fff
    }
    /deep/ .el-table::before {
        background-color: transparent;
    }
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: rgba(22, 16, 253, 0.7);
    }
    /deep/ .el-table thead {
        background-color: rgba(0, 255, 255, .1)
    }
    /deep/ .el-table tr {
        color: #fff;
    }
    /deep/ .el-input__inner {
        background-color: transparent;
        border: 1px solid rgba(22, 16, 253, 0.7);
    }
    /deep/ .el-date-editor .el-range-input {
        background-color: transparent;
    }
    /deep/ .is-active {
        background: none;
    }
    /deep/ .el-table--enable-row-hover .el-table__body tr:hover>td {
        background-color: rgba(22, 16, 253, 0.7) !important;
    }
    /deep/ .el-table td {
        border-bottom: 1px solid rgba(0, 255, 255, 0.2);
    }
    .system {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background: url('../assets/img-huanjing（1）/bg-nackground.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
        .system-nav {
            position: relative;
            width: 19.2rem;
            padding-left: .25rem;
            padding-right: .25rem;
            margin: 0 auto;
            margin-top: .62rem;
            .control {
                height: .41rem;
                .first {
                    height: 100%;
                    width: 1rem;
                    background-color: rgba(0, 255, 255, .3);
                    font-size: .14rem;
                    color: #FFFFEC;
                    line-height: .41rem;
                    text-align: center;
                    float: left;
                    margin-right: .15rem;
                }
                .timeData {
                    float: left;
                    margin-right: .15rem;
                }
                .search {
                    float: left;
                }
            }
        }
    }
    /deep/ .el-pagination.is-background .el-pager li {
        background-color: transparent;
    }
    /deep/ .el-pagination.is-background .btn-prev {
        background-color: transparent
    }
    /deep/ .el-pagination.is-background .btn-next {
        background-color: transparent
    }
    /deep/ .el-pagination__editor.el-input .el-input__inner {
        background-color: transparent;
    }
    /deep/ .el-button--warning {
        background-color: #1701FF;
        border-color: #1701FF;
        border-radius: 0;
    }
    /deep/.block {
        position: absolute;
        right: 1rem;
    }
    /deep/.el-tabs__nav-scroll {
        // background: url('../assets/img-taizhang/search.png') no-repeat;
        // background-size: 100% 100%;
        background-color: #1701FF;
    }
    /deep/.el-tabs__nav-wrap::after {
        height: 0;
    }
    /deep/.el-tabs__item {
        width: 2.36rem;
        height: 0.4rem;
        text-align: center;
        color: #fff;
        border-bottom: none;
    }
    /deep/.is-active {
        background: url('../assets/img-taizhang/bg-选中.png') no-repeat;
        background-size: 100% 100%;
    }
    /deep/.el-tabs__active-bar {
        height: 0;
    }
    /deep/.el-dialog {
        background: url('../assets/img-TanKuang/bg-TanKuang.png') no-repeat;
        background-size: 100% 100%;
        padding-top: 0.3rem;
        padding-left: 0.21rem;
        padding-right: 0.5rem;
    }
    /deep/.el-dialog__title {
        color: #ffffff;
        font-size: 0.24rem;
    }
    .content {
        width: 100%;
        margin-top: .15rem;
    }
    .content::-webkit-scrollbar {
        width: 0 !important;
    }
    .el-table {
        border: .01rem solid rgba(23, 1, 255, 0.6)!important;
    }
    .el-table__row {
        border: none;
    }
    /deep/.el-table {
        background-color: transparent;
    }
    /deep/ .el-table th {
        background-color: transparent;
    }
    /deep/ .el-table tr {
        background-color: transparent;
    }
</style>