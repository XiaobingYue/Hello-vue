import Vue from 'vue';
import Router from 'vue-router';
import menus from '@/config/menu-config'
import Home from '@/components/Home'
Vue.use(Router);
var routes = [{path:'/',redirect:'/Home'},{path:'/Home',name:'首页',meta:{title: '首页'},component:Home}];
menus.forEach((item) => {
    item.sub.forEach((sub) => {
        routes.push({
            path: `/${sub.componentName}`,
            name: sub.componentName,
            meta: {title: sub.name},
            component: () => import(`@/components/${sub.componentName}`)
        })
    })
});

export default new Router({ routes })
