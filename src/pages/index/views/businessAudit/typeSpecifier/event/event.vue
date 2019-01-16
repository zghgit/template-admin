<template>
    <div>
        <h1>事件修饰 -- stop</h1>
        <el-card>
            <div>
                <br/>修饰符是由点开头的指令后缀来表示的。
                <br/>
                <br/>.stop
                <br/>.prevent
                <br/>.capture
                <br/>.self
                <br/>.once
                <br/>.passive
            </div>
            <p>
                <a @click.stop="doStop">1.click.stop:阻止单击事件继续传播</a>
            </p>
            <p>
                 <form @submit.prevent="onSubmitPrevent">2.submit.prevent:提交事件不再重载页面</form>
            </p>
            <p>
                <a @click.stop.prevent="doStopPrevent">3.click.stop.prevent:修饰符可以串联</a>
            </p>
            <form @submit.prevent>4.submit.prevent:只有修饰符</form>
            <div @click.capture="doCapture">5.click.capture:添加事件监听器时使用事件捕获模式;即元素自身触发的事件先在此处理，然后才交由内部元素进行处理</div>
            <div @click.self="doSelf">6.click.self：只当在 event.target 是当前元素自身时触发处理函数；即事件不是从内部元素触发的</div>
            <div>
                <br/>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。
                <br/>因此，用 v-on:click.prevent.self 会阻止所有的点击，
                <br/>而 v-on:click.self.prevent 只会阻止对元素自身的点击。
            </div>
            <div>2.1.4新增</div>
            <div @click.once="doOnce">7.click.once:点击事件将只会触发一次</div>
            <span>
                不像其它只能对原生的 DOM 事件起作用的修饰符，.once 修饰符还能被用到自定义的组件事件上
            </span>
            <div>2.3.0 新增</div>
            <p>Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符</p>
            <p>
                <br/>滚动事件的默认行为 (即滚动行为) 将会立即触发
                <br/>而不会等待 `onScroll` 完成
                <br/>这其中包含 `event.preventDefault()` 的情况
                <br/>这个 .passive 修饰符尤其能够提升移动端的性能。
            </p>
            <div @scroll.passive="onScrollPassive">8.scroll.passive:</div>
            <span>
                不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。
            </span>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'clickStop',
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
    },
    methods: {
        doStop() {
            console.log('1.click.stop');
        },
        onSubmitPrevent() {
            console.log('2.submit.prevent');
        },
        doStopPrevent() {
            console.log('3.click.stop.prevent');
        },
        doCapture() {
            console.log('5.click.capture');
        },
        doSelf() {
            console.log('6.click.self');
        },
        doOnce() {
            console.log('7.click.once');
        },
        onScrollPassive() {
            console.log('8.scroll.passive');
        }
    },
};
</script>

<style lang="less" module>

</style>
