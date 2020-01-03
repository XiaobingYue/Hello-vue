<template>
    <div>
        <div style="text-align: right">
            <i class="el-icon-setting" @click="drawer = true" style="margin-right: 15px;text-align: right"></i>
            <el-dropdown>
                <span style="margin-left: 5px">岳小兵</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click="drawer = true">个人信息</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>


        <el-drawer
                title="我是标题"
                :visible.sync="drawer"
                :with-header="false">
            <span>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        name:"Header",
        data() {
            return {
                drawer: false,
                direction: 'rtl',
            };
        },
        methods: {
            // handleClose(done) {
            //     this.$confirm('确认关闭？')
            //         .then(() => {
            //             done();
            //         })
            //         .catch(() => {});
            // }
        }
    }
</script>

<style scoped>
    .head-wrap {

    }
</style>