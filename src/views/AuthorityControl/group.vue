<template>
    <div class="mod-config">
        <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList('query')">
            <el-form-item>
                <el-input v-model="dataForm.gName" placeholder="部门名称" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="getDataList('query')">查询</el-button>
                <el-button type="primary" @click="addOrUpdateHandle()">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="dataList" border @selection-change="selectionChangeHandle" style="width: 100%;">
            <el-table-column type="selection" header-align="center" align="center" width="50">
            </el-table-column>
            <el-table-column prop="gCode" header-align="center" align="center" label="部门编码">
            </el-table-column>
            <el-table-column prop="gName" header-align="center" align="center" label="部门名称">
            </el-table-column>
            <el-table-column prop="gpName" header-align="center" align="center" label="上级部门">
            </el-table-column>
            <el-table-column prop="gLxfs" header-align="center" align="center" label="联系电话">
            </el-table-column>
            <el-table-column prop="bz" header-align="center" align="center" label="备注">
            </el-table-column>
            <el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.groupId)">修改</el-button>
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
</template>

<script>
      import AddOrUpdate from './group-add-or-update'
    export default {
        data() {
            return {
                dataForm: {
                    gName: ''
                },
                dataList: [],
                pageIndex: 1,
                pageSize: 10,
                totalPage: 0,
                dataListLoading: false,
                dataListSelections: [],
                addOrUpdateVisible: false
            }
        },
        components: {
          AddOrUpdate
        },
        created() {
            this.getDataList()
        },
        methods: {
            // 获取数据列表
            getDataList(type) {
                this.dataListLoading = true
                if (type == 'query') {
                    this.pageIndex = 1;
                }
                var params = {
                    page: this.pageIndex,
                    limit: this.pageSize,
                    gName: this.dataForm.gName
                }
                this.$axios.get('/apiUrl/sys/group/list', {params:this.$axios.adornParams(params)}).then((data) => {
                    console.log("------------", data)
                    if (data.data && data.data.code === 0) {
                        this.dataList = data.data.page.list
                        this.totalPage = data.data.page.totalCount
                    } else {
                        this.dataList = []
                        this.totalPage = 0
                    }
                    this.dataListLoading = false
                }).catch((error) => {
                    console.log(error)
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
                console.log(id)
                this.addOrUpdateVisible = true
                this.$nextTick(() => {
                    this.$refs.addOrUpdate.init(id)
                })
            },
            // 删除
            deleteHandle(val) {
                this.$confirm('确定对[' + val.gName + '}]进行删除操作?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.get('/apiUrl/sys/group/doDetele' + `/${val.gCode}`,{params:this.$axios.adornParams(val.gCode)}).then((data) => {
                        console.log("------------", data)
                        if (data.data && data.data.code === 0) {
                            this.$axios.post('/apiUrl/sys/group/update', {'groupId':val.groupId,'gStatus':'0'}).then((data) => {
                                console.log("------------", data)
                                if (data.data && data.data.code === 0) {
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
                            }).catch((error) => {
                                console.log(error)
                            })
                        } else {
                            this.dataList = []
                            this.totalPage = 0
                        }
                        this.dataListLoading = false
                    }).catch((error) => {
                        console.log(error)
                    })
                })
            }
        }
    }
</script>
