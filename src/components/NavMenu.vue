<template>
    <el-aside :width="isCollapse ? '65px' : '200px'" style="background-color: #545c64; border-right: solid 1px #e6e6e6">
        <el-row class="tac">
            <el-col :span="24">
                <div class="vue">Vue</div>
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <el-menu
                        class="el-menu-vertical-demo"
                        router
                        unique-opened
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        :default-active="$route.name"
                        :collapse="isCollapse"
                        active-text-color="#ffd04b">

                    <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span v-text="item.name"></span>
                        </template>
                        <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
                            <el-menu-item :index="sub.componentName" v-text="sub.name">
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </el-aside>
</template>

<script>

    import menu from '@/config/menu-config'

    export default {
        data() {
            return {
                menu: menu,
                isCollapse: false
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath)
            },
            handleClose(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath)
            },
            // 点击按钮，切换菜单的折叠与展开
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<style>
    .toggle-button {
        background-color: #545c63;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
        overflow: hidden;
    }
    .vue {
        background-color: #545c63;
        color: #fff;
        line-height: 60px;
        text-align: center;
        border-radius: 1px;
    }
    .over-hide {
        overflow: hidden;
    }
    .el-menu-vertical-demo {
        border: 0;
    }
    .element::-webkit-scrollbar { width: 0 !important }
</style>