<template>
    <el-aside :width="isCollapse ? '65px' : '200px'"
              style="background-color: #545c64; border-right: solid 1px #e6e6e6;box-shadow: 2px 0 6px rgba(0,21,41,.35)">
        <el-row class="tac">
            <el-col :span="24">
                <div class="vue">Vue</div>
                <el-menu
                        class="el-menu-vertical-demo"
                        router
                        unique-opened
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        :collapse-transition="false"
                        text-color="#fff"
                        :default-active="$route.name"
                        :collapse="isCollapse"
                        active-text-color="#ffd04b">
                    <el-menu-item index="Home">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
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
    import event from '@/event'

    export default {
        data() {
            return {
                menu: menu,
                isCollapse: false
            }
        },
        mounted() {
            // 接收事件
            event.$on('toggleCollapse', (params) => {
                this.isCollapse = params.isCollapse
            })
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
</style>
