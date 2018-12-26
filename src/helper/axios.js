// 第一步: src/config/dev.js   配置 -- api: 'http://localhost:8080'
// **第二步**：src/helper/axios.js 判断--  baseURL: url || config.server.api,（当前url地址，不是就替换配置的URL地址）
// 第三步：src/mock/index.js   这里是请求的模拟数据（模拟后端数据，一般不用这里，没有真实接口调动的效果）
// 第四步：src/api/alarmMonitor/index.js   这里是当前模块的接口路径（模拟真实接口联调）
// 第五步：src/pages/index/views/alarmMonitor/sceneConfig/Index.vue  本模块需要联调的接口数据

import axios from 'axios';
import config from '@/config';
// import {Loading, Notification} from 'element-ui';
import {Notification} from 'element-ui';

const instance = url => {
    const instance = axios.create({
        baseURL: url || config.server.api,
        // withCredentials: true,
        timeout: 5000
    });

    // let loadingInstancce = null;

    // toto 根据项目实际调整
    instance.interceptors.request.use(require => {
        // 全屏遮罩
        // loadingInstancce = Loading.service({
        //     fullscreen: true,
        //     spinner: 'el-icon-loading',
        //     text: '加载中'
        // });
        return require;
    });

    instance.interceptors.request.use(async require => {
        return require;
    });

    instance.interceptors.response.use(response => {
        // loadingInstancce.close();
        const {data, config} = response;
        // console.log(response);
        if ((response.status === 200 || response.status === 201 || response.status === 204) && (config.method === 'post' || config.method === 'put' || config.method === 'delete')) {
            Notification.success({
                title: '操作成功'
            });
        } else if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
            Notification.error({
                title: response.statusText
            });
        }
        return data;
    }, error => {
        return error;
    });

    return instance;
};

export default instance;
