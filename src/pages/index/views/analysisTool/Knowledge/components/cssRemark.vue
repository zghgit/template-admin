<template>
    <div :class="$style.css_remark">
        <p>display: flex;</p>
        <p>justify-content: space-between;</p>
        <p>width: calc(100% / 2 - 3px)</p>
        <p>cursor: pointer;   鼠标指针</p>
    </div>
</template>

<script>
export default {
    name: 'cssRemark',
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
    },
    methods: {},
};
</script>

<style lang="less" module>
    .css_remark p {
        font-size: 18px;
        color: #17aec6;
    }
</style>
