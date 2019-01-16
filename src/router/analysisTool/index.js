import Home from '@/pages/index/views/Home.vue';
import AnalysisTool from '@/router/analysisTool/Index.vue';

const AnalysisToolIndex = {
    path: '',
    name: 'tools3',
    label: '分析工具',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'analysisTool',
            label: '学习资源',
            icon: 'menu-fix-icon fa fa-address-book',
            component: AnalysisTool,
            children: [
                {
                    // meta: {requireAuth: false}, // true 显示子菜单 false 收起子菜单
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'knowledge',
                    label: '基础知识信息',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/analysisTool/Knowledge/Index.vue'], resolve)
                },
                {
                    // meta: {requireAuth: false}, // true 显示子菜单 false 收起子菜单
                    meta: 'scrollTop',
                    path: '/knowledge',
                    name: 'knowledge',
                    label: '基础知识',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/analysisTool/Knowledge/Index.vue'], resolve)
                },
                {
                    mate: 'scrollTop',
                    path: '/EchartsOpong',
                    name: '/EchartsOpong',
                    label: 'Echarts基础',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/analysisTool/EchartsOpong/Index'], resolve)
                }
            ]
        }
    ]
};
export default AnalysisToolIndex;
