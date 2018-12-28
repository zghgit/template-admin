<!-- 图表公共组件-->
<template>
    <div
        v-loading="loading"
        element-loading-text="数据加载中，请耐心下等待..."
        element-loding-background="rgba(0,0,0,0.3)"
        :id="domId"
        :class="$style.echarts_container"
        :style="{'height': propsChartHeight + 'px'}"
    >
    </div>
</template>

<script>
export default {
    name: 'EchartsCommon',
    components: {},
    props: {
        // 初始化值  this.barEcharts.setOption(this.echartOptions);
        echartOptions: {
            type: Object,
            required: true
        },
        // 图表 高度
        propsChartHeight: {
            type: [Number],
            default: 300
        },
        // 图标唯一 ID
        domId: {
            type: String,
            default: 'echartsId'
        },
        // 加载
        loading: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        chartOptions: {
            handler() {
                this.initChart();
            }
        },
        propsChartHeight(newValue) {
            this.echart.resize({
                height: newValue
            });
        }
    },
    data() {
        return {
            echart: null
        };
    },
    computed: {},
    mounted() {
        this.$nextTick(() => {
            this.initChart('init');
        });
    },
    methods: {},
    beforeDestroy() {
        this.echart && this.echart.off('click');
    }
};
</script>

<style lang="less" module>
    .echarts_container {
        width: 100%;
    }
</style>
