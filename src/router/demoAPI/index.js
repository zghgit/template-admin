import Home from '@/pages/index/views/Home.vue';
import DemoAPI from '@/router/demoAPI/Index.vue';

const DemoAPIIndex = {
    path: '',
    name: 'tools1',
    label: 'WEB-API链接',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'demoAPI',
            label: 'VUE--API',
            icon: 'menu-fix-icon fa fa-address-book',
            component: DemoAPI,
            children: [
                {
                    // meta: {requireAuth: false}, // true 显示子菜单 false 收起子菜单
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'demo',
                    label: 'APIDemo',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/demoAPI/API/Demo.vue'], resolve)
                },
                {
                    // meta: {requireAuth: false}, // true 显示子菜单 false 收起子菜单
                    meta: 'scrollTop',
                    path: '/demo',
                    name: 'demo',
                    label: 'APIDemo',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/demoAPI/API/Demo.vue'], resolve)
                }
            ]
        }
    ]
};
export default DemoAPIIndex;
