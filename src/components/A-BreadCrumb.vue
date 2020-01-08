<template>
    <div>
        <el-breadcrumb separator="/" v-for="item in breadList" :key="item.name" style="border-left: 3px solid #9E9E9E;padding-left: 5px;font-size: 16px">
            <el-breadcrumb-item>{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
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
</style>
