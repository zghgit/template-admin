<template>
    <div>
        <el-card>
            <el-button type="primary" @click="butClick">这里是父级，使用ref属性</el-button>
            <p>
                在父级使用这两个方法抓取自己变化
                <br/>setTimeout(() => {
                <br/>this.$nextTick(() => {
                <br/>this.$refs['chart2'][0].barEchartsDete()
                <br/>this.$refs['chart2'][0].$refs['echartsDemo'].initChart()
                <br/>})
                <br/>})
            </p>
            <p>
                echarts k线图 tooltip 涨跌幅的颜色
                <a href="https://segmentfault.com/q/1010000016425515">https://segmentfault.com/q/1010000016425515</a>
                <a href="https://blog.csdn.net/yulongxue/article/details/58605307">https://blog.csdn.net/yulongxue/article/details/58605307</a>
            </p>
        </el-card>
        <el-tabs v-model="activeName" size="small" type="card" @tab-click="handleTabsClick">
            <el-tab-pane v-for="active in tabOptions" :label="active.label" :key="active.name" :name="active.name"></el-tab-pane>
        </el-tabs>
        <!-- 以下自定义标签也可以使用-->
        <!--<EchartsBic></EchartsBic>-->
        <echarts-bic1 v-if="activeName === '0'" ref="chart1" :loading1="loading1"></echarts-bic1>
        <EchartsBic2 v-if="activeName === '1'" ref="chart2" :loading1="loading2"></EchartsBic2>
        <echarts-bic3 v-if="activeName === '2'" ref="chart3" :loading1="loading3"></echarts-bic3>
        <echarts-bic4 v-if="activeName === '3'" ref="chart4"></echarts-bic4>
        <echarts-bic5 v-if="activeName === '4'" ref="chart5"></echarts-bic5>
    </div>
</template>

<script>
import EchartsBic1 from './components/Echarts1';
import EchartsBic2 from './components/Echarts2';
import EchartsBic3 from './components/Echarts3';
import EchartsBic4 from './components/Echarts4';
import EchartsBic5 from './components/Echarts5';
export default {
    name: 'Index',
    components: {EchartsBic1, EchartsBic2, EchartsBic3, EchartsBic4, EchartsBic5},
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            tabOptions: [
                {
                    name: '0',
                    label: 'Echarts1'
                },
                {
                    name: '1',
                    label: 'Echarts2'
                },
                {
                    name: '2',
                    label: 'Echarts3'
                },
                {
                    name: '3',
                    label: 'Echarts4'
                },
                {
                    name: '4',
                    label: 'Echarts5'
                },
                {
                    name: '5',
                    label: 'Echarts6'
                }
            ],
            activeName: '0',
        };
    },
    computed: {},
    mounted() {},
    methods: {
        butClick() {
            switch (this.activeName) {
            case '0':
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.$refs['chart1'].barEchartsDete();
                    });
                });
                break;
            case '1':
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.$refs['chart2'].barEchartsDete();
                    });
                });
                break;
            case '2':
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.$refs['chart3'].barEchartsDete();
                    });
                });
                break;
            }
            // this.barEchartsDete();
            // setTimeout(() => {
            //     this.$nextTick(() => {
            // this.$refs['chart1'][0].barEchartsDete();
            // console.log(this.$refs['chart2'][0].$refs['echartsDemo'].initChart());
            // console.log(this.$refs['chart2'][0].chartOptions2);
            // console.log(this.$refs['chart2'][0]);
            // this.$refs['chart2'][0].this.butClick1();
            //     });
            // });
        },
        handleTabsClick() {
            switch (this.activeName) {
            case '0':
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.$refs['chart1'].barEchartsDete();
                    });
                });
                break;
            case '1':
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.$refs['chart2'].barEchartsDete();
                    });
                });
                break;
            case '2':
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.$refs['chart3'].barEchartsDete();
                    });
                });
                break;
            }
            // setTimeout(() => {
            //     this.$nextTick(() => {
            //
            //     });
            // });
        }
    },
};
</script>

<style lang="less" module>

</style>
