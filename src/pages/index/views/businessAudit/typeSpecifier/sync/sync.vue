<template>
    <div>
        <foo-sync :foo.sync="bar"></foo-sync>
        <el-button type="text" @click="butClick">toggle</el-button>
    </div>
</template>

<script>
import FooSync from './components/fooSync';
export default {
    name: 'sync',
    components: {FooSync},
    data() {
        return {
            bar: true
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        butClick() {
            this.bar = !this.bar;
        }
    },
};
</script>

<style lang="less" module>

</style>
