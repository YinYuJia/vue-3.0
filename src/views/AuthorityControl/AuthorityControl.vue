<!--  -->
<template>
    <div>
        <el-menu
            default-active="role"  
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @select="handleSelect"
            @close="handleClose">
            <el-menu-item index="tab?keys=role">
                <i class="el-icon-location"></i>
                <span slot="title">角色管理</span>
            </el-menu-item>
            <el-menu-item index="tab?keys=group">
                <i class="el-icon-menu"></i>
                <span slot="title">部门管理</span>
            </el-menu-item>
            <el-menu-item index="tab?keys=UserList">
                <i class="el-icon-document"></i>
                <span slot="title">用户列表</span>
            </el-menu-item>
        </el-menu>
        <router-view class="aaa"></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push({
                    path: '/'+key,
                    query: {
                        keys:key
                    }
                })
            },
                  handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
        }
    }
</script>
<style lang='less' scoped>
    /* @import url(); 引入css类 */
</style>