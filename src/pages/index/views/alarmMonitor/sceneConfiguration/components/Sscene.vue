<template>
    <div>
        <el-button type="primary" @click="butChildClick1">tab2 子级获取图标数据</el-button>
        <echarts-common
            :loading="loading2"
            ref="echartsDemo"
            domId="echartsId2"
            :noClearFlag="true"
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
                /* 线条颜色，可设置多个颜色 */
                color: ['#ffa82f'],
                /* 图像四周边距设置 */
                grid: {
                    x: 40, // 左
                    x2: 90, // 右
                    y: 60, // 上
                    y2: 90 // 下
                },
                /* 图例说明 */
                // legend: {
                //     // 图例排项 vertical-"竖向"; horizontal-"横向"
                //     orient: 'horizontal',
                //     // 图例组件离容器左侧的距离
                //     right: 60,
                //     top: 0,
                //     // 图例文字的样式
                //     textStyle: {
                //         color: '#6ab2ec',
                //     },
                //     // 与series中每个name一一对应
                //     // data: ['人流量']
                // },
                /* 鼠标悬浮时显示数据 */
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
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
                xAxis: {
                    type: 'category',
                    data: (function() {
                        let now = new Date();
                        let res = [];
                        let len = 10;
                        while (len--) {
                            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                            now = new Date(now - 1000);
                        }
                        return res;
                    })(),
                    // data: ['14:48:40', '14:48:41', '14:48:42', '14:48:43', '14:48:44', '14:48:45', '14:48:46', '14:48:47', '14:48:48', '14:48:49', '14:48:50', '14:48:51', '14:48:52', '14:48:53', '14:48:54', '14:48:55', '14:48:56', '14:48:57', '14:48:58', '14:48:59', '14:49:00' ],
                    // 设置轴线的属性
                    axisLine: {
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                    // 调整x轴的lable
                    axisLabel: {
                        textStyle: {
                            fontSize: 10 // 让字体变小
                        }
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '价格',
                        position: 'left',
                        // 控制网格线是否显示
                        splitLine: {
                            show: false,
                            //  改变轴线颜色
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: ['#132a6e']
                            }
                        },
                        // 设置轴线的属性
                        axisLine: {
                            lineStyle: {
                                color: '#6ab2ec',
                            }
                        },
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '预购量',
                        min: 0,
                        max: 50,
                        position: 'right',
                        // 控制网格线是否显示
                        splitLine: {
                            show: true,
                            //  改变轴线颜色
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: ['#132a6e']
                            }
                        },
                        // 设置轴线的属性
                        axisLine: {
                            lineStyle: {
                                color: '#6ab2ec',
                            }
                        },
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    },
                ],
                /* 数据配置，若有多条折线则在数组中追加{name: , data: } */
                series: [
                    {
                        name: '成交价格',
                        data: (function() {
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res; // 价格
                        })(),
                        // data: [],
                        // data: [122, 23, 65, 36, 85, 43, 60, 10, 23, 65, 36, 85, 43, 60, 10, 23, 65, 36, 85, 43, 60],
                        type: 'line',
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#f8f400'
                                }
                            }
                        },
                    },
                    {
                        name: '数量',
                        data: (function() {
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                                len++;
                            }
                            return res; // 预购量
                        })(),
                        // data: [],
                        // data: [2, 11, 31, 13, 42, 21, 30, 6, 11, 31, 14, 45, 23, 20, 4, 11, 31, 13, 34, 23, 30],
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#ff0000'
                                }
                            }
                        },
                        symbol: 'circle',
                        // // 设置折点大小
                        symbolSize: 0,
                        // // 设置为光滑曲线
                        smooth: true
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
            setInterval(() => {
                let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, ''); // 分钟
                let data0 = Math.round(Math.random() * 1000); // 分钟
                let data1 = (Math.random() * 10 + 5).toFixed(1) - 0; // 分钟
                this.chartOptions2['xAxis']['data'].push(axisData);
                this.chartOptions2['series'][0]['data'].push(data0);
                this.chartOptions2['series'][1]['data'].push(data1);
            }, 2000);
        }
    },
};
</script>

<style lang="less" module>
</style>
