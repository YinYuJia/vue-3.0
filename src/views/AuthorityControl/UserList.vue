<template>
    <div>
        <div class="groupTree" ref="groupTree">
            <el-tree :data="groupData" :props="defaultProps" @node-click="handleNodeClick" node-key="gCode" :expandOnClickNode="false"></el-tree>
        </div>
        <div class="line" ref="line"></div>
        <div class="mod-user">
            <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
                <el-form-item>
                    <el-input v-model="dataForm.userName" placeholder="用户名" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="getDataList()">查询</el-button>
                    <el-button type="primary" @click="addOrUpdateHandle()">新增</el-button>
                    <!--<el-button v-if="isAuth('sys:user:delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>-->
                </el-form-item>
            </el-form>
            <el-table :data="dataList" border @selection-change="selectionChangeHandle" style="width: 100%;">
                <el-table-column type="index" header-align="center" align="center" min-width="50">
                </el-table-column>
                <el-table-column prop="gName" header-align="center" align="center" min-width="180" label="所属部门">
                </el-table-column>
                <el-table-column prop="username" header-align="center" align="center" min-width="100" label="用户名">
                </el-table-column>
                <el-table-column prop="name" header-align="center" align="center" min-width="100" label="姓名">
                </el-table-column>
                <el-table-column prop="email" header-align="center" align="center" min-width="180" label="邮箱">
                </el-table-column>
                <el-table-column prop="mobile" header-align="center" align="center" min-width="180" label="手机号">
                </el-table-column>
                <el-table-column prop="status" header-align="center" align="center" min-width="80" label="状态">
                    <template slot-scope="scope">
              <el-tag v-if="scope.row.status === 0" size="small" type="danger">禁用</el-tag>
              <el-tag v-else size="small">正常</el-tag>
</template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        header-align="center"
        align="center"
        min-width="200"
        label="创建时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="100"
        label="操作">
<template slot-scope="scope">
    <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.userId)">
        修改</el-button>
    <el-button type="text" size="small" @click="deleteHandle(scope.row)">删除</el-button>
</template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
  </div>
</template>

<script>
      import AddOrUpdate from './user-add-or-update'
    export default {
        data() {
            return {
                dataForm: {
                    userName: ''
                },
                groupCode: [],
                dataList: [],
                pageIndex: 1,
                pageSize: 10,
                totalPage: 0,
                dataListLoading: false,
                dataListSelections: [],
                addOrUpdateVisible: false,
                groupData: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        components: {
          AddOrUpdate
        },
        computed: {
            gCode: {
                get() {
                    return this.$store.state.user.gCode
                }
            },
        },
        created() {
            this.getDataList()
            this.getGroupData()
        },
        mounted() {
            this.$refs.line.style.height = window.innerHeight + "px";
        },
        methods: {
            groupTreeWithCode(data) {
                var res = []
                var temp = {}
                let id = "gCode";
                let pid = "gpCode";
                for (var i = 0; i < data.length; i++) {
                    temp[data[i][id]] = data[i]
                    data[i]['value'] = data[i].gCode;
                    data[i]['label'] = data[i].gName;
                }
                for (var k = 0; k < data.length; k++) {
                    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
                        if (!temp[data[k][pid]]['children']) {
                            temp[data[k][pid]]['children'] = []
                        }
                        temp[data[k][pid]]['children'].push(data[k])
                    } else {
                        res.push(data[k])
                    }
                }
                return res;
            },
            getGroupData() {
                this.$axios.get("/apiUrl/sys/group/groupData", {params:this.$axios.adornParams()}).then(({
                    data
                }) => {
                    if (data && data.code === 0) {
                        this.groupData = this.groupTreeWithCode(data.groupList);
                    }
                })
            },
            handleNodeClick(data) {
                console.log(data)
                console.log(data.children)
                this.groupCode = data.gCode;
                this.getDataList(data.gCode);
            },
            // 获取数据列表
            getDataList(gCode) {
                this.dataListLoading = true
                this.$axios.get("/apiUrl/sys/user/list", {params:this.$axios.adornParams({
                    'page': this.pageIndex,
                    'limit': this.pageSize,
                    'username': this.dataForm.userName,
                    'gCode': gCode
                })}).then(({
                    data
                }) => {
                    console.log("list-----------", data)
                    if (data && data.code === 0) {
                        this.dataList = data.page.list
                        this.totalPage = data.page.totalCount
                    } else {
                        this.dataList = []
                        this.totalPage = 0
                    }
                    this.dataListLoading = false
                })
            },
            // 每页数
            sizeChangeHandle(val) {
                this.pageSize = val
                this.pageIndex = 1
                this.getDataList()
            },
            // 当前页
            currentChangeHandle(val) {
                this.pageIndex = val
                this.getDataList()
            },
            // 多选
            selectionChangeHandle(val) {
                this.dataListSelections = val
            },
            // 新增 / 修改
            addOrUpdateHandle(id) {
                if (id) {
                    this.infoHandle(id)
                } else {
                    if (this.groupCode != '') {
                        this.infoHandle(id, this.groupCode)
                    } else {
                        this.$message.error("请先点击左侧节点，选择部门！")
                    }
                }
            },
            infoHandle(id, code) {
                this.addOrUpdateVisible = true
                this.$nextTick(() => {
                    this.$refs.addOrUpdate.init(id, code)
                })
            },
            // 删除
            deleteHandle(data) {
                this.$confirm(`确定对[` + data.username + `]进行['删除' ]操作?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                       console.log("data----",data);
                    this.$axios.post("/apiUrl/sys/user/delete", this.$axios.adornData([data.userId], false)).then(({
                        data
                    }) => {
                        if (data && data.code === 0) {
                            this.$message({
                                message: '操作成功',
                                type: 'success',
                                duration: 1500,
                                onClose: () => {
                                    this.getDataList()
                                }
                            })
                        } else {
                            this.$message.error(data.msg)
                        }
                    })
                })
            },
        }
    }
</script>
<style>
    .line {
        border-right: 2px solid #d3dce6;
        float: left;
        margin-right: 5px;
    }
    .groupTree {
        width: 12%;
        float: left;
    }
    .mod-user {
        width: 84%;
        float: left;
    }
</style>
