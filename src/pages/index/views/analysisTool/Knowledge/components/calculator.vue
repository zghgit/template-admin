<template>
    <el-card>
        <h1>for 循环转换为 forEach</h1>
        <a href="https://blog.csdn.net/qq_41899174/article/details/82797089">js的15种循环遍历，你掌握了几种？</a>
        <el-button type="success" @click="forClick">for循环</el-button>
        <el-button type="primary" @click="es6Click">ES6的forEach</el-button>
        <el-button type="primary" @click="forInClick">for in</el-button>
        <el-button type="primary" @click="forOFClick">for of</el-button>
        <p>
            总结来说:for in总是得到对像的key或数组,字符串的下标,而for of和forEach一样,是直接得到值
            结果for of不能对象用
            对于新出来的Map,Set上面
        </p>
        <el-button type="warning" @click="mapClick">Map:个用for in是遍历不了的</el-button>
        <el-button type="warning" @click="whileClick">While:</el-button>
        <el-button type="warning" @click="doWhileClick">do……while:</el-button>
        <el-button type="warning" @click="filterClick">filter:过滤循环</el-button>
        <el-button type="warning" @click="filterClick">some()，every():</el-button>
        <el-button type="warning" @click="objectKeysClick">Object,keys遍历对象的属性:</el-button>

    </el-card>
</template>

<script>
export default {
    name: 'calculator',
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
    },
    methods: {
        forClick() {
            const items = ['item1', 'item2', 'item3', 'item4'];
            const copyArr = [];
            for (let i = 0; i < items.length; i++) {
                copyArr.push(items[i]);
            }
            console.log(copyArr);
        },
        es6Click() {
            // let arr = ['A', 'B', 'C'];
            // arr.forEach(function(element, index, array) {
            //     // element: 指向当前元素的值
            //     // index: 指向当前元素的索引值。
            //     // array: 指向当前元素所属的数组对象。
            //     console.log(element);
            //     console.log(index);
            //     console.log(array);
            // }, this);
            const items1 = ['item1', 'item2', 'item3'];
            const copy1 = [];
            // items1.forEach(function(item) {
            //     copy1.push(item);
            // });
            items1.forEach((v, s, f) => {
                copy1.push(v, s, f);
            });
            console.log(copy1);
        },
        forInClick() {
            var A = {a: 1, b: 2, c: 3, d: 'hello World'};
            for (let K in A) {
                console.log(K);
                console.log(A[K]);
            }
        },
        forOFClick() {
            // let array = ['33', '22', '55'];
            // for (let v of array) {
            //     console.log(v);
            // }
            let s = 'heLogLin';
            for (let c of s) {
                console.log(c);
            }
        },
        mapClick() {
            var set = new Set();
            set.add('a').add('b').add('d').add('c');
            var map = new Map();
            map.set('g', 1).set('h', '443').set(999, 3);
            for (let v of set) {
                console.log(v);
            }
            for (let [k, v] of map) {
                console.log(k, v);
            }
            console.log('个用for in是遍历不了的');
        },
        whileClick() {},
        doWhileClick() {},
        filterClick() {
            [1, 2, 3, 4, 5].filter(function(elem) {
                return (elem > 3);
            }); // [4, 5]
            // 上面代码将大于3的数组成员，作为一个新数组返回。
            var arr = [0, 1, 'a', false];
            arr.filter(Boolean);
            console.log(arr);
        },
        objectKeysClick() {
            let obj = {
                p1: '124',
                ps: '4566'
            };
            console.log(Object.keys(obj).length);
            console.log(Object.getOwnPropertyNames(obj).length);
        }
    },
};
</script>

<style lang="less" module>
</style>
