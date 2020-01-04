<template>
    <div>
        <div style="float: left;line-height: 60px">
            <i class="el-icon-s-fold" @click="toggleCollapse" style="margin-right: 15px;text-align: right"></i>
        </div>
        <div style="text-align: right;line-height: 60px;height: 60px;">
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
            <div style="font-size: 14px;font-weight: bold;text-align: center;margin-top: 20px">我来啦!</div>
        </el-drawer>
    </div>
</template>

<script>

    import event from '@/event'
    export default {
        name: "Header",
        data() {
            return {
                drawer: false,
                direction: 'rtl',
                name: '',
                breadList: [],
                isCollapse: false
            };
        },
        methods: {
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
                this.$nextTick(() => {
                    event.$emit('toggleCollapse', {isCollapse: this.isCollapse})
                })
            }
        }
    }
</script>

<style scoped>
    .head-wrap {

    }
</style>
