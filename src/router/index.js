import Vue from 'vue';
import Router from 'vue-router';
import AlarmMonitorIndex from './alarmMonitor/index';
import AnalysisToolIndex from './analysisTool/index';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
        const position = {};
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => !m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};
/**  菜单目录
 * 1、alarmMonitor      预警监控
 * 2、analysisTool      分析工具
 * 3、businessAudit     操作日志审计
 * 4、earlyWarning      预警管理
 * 5、homePage          首页
 * 6、knowledgeBase     知识库
 * 7、marketStability   舆情监测
 * 8、marketSupervise   市场运行监测
 * 9、publicSupervise   业务审计
 * 10、sensation        工作统计
 * 11、superviseTask    监察任务
 * 12、systemManage     系统管理
 * 13、workStatistics   系统管理-模块管理
 **/

// todo 按模块写入单独的文件引用
const router = new Router({
    scrollBehavior,
    routes: [
        AlarmMonitorIndex, // 预警监控
        AnalysisToolIndex, // 分析工具
        {
            path: '/about',
            name: 'about',
            label: '介绍',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '@/pages/index/views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            label: '登录',
            // route level code-splitting
            // this generates a separate chunk (login.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "login" */ '@/pages/index/views/Login.vue')
        }
    ]
});

// todo
router.beforeEach((to, from, next) => {
    // todo权限校验等
    next();
});

export default router;
