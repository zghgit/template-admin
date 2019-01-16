<template>
    <div>
        <s-card :title="`ES6语法`" :icon="`el-icon-edit`" :subTitle="`*请注意`">
            <div slot="content">
                <el-tabs v-model="activeName" size="small" type="card" @tab-click="tabES6Click">
                    <el-tab-pane
                        v-for="(item, index) in tabES6Option"
                        :key="index" :name="item.name" :label="item.label"
                    >
                    </el-tab-pane>
                </el-tabs>
                <Es61 v-if="activeName === '0'"></Es61>
            </div>
        </s-card>
    </div>
</template>

<script>
import SCard from '@/components/index/common/SCard';
import Es61 from './es6Grammar/es61';
export default {
    name: 'deconstruction',
    components: {SCard, Es61},
    data() {
        return {
            activeName: '0',
            tabES6Option: [
                {
                    name: '0',
                    label: 'ES6-1'
                },
                {
                    name: '1',
                    label: 'ES6-2'
                }
            ]
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        tabES6Click() {}
    },
};
</script>

<style lang="less" module>

</style>
