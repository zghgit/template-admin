<template>
    <div :clas="$style.echarts4">
        <el-button type="text" @click="butClicks4">click</el-button>
        <echarts-common
            :loading="loading4"
            ref="echartsDemo4"
            domId="echartsId4"
            :defaultOption="chartOptions4"
            :propsChartHeight="430">
        </echarts-common>
    </div>
</template>

<script>
import {echartsData2} from './constants';
import EchartsCommon from '@/components/index/common/EchartsCommon';

export default {
    name: 'Echarts4',
    components: {EchartsCommon},
    props: {},
    data() {
        return {
            loading4: false,
            markLingOping: {
                markLine: {
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'solid',
                                color: 'red'
                            }
                        }
                    },
                    label: {
                        position: 'middle',
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
            chartOptions4: {
                backgroundColor: ['rgba(7, 39, 89)'],
                color: [
                    '#00709e',
                    '#f8f400',
                    '#ac10ce',
                    '#ff0000',
                    '#00a8ec',
                    '#ff8a00',
                    '#006624',
                    '#e3007b',
                    '#1929b3',
                    '#b69913'
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'
                    }
                },
                legend: {
                    type: 'scroll',
                    inactiveColor: '#455579',
                    width: '80%',
                    top: '5',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 12
                    }
                },
                // 柱状图高度
                grid: {
                    left: '4%',
                    right: '8%',
                    bottom: '7%',
                    width: 'auto',
                    height: 'auto',
                    containLabel: true
                },
                yAxis: {
                    show: true,
                    type: 'value',
                    name: '持仓量4', // 持仓量
                    splitLine: {
                        lineStyle: {
                            color: ['rgb(20, 53, 98)'] // 网格线颜色
                        }
                    },
                    nameTextStyle: {
                        color: ['#ffffff'], // 字体颜色（y轴标题‘持仓量’）
                        fontSize: 12,
                        fontWeight: 'normal'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff', // 金额字体色（Y轴金额）
                            width: 1 // 这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        show: true,
                        verticalAlign: 'middle'
                    }
                },
                xAxis: {
                    show: true,
                    name: '日期',
                    type: 'category',
                    data: [],
                    left: 'left',
                    axisTick: {show: false},
                    boundaryGap: true,
                    splitLine: {show: false}, // 去除网格线
                    axisLabel: {
                        // 字体选择
                        show: true,
                        rotate: 30, // 字体倾斜角度
                        interval: 0, // 间距
                        // x 轴线条颜色
                        axisLine: {
                            lineStyle: {color: 'rgba(255, 330, 86)'}
                        },
                        textStyle: {
                            margin: '10px',
                            color: '#ffffff', // 字体颜色（y轴日期）
                            fontSize: 12
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#0087ED',
                            width: 1 // 这里是为了突出显示加上的
                        }
                    }
                },
                series: [],
                // 横向滚动条
                dataZoom: [
                    {
                        type: 'slider', // 图表下方的伸缩条
                        show: true, // 是否显示
                        xAxisIndex: [0],
                        bottom: 0
                    },
                    {
                        type: 'inside', // 鼠标滚轮
                        xAxisIndex: [0]
                    }
                ]
            }
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        butClicks4() {
            this.barEchartsDete();
        },
        barEchartsDete() {
            let val = echartsData2;
            if (Object.keys(val).length !== 0) {
                let mainData = [];
                let temp = [];
                mainData = val.mainData;
                // set datazoom
                let dataZoomStartValue = val.dateList.length > 20 ? val.dateList[val.dateList.length - 20] : 0;
                let dataZoomEndValue = val.dateList[val.dateList.length - 1];
                this.chartOptions4['dataZoom'][0]['startValue'] = dataZoomStartValue;
                this.chartOptions4['dataZoom'][1]['startValue'] = dataZoomStartValue;
                this.chartOptions4['dataZoom'][0]['endValue'] = dataZoomEndValue;
                this.chartOptions4['dataZoom'][1]['endValue'] = dataZoomEndValue;
                let basicOptions = {
                    type: 'bar',
                    barMaxWidth: '45',
                    stack: '总量'
                };
                if (val && val.qtty) {
                    this.markLingOping.markLine.data[0].yAxis = val.qtty;
                    basicOptions = {...basicOptions, ...this.markLingOping};
                }
                Object.keys(mainData).forEach(v => {
                    temp.push({
                        ...{
                            name: v,
                            data: mainData[v].map(m => {
                                // 超仓分析
                                return (m.netMarkPosQtty || 0);
                            }),
                        },
                        ...basicOptions,
                    });
                });
                this.chartOptions4.series = temp;
                this.chartOptions4.xAxis.data = val ? val.dateList : [];
                // this.$refs['echartsDemo'].initChart();
            }
        }
    },
};
</script>

<style lang="less" module>

</style>
