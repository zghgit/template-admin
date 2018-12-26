<template>
    <div>
        <sof-scene></sof-scene>
    </div>
</template>

<script>
import SofScene from '../sceneConfiguration/components/Sscene';
export default {
    name: 'Index',
    components: {SofScene},
    data() {
        return {
            dd: '2',
        };
    },
    methods: {
    },
    mounted() {}
};
</script>

<style lang="less" module></style>
