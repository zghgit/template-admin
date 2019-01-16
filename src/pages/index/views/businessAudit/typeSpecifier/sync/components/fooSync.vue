<template>
    <div>
        <p>foo.sync</p>
        <div v-if="foo">
            <p>默认初始值是 {{ foo }},所以是显示的</p>
            <button type="primary" @click.stop="clickStop">foo</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fooSync',
    components: {},
    props: {
        foo: {
            type: Boolean,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    computed: {},
    mounted() {
    },
    methods: {
        clickStop() {
            this.$emit('update:foo', false); // 触发 input 事件，并传入新值
        }
    },
};
</script>

<style lang="less" module>

</style>
