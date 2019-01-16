<template>
    <s-card :title="`修饰符`" :icon="`el-icon-edit`" :subTitle="`*请注意`">
        <div slot="content">
            <el-tabs v-model="activeName" size="small" type="card" @tab-click="tabClick">
                <el-tab-pane
                    v-for="(item, index) in tabOptions"
                    :key="index" :name="String(item.sceneIds)"
                    :label="item.sceneNames"
                ></el-tab-pane>
            </el-tabs>
            <event-tab v-if="activeName === '0'"></event-tab>
            <keyup-tab v-if="activeName === '1'"></keyup-tab>
            <sync-tab v-if="activeName === '2'"></sync-tab>
        </div>
    </s-card>
</template>

<script>
import SCard from '@/components/index/common/SCard';
import EventTab from './event/event';
import KeyupTab from './keyup/keyup';
import SyncTab from './sync/sync';
export default {
    name: 'Index',
    components: {SCard, EventTab, KeyupTab, SyncTab},
    data() {
        return {
            activeName: 0,
            tabOptions: [
                {
                    sceneNames: '事件修饰符',
                    // sceneTypes: 1,
                    sceneIds: 0
                },
                {
                    sceneNames: '按键别名修饰符',
                    sceneIds: 1
                },
                {
                    sceneNames: 'sync',
                    sceneIds: 2
                }
            ]
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        tabClick() {
            // setTimeout(() => {
            //     this.$nextTick(() => {
        }
    },
};
</script>

<style lang="less" module>

</style>
