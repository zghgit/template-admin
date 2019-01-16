<template>
    <div>
        <p>
            （1）变量数量的定义
        </p>
        <el-card>
            <p>
                <a href="http://www.echartsjs.com/api.html#echarts">echarts</a>
                <br/><a href="http://www.echartsjs.com/examples/#chart-type-bar">echartsDome</a>
            </p>
            <p>
                <a href="https://www.jianshu.com/p/b0d74e73032b">ES6 入门之 set 和 map、解构</a>
            </p>
            <p>
                <a href="https://www.cnblogs.com/jewave/p/6238604.html">(3)ES6解构赋值-对象篇</a>
            </p>
            <p>
                <a href="https://www.cnblogs.com/xumqfaith/p/7743387.html">vue中的 ref 和 $refs</a>
            </p>
            <p>
                <a href="https://blog.csdn.net/canger729/article/details/61200309">JavaScript-说说为啥循环闭包只显示最后一个i的值</a>
            </p>
            <p>
                <a href="https://blog.csdn.net/a5252145/article/details/82051825">关于for循环总是返回最后一个值问题</a>
            </p>
            <p>
                <a href="https://blog.csdn.net/yinxiangzhongqing/article/details/54018527">JS的for循环总是弹出最后一个值得解决方法</a>
            </p>
            <p>
                <a href="https://blog.csdn.net/babyxue/article/details/79866586">js中for循环获取到的值都是最后一个解决方法</a>
            </p>
            <Calculator></Calculator>
            <Deconstruction></Deconstruction>
        </el-card>
    </div>
</template>

<script>
import Calculator from './calculator';
import Deconstruction from './deconstruction';
export default {
    name: 'es6Remark',
    components: {Calculator, Deconstruction},
    data() {
        return {
            address: 'One Infinite Loop, Cupertino 95014',
            cityZipCodeRegex: /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/,
            time: `Hello ${'name'}, it's ${66} now`
        };
    },
    computed: {},
    mounted() {
        // this.tood();
        this.classData();
    },
    methods: {
        // tood() {
        //     let ss = this.time;
        //     console.log(ss);
        //     // 使用结构赋值（对象的赋值）
        //     const data = {name: 'dys', age: 1};
        //     console.log(data);
        //     const {name, age} = data;
        //     console.log(name, age);
        //     // 使用结构赋值（数组的赋值）
        //     var fullName = ['jackie', 'willen'];
        //     const [firstName, lastName] = fullName;
        //     console.log(firstName, lastName + 11);
        // },
        classData() {
            let isDone = false;
            let ss = '国家';
            console.log(ss);
            console.log(isDone);
        }
    },
};
</script>

<style lang="less" module>

</style>
