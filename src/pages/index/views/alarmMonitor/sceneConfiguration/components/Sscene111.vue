<template>
    <div>
        <el-button type="primary" @click="butChildClick1">tab2 子级获取图标数据</el-button>
        <echarts-common
            :loading="loading2"
            ref="echartsDemo"
            domId="echartsId2"
            :defaultOption="chartOptions2"
            :propsChartHeight="430">
        </echarts-common>
    </div>
</template>

<script>
// import {echartsData2} from '../components/components';
import EchartsCommon from '@/components/index/common/EchartsCommon';
export default {
    name: 'Echarts2',
    components: {EchartsCommon},
    props: {
        // loading2: {
        //     type: Boolean
        // }
    },
    data() {
        return {
            loading2: false,
            chartOptions2: {
                title: {
                    text: '动态数据',
                    // subtext: '纯属虚构'
                    borderColor: '#fff',
                    borderWidth: 1,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    },
                    // left: 'left',
                    // top: '70%'
                },
                grid: {
                    x: 40, // 左
                    x2: 40, // 右
                    y: 60, // 上
                    y2: 90 // 下
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                legend: {
                    data: ['最新成交价', '预购队列'],
                    type: 'scroll',
                    inactiveColor: '#455579',
                    width: '80%',
                    top: '5',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 12
                    }
                },
                // toolbox: {
                //     show: true,
                //     feature: {
                //         dataView: {readOnly: false},
                //         restore: {},
                //         saveAsImage: {}
                //     }
                // },
                dataZoom: [
                    {
                        type: 'inside',
                        start: 50,
                        end: 100
                    },
                    {
                        show: true,
                        type: 'slider',
                        y: '90%',
                        start: 50,
                        end: 100
                    }
                ],
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisLine: { // y轴
                            lineStyle: {
                                color: '#006624',
                                width: 1,
                            },
                        },
                        data: [] // 价格
                        // data: (function() {
                        //     var now = new Date();
                        //     var res = [];
                        //     var len = 10; // 10分钟
                        //     while (len--) {
                        //         res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        //         now = new Date(now - 2000);
                        //     }
                        //     return res;
                        // })()
                    },
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisLine: { // y轴
                            lineStyle: {
                                color: '#ff8a00',
                                width: 1,
                            },
                        },
                        data: [] // 日期
                        // data: (function() {
                        //     var res = [];
                        //     var len = 10;
                        //     while (len--) {
                        //         res.push(10 - len - 1);
                        //     }
                        //     return res;
                        // })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        name: '价格',
                        max: 30,
                        min: 0,
                        axisLine: { // y轴
                            lineStyle: {
                                color: '#ac10ce',
                                width: 0,
                                // color: '#5793f3'
                            },
                        },
                        boundaryGap: [0.2, 0.2]
                    },
                    {
                        type: 'value',
                        scale: true,
                        name: '预购量',
                        max: 1200,
                        min: 0,
                        axisLine: { // y轴
                            lineStyle: {
                                color: '#5793f3',
                                width: 0,
                                // color: '#5793f3'
                            },
                        },
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        name: '预购队列',
                        type: 'line',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#ac10ce'
                                }
                            }
                        },
                        // data: []
                        data: (function() {
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res; // 价格
                        })()
                    },
                    {
                        name: '最新成交价',
                        type: 'line',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#5793f3'
                                }
                            }
                        },
                        // data: []
                        data: (function() {
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                                len++;
                            }
                            return res; // 预购量
                        })()
                    }
                ]
            }
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        butChildClick1() {
            this.barEchartsDete();
        },
        barEchartsDete() {
            let Options2 = this.chartOptions2;
            let unm = 11;
            setInterval(function() {
                setInterval(v => {
                let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, ''); // 分钟
                var data0 = Options2.series[0].data;
                var data1 = Options2.series[1].data;
                // console.log(data0);
                // console.log(data1);
                data0.shift();
                data0.push(Math.round(Math.random() * 1000));
                data1.shift();
                data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
                Options2.xAxis[0].data.shift();
                Options2.xAxis[0].data.push(axisData);
                Options2.xAxis[1].data.shift();
                Options2.xAxis[1].data.push(unm++);
                this.$refs['echartsDemo'] && this.$refs['echartsDemo'].initChart();
            }, 3100);

            // let span = echartsData2;
        }
    },
};
</script>

<style lang="less" module>
</style>
