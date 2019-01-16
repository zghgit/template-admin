<template>
    <div>
        <span>在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：</span>
        <div>
            <h1>全部的按键别名：</h1>
            <ul>
                <li>.enter</li>
                <li>.tab</li>
                <li>.delete (捕获“删除”和“退格”键)</li>
                <li>.esc</li>
                <li>.space</li>
                <li>.up</li>
                <li>.down</li>
                <li>.left</li>
                <li>.right</li>
                <li>.middle</li>
            </ul>
        </div>
        <el-card>
            <p>
                <span>
                    :只有在 `keyCode` 是 13 时调用 `vm.submit()
                </span>
                <el-input type="primary" @keyup.13="keypSubmit"></el-input>
            </p>
            <p>
                <span>
                    记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
                </span>
                <el-input type="primary" @keyup.enter="keyupEnter"></el-input>
            </p>
            <p>
                <el-input type="primary" @keyup.alt.67="keyupAlt">keyup.alt.67: Alt + C</el-input>
            </p>
            <div @click.ctrl="doClickCtrl">click.ctrl :Ctrl + Click</div>
            <el-button @click.ctrl="onClick">click.ctrl:即使 Alt 或 Shift 被一同按下时也会触发</el-button>
            <el-button @click.ctrl.exact="onCtrlClick">click.ctrl.exact:有且只有 Ctrl 被按下的时候才触发</el-button>
            <el-button @click.exact="onClick">click.exact:没有任何系统修饰符被按下的时候才触发</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'keyup',
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
    },
    methods: {
        keypSubmit() {},
        keyupEnter() {},
        keyupAlt() {},
        doClickCtrl() {},
        onClick() {},
        onCtrlClick() {},
    },
};
</script>

<style lang="less" module>

</style>
