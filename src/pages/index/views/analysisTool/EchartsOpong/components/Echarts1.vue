<template>
    <div :clas="$style.echarts1">1111
        <echarts-common
            :loading="loadingE"
            :ref="chart1"
            :domId="echartsId"
            :echartOptions="echartOptions"
            :propsChartHeight="430">
        </echarts-common>
    </div>
</template>

<script>
import EchartsCommon from '@/components/index/common/EchartsCommon';

export default {
    name: 'Echarts1',
    components: {EchartsCommon},
    props: {
        loadingE: {
            type: Boolean
        }
    },
    data() {
        return {
            barEcharts: null,
            markLingOping: {
                markLine: {
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'solid',
                                color: 'red',
                            },
                        },
                    },
                    label: {
                        positon: 'middle',
                        show: true,
                        formatter: function() {
                            return '限仓线';
                        }
                    },
                    data: [
                        {
                            yAxis: '',
                            symbol: 'none',
                            x: '10%'
                        }
                    ]
                }
            },
            echartOptions: {
                background: ['rgba(7, 39, 89)'],
                color: [],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                },
                legend: {
                    type: 'scroll',
                    inactiveColor: '#455579',
                    width: '80%',
                    top: '5',
                    textStyle: {
                        colcor: '#ffffff',
                        fontSize: 12
                    },
                },
                grid: {
                }
            }
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        initChart() {
            this.clearChartData();
            this.barEchartsData();
        },
        clearChartData() {
            this.barEcharts = this.$echarts.init(document.getElementById('echartsId'));
            this.barEcharts.clear();
        },
        barEchartsData(val, actiName) {}
    },
};
</script>

<style lang="less" module>

</style>
