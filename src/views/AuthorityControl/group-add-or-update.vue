<template>
  <el-dialog :title="!dataForm.gId ? '部门新增' : '部门修改'" :close-on-click-modal="false" :visible.sync="visible" width="40%">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="120px">
      <el-form-item label="部门编号" prop="gCode">
        <el-input v-model="dataForm.gCode" placeholder="部门编号" @blur="codeCheck" ref="gCode" :disabled="!dataForm.groupId?false:true"></el-input>
      </el-form-item>
      <el-form-item label="部门名称" prop="gName">
        <el-input v-model="dataForm.gName" placeholder="部门名称"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="gLxfs">
        <el-input v-model="dataForm.gLxfs" placeholder="联系电话"></el-input>
      </el-form-item>
      <el-form-item label="上级部门" prop="p_codes">
        <el-cascader v-model="dataForm.p_codes" placeholder="上级部门" :options="options" filterable clearable expand-trigger="hover" style="width: 100%" change-on-select>
        </el-cascader>
      </el-form-item>
      <el-form-item label="备注" prop="bz">
        <el-input v-model="dataForm.bz" placeholder="备注"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
                <el-button @click="visible = false">取消</el-button>
                <el-button type="primary" @click="dataFormSubmit()" :disabled="isDisabled">确定</el-button>
              </span>
  </el-dialog>
</template>

<script>
  import loadash from 'lodash'
  export default {
    data() {
      return {
        visible: false,
        isDisabled: false,
        dataForm: {
          groudId: 0,
          gCode: '',
          gName: '',
          bz: '',
          p_codes: [],
          gLxfs: ''
        },
        options: [],
        dataRule: {
          gCode: [{
            required: true,
            message: '部门编号不能为空',
            trigger: 'blur'
          }],
          gName: [{
            required: true,
            message: '部门名称不能为空',
            trigger: 'blur'
          }],
          p_codes: [{
            type: 'array',
            required: true,
            message: '上级部门不能为空',
            trigger: 'blur'
          }],
        },
        options: [],
      }
    },
    methods: {
      groupChangeTree(data) {
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
      getPCode() {
        this.$axios.get('/apiUrl/sys/group/groupData', {params:this.$axios.adornParams()}).then((data) => {
          console.log(data)
          if (data.data && data.data.code === 0) {
            this.options = this.groupChangeTree(data.data.groupList);
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      init(id) {
        this.options.length = 0
        this.dataForm.groupId = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.getPCode();
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.groupId) {
            this.$axios.get('/apiUrl/sys/group/info' + (loadash.isInteger(id) ? `/${id}` : ''), {params:this.$axios.adornParams()}).then((data) => {
              if (data.data && data.data.code === 0) {
                this.dataForm.gCode = data.data.sysGroup.gCode
                this.dataForm.gName = data.data.sysGroup.gName
                this.dataForm.gpCode = data.data.sysGroup.gpCode
                this.dataForm.bz = data.data.sysGroup.bz
                this.dataForm.p_codes = data.data.pcodeList
                this.dataForm.gLxfs = data.data.sysGroup.gLxfs
                this.dataForm.gpName = data.data.sysGroup.gpName
              }
            }).catch((error) => {
              console.log(error)
            })
          }
        })
      },
      codeCheck() {
        let gCode = this.dataForm.gCode;
        if (gCode) {
          this.$axios.get('/apiUrl/sys/group/groupCheck', this.$axios.adornParams({
            'gCode': gCode
          })).then((data) => {
              if (data.data && data.data.code === 0) {
                
              }else{
                this.$message.error(data.data.msg)
              }
            }).catch((error) => {
              console.log(error)
            })
        }
      },
      // 表单提交
      dataFormSubmit() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.isDisabled = true
            var params = {
              'groupId': this.dataForm.groupId || undefined,
              'gCode': this.dataForm.gCode,
              'gName': this.dataForm.gName,
              'gJb': this.dataForm.gJb,
              'gpCode': this.dataForm.gpCode,
              'gpName': this.dataForm.gpName,
              'bz': this.dataForm.bz,
              'p_codes': this.dataForm.p_codes,
              'gLxfs': this.dataForm.gLxfs
            }
            if (!this.dataForm.groupId) {
              this.$axios.post('/apiUrl/sys/group/save', this.$axios.adornData(params)).then((data) => {
                if (data.data && data.data.code === 0) {
                  this.$message({
                    message: '操作成功',
                    type: 'success',
                    duration: 1500,
                    onClose: () => {
                      this.visible = false
                      this.$nextTick(() => {
                        this.isDisabled = false
                      })
                      this.$emit('refreshDataList')
                    }
                  })
                } else {
                  this.$message.error(data.msg)
                  this.$nextTick(() => {
                    this.isDisabled = false
                  })
                }
              }).catch((error) => {
                console.log(error)
              })
            } else {
              this.$axios.post('/apiUrl/sys/group/update', this.$axios.adornData(params)).then((data) => {
                if (data.data && data.data.code === 0) {
                  this.$message({
                    message: '操作成功',
                    type: 'success',
                    duration: 1500,
                    onClose: () => {
                      this.visible = false
                      this.$nextTick(() => {
                        this.isDisabled = false
                      })
                      this.$emit('refreshDataList')
                    }
                  })
                } else {
                  this.$message.error(data.msg)
                  this.$nextTick(() => {
                    this.isDisabled = false
                  })
                }
              }).catch((error) => {
                console.log(error)
              })
            }
          }
        })
      }
    }
  }
</script>
<style>
  /*.codeFocus{*/
  /*border-color: #f56c6c;*/
  /*}*/
</style>
