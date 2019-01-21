<template>
    <div :clas="$style.echarts4">
        <el-button type="text" @click="butClicks4">click</el-button>
        <div>
            <a target="_blank" href="http://www.cnblogs.com/benmumu/p/8316652.html">echarts 注释</a>
        </div>
        <div>
            <a target="_blank" href="https://blog.csdn.net/qq3401247010/article/details/81585402">echarts - 特殊需求实现代码汇总之【线图】篇</a>
        </div>
        <div>
            <a target="_blank" href="https://blog.csdn.net/intelrain/article/details/82599647">echarts Echarts学习记录——如何修改x轴和y轴的颜色</a>
        </div>
        <div>
            <a target="_blank" href="http://www.cnblogs.com/xiaojun-zxj/p/8327683.html">Echarts实现隐藏x轴，y轴，刻度线，网格</a>
        </div>
        <div>
            <el-button @click="butData">日期-周-时间</el-button>
        </div>
        <div v-loading="loading"
             element-loading-text="数据加载中，请耐心等待..."
             element-loading-background="rgba(0,0,0,0.3)"
             id="domId" class="echarts-container" style="width: 100%; height: 300px;">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Echarts4',
    components: {},
    props: {},
    data() {
        return {
            loading1: false,
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        butClicks4() {
        },
        butData() {
            // var dateWeek = new Date();
            var now = new Date(); // 当前日期
            var dateWeek = now.getDay(); // 今天本周的第几天
            console.log(dateWeek);
            // var day = dateWeek.getDay() || 7;
            // return new Date(dateWeek.getFullYear(), dateWeek.getMonth(), dateWeek.getDate() + 1 - day);
            let myChart = document.getElementById(this.domId);
            this.echart.clear();
            this.echart.setOption(this.defaultOption);
            var option = {
                title: {
                    text: '标题',
                    top: 20,
                    left: '10%',
                    textStyle:{
                        fontSize: 14,
                        fontWeight: 600
                    }
                },
                legend: {
                    data: ['line1'],
                    top: 30,
                    right: '6.5%',
                    formatter: name => {
                        return  name;
                    },
                    itemGap: 40
                },
                grid:{
                    top: 60,
                    left: '10%',
                    right: '7%',
                    bottom: 40
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: data => {
                        var html = '';
                        if (data.componentType === 'markPoint') {
                            html = data.seriesName;
                        } else {
                            html = data[0].name;
                            for (var i = 0; i < data.length; i++) {
                                var now = data[i];
                                html += '</br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + now.color + '"></span>' + now.seriesName + ': ' + toHSpeed(now.data, 2);
                            }
                        }
                        return html;
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            alignWithLabel: false,
                            interval: 0
                        },
                        axisLine:{
                            lineStyle: {
                                color: '#8cccca'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#a19e9e'
                            },
                            interval: 0,
                            formatter: (value, index) => {
                                return value;
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#dadada'
                            }
                        },
                        data:['01', '02', '03', '04', '05', '06', '08', '09']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: { // y 线样式修改
                            lineStyle: {
                                color: '#8cccca'
                            }
                        },
                        axisLabel: { // y 名称样式修改
                            textStyle: {
                                color: '#a19e9e'
                            },
                            formatter: (data) => {
                                return toHSpeed(data, 2);
                            }
                        },
                        splitLine: { // 取消y轴的网格
                            show: true,
                            lineStyle: {
                                color: '#dadada'
                            }
                        },
                        min: 0,
                        max: (value) => {
                            return value.max + 100;
                        }
                    }
                ],
                series: [
                    {
                        name: 'line1',
                        type: 'line',
                        color: ['#31b573'], // 颜色
                        showSymbol: false,
                        silent: true, // 取消点击事件
                        smooth: true,
                        itemStyle: { // 转折点 控制
                            normal: {
                                borderColor: '#277cdc'
                            }
                        },
                        data: [35, 50, 44, 30, 60, 33, 70, 61],
                        markPoint: {
                            symbol: 'path://m 0,0 h 48 v 20 h -30 l -6,10 l -6,-10 h -6 z', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', path://m 0,0 h 48 v 20 h -30 l -6,10 l -6,-10 h -6 z,  path://m 0,0 h 48 v 20 h -34 l -6,10 l -6,-10 h -2 z
                            symbolSize: function(val){
                                return [textSize(toHSpeed(val, 2), '12px').width + 5, 40];
                            },
                            symbolOffset: ['34%', '-50%'],
                            symbolKeepAspect: true, // 如果 symbol 是 path:// 的形式，是否在缩放时保持该图形的长宽比。
                            label: {
                                position: 'insideTop',
                                distance: 7,
                                formatter: (data) => {
                                    return toHSpeed(data.value, 2);
                                }
                            },
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    }
                ]
            };
            myChart.setOption(option, true);
            this.echart = this.$echarts.init(myChart, this.theme);


            /**
             * 获取文本宽高
             * @param text       文本
             * @param fontSize   代表汉字的大小，英文字会自动按照默认值
             * @returns {{width: *, height: *}}
             */
            function textSize(text,fontSize) {
                var span = document.createElement("span");
                var result = {
                    "width": span.offsetWidth,
                    "height": span.offsetHeight
                };
                span.style.visibility = "hidden";
                span.style.fontSize = fontSize || "14px";
                document.body.appendChild(span);

                if (typeof span.textContent != "undefined")
                    span.textContent = text || "国";
                else span.innerText = text || "国";

                result.width = span.offsetWidth - result.width;
                result.height = span.offsetHeight - result.height;
                span.parentNode.removeChild(span);
                return result;
            }

            function toHSpeed(speed,fix) {
                if(isNaN(speed))
                    return speed;
                if(!fix&&fix!=0)
                    fix=2;
                if(speed>=125000000)
                {
                    speed/=125000000;
                    speed=speed.toFixed(fix)+"Gbps"
                }
                else if(speed>=125000)
                {
                    speed/=125000;
                    speed=speed.toFixed(fix)+"Mbps"
                }
                else if(speed>=125)
                {
                    speed/=125;
                    speed=speed.toFixed(fix)+"Kbps"
                }
                else
                {
                    speed*=8;
                    speed=speed.toFixed(fix)+"bps"
                }
                return speed
            }
        }
    },
};
</script>

<style lang="less" module>

</style>
