<!--  -->
<template>
    <div class="tabs">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="角色管理" name="role">
                <role></role>
            </el-tab-pane>
            <el-tab-pane label="部门管理" name="group">
                <group></group>
            </el-tab-pane>
            <el-tab-pane label="用户列表" name="UserList">
                <UserList></UserList>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import role from "./role"
    import group from "./group"
    import UserList from "./UserList"
    export default {
        data() {
            return {
                activeName: 'first'
            }
        },
        components: {
            role,
            group,
            UserList
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
            //设置当前选择项
            let strList = this.$route.query.keys.split("=")
            this.activeName = strList[1]
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {},
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            
        }
    }
</script>
<style lang='less' scoped>
    /* @import url(); 引入css类 */
    .tabs {
        background-color:#fff;
        overflow: hidden;
        margin-top: .15rem;
        padding:0 .2rem;
    }
    /deep/ .el-tabs__item {
        background-color: #f5f5f5;
    }
</style>