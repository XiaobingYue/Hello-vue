<template>
    <div class="bread-crumb">
        <el-breadcrumb separator="/" v-for="item in breadList" :key="item.name">
            <el-breadcrumb-item to="/Home">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "A-BreadCrumb",
        data() {
            return {
                name: '',
                breadList: []
            };
        },
        created() {
            this.getBreadcrumb()
        },
        methods: {
            getBreadcrumb() {
                this.breadList = [];
                // this.breadList.push({name: 'index', path: '/dashboard/', meta: {title: '首页'}})
                this.name = this.$route.name
                this.$route.matched.forEach(item => {
                    // item.name !== 'index' && this.breadList.push(item)
                    this.breadList.push(item)
                })
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        }
    }
</script>

<style scoped>
    .bread-crumb {
        background-color: #fff;
        height: 30px;
        padding: 20px 32px 0;
        border-bottom: 1px solid #e8e8e8;
    }
</style>
