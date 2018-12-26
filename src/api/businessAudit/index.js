// 第一步: src/config/dev.js   配置 -- api: 'http://localhost:8080'
// 第二步：src/helper/axios.js 判断--  baseURL: url || config.server.api,（当前url地址，不是就替换配置的URL地址）
// 第三步：src/mock/index.js   这里是请求的模拟数据（模拟后端数据）
// **第四步**：src/assets/js/alarmMonitorAPI.js   这里是当前页面的借口
// 第五步：src/views/alarmMonitor.vue         这里是vue页面获取请求数据

// 预警监控

import instance from '@/helper/axios';
const baseUrl = '/mock';
const axios = instance('http://127.0.0.1:8001'); // 可替换的路径,比如后端开发的本地借口
// const axios = instance(); // 默认的借口

const apiData = params => axios.get(`${baseUrl}/list`, {params}).then(res => res);

export default {
    apiData
};
