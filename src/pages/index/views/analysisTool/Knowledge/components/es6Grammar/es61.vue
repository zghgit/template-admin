<template>
    <div>
        <el-button type="danger" @click="demo1">解构</el-button>
    </div>
</template>

<script>
export default {
    name: 'es61',
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
    },
    methods: {
        demo1() {
            const arr1 = ['a', 'b'];
            const arr2 = ['c'];
            const arr3 = ['d', 'a', 'e'];
            const arr4 = [...arr1, ...arr2, ...arr3];
            console.log(arr4);
            const [first, ...rest] = [1, 2, 3, 4, 5];
            console.log(first);
            console.log(rest);
        }
    },
};
</script>

<style lang="less" module>

</style>
