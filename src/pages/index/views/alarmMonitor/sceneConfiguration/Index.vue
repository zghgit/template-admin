<template>
    <div>
        <el-tabs v-model="activeName" size="small" type="card">
            <el-tab-pane
                v-for="active in activePane"
                :label="active.label"
                :key="active.name"
                :name="active.name"
            ></el-tab-pane>
        </el-tabs>
        <sof-scene></sof-scene>
    </div>
</template>

<script>
import SofScene from '../sceneConfiguration/components/Sscene';
export default {
    name: 'Index',
    components: {SofScene},
    data() {
        return {
            activeName: '0',
            activePane: [
                {
                    name: '0',
                    label: 'echarts'
                }
            ]
        };
    },
    methods: {
    },
    mounted() {}
};
</script>

<style lang="less" module></style>
