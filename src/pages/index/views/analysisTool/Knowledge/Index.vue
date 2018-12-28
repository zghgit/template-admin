<template>
    <div>
        <h1>基础知识</h1>
        <el-tabs v-model="activeName" size="small" type="card">
            <el-tab-pane v-for="active in activePane" :label="active.label" :key="active.name" :name="active.name">
                <hre-fList v-show="activeName === '0'"></hre-fList>
                <git-set v-show="activeName === '1'"></git-set>
                <css-remark v-show="activeName === '2'"></css-remark>
                <vue-remark v-show="activeName === '3'"></vue-remark>
                <es6-remark v-show="activeName === '4'"></es6-remark>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import HreFList from './components/test';
import GitSet from './components/gitSet';
import CssRemark from './components/cssRemark';
import VueRemark from './components/vueRemark';
import Es6Remark from './components/es6Remark';
export default {
    name: 'Index',
    components: {HreFList, GitSet, CssRemark, VueRemark, Es6Remark},
    data() {
        return {
            activePane: [
                {
                    name: '0',
                    label: '学习链接'
                },
                {
                    name: '1',
                    label: 'git 常用命令'
                },
                {
                    name: '2',
                    label: 'CSS 常用的样式'
                },
                {
                    name: '3',
                    label: 'VUE 常用的'
                },
                {
                    name: '4',
                    label: 'Es6基础'
                }
            ],
            activeName: 0
        };
    },
    computed: {},
    mounted() {
    },
    methods: {},
};
</script>

<style lang="less" module>

</style>
