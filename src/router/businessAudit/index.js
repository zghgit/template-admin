// import Vue from 'vue';
import Home from '@/pages/index/views/Home.vue';
// 下面两个路径任选一个，怎么好理解，就怎么引入文件路径
// import AlarmMonitor from '@/pages/index/views/alarmMonitor/Index.vue';
import BusinessAudit from '@/router/businessAudit/Index.vue';

// 一个空模板，方便子节点使用
// const Root = Vue.component('root', {
//     template: '<router-view></router-view>'
// });

const BusinessAuditIndex = {
    path: '',
    name: 'tools4',
    label: 'VUE',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'businessAudit',
            label: 'VUE-修饰符',
            icon: 'menu-fix-icon fa fa-address-book',
            component: BusinessAudit,
            children: [
                {
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'typeSpecifier',
                    label: '事件-修饰符',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/businessAudit/typeSpecifier/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: '/typeSpecifier',
                    name: 'typeSpecifier',
                    label: 'VUE-事件-修饰符',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/businessAudit/typeSpecifier/Index.vue'], resolve)
                },
                // {
                //     meta: 'scrollTop',
                //     path: 'sceneConfiguration',
                //     name: 'sceneConfiguration',
                //     label: '关联账户组合并',
                //     icon: 'menu-fix-icon fa fa-venus-double',
                //     component: resolve => require(['@/pages/index/views/businessAudit/typeSpecifier/Index.vue'], resolve)
                // },
                // {
                //     meta: 'scrollTop',
                //     path: 'sceneConfiguration',
                //     name: 'sceneConfiguration',
                //     label: '异常交易分析',
                //     icon: 'menu-fix-icon fa fa-broadcast-tower',
                //     component: resolve => require(['@/pages/index/views/alarmMonitor/sceneConfiguration/Index.vue'], resolve)
                // },
                // // {
                // //     meta: 'scrollTop',
                // //     path: 'dictionary1',
                // //     name: 'dictionary1',
                // //     label: '账户组画像',
                // //     icon: 'menu-fix-icon fa fa-street-view',
                // //     component: Root
                // // },
                // {
                //     meta: 'scrollTop',
                //     path: 'customerInformationInquiry',
                //     name: 'customerInformationInquiry',
                //     label: '客户信息查询',
                //     icon: 'menu-fix-icon fa fa-search', // customer_information_inquiry
                //     component: resolve => require(['@/pages/index/views/linkAccountAnsis/customerInformationInquiry/Index.vue'], resolve)
                // }, {
                //     meta: 'scrollTop',
                //     path: 'knowledgeAtlas',
                //     name: 'knowledgeAtlas',
                //     label: '组合场景整合',
                //     icon: 'menu-fix-icon fa fa-code-branch', // customer_information_inquiry
                //     component: resolve => require(['@/pages/index/views/linkAccountAnsis/knowledgeAtlas/Index.vue'], resolve)
                // }
            ]
        }
    ]
};
export default BusinessAuditIndex;
