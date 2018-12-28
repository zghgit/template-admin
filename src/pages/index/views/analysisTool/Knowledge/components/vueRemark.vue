<template>
    <div :class="$style.vue_data">
        <br/>1.model: {
        <br/> prop: 'value',
        <br/> event: 'change'
        <br/> },
        <br/> 2.name: 'vueRemark',
        <br/> // 父传子
        <br/> 3.props: {
        <br/>       columns: {
        <br/>           type: Array,Object,String,Boolean,[Number],
        <br/>                 (例子：string ,number ,function ,boolean ,object ,array ,symbol)
        <br/>                  default() { return []; } },
        <br/>        },
        <br/>  },
        <br/> // 注册组件
        <br/> // 单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
        <br/> 4.components: {},
        <br/> // 混入, 是一个类的继承，类似于一个公共的方法。
        <br/> 5.mixins: [],
        <br/> // 监听事件
        <br/> 6.watch: {},
        <br/> // 存储数据
        <br/> 7.data() { return {}; },
        <br/> // 计算属性
        <br/> 8.computed: {},
        <br/> // 初始化数据
        <br/> 9.mounted() {},
        <br/> // 数据交互
        <br/> 10.methods: {
        <br/>        1）vuex存值方法： this.$store.commit('overStoreMut', resp);
        <br/>        2）vuex取值方法： this.$store.getters.overStoreGetters
        <br/>        3）子传父值方法： this.$emit('barEchartsCick', params);
        <br/> },
        <br/> // 在一个实例被创建之后执行代码
        <br/> 11.created() {},
        <br/> 12.beforeDestroy() {},
    </div>
</template>

<script>
export default {
    name: 'vueRemark',
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
    .vue_data {
        font-size: 18px;
        color: #17aec6;
    }
</style>
