<template>
    <div :class="$style.head_top">
        <div :class="$style.head_top_log"></div>
        <div :class="$style.user_role">
            <el-input :class="$style.search " type="text"></el-input>
            <p :class="$style.sear_p">
                <i :class="[$style.switch, 'fas fa-bars fa-lg']"></i>欢迎您登录!
            </p>
            <p :class="$style.sear_p">
                <i :class="[$style.switch, 'fas fa-bars fa-lg']"></i>
            </p>
            <ul :class="$style.ues_ul">
                <li @click="logoutClick">退出</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headTop',
    data() {},
    methods: {
        logoutClick() {}
    }
};
</script>

<style lang="less" module>
    @import '../../../assets/style/config.less';

    @height: 60px;
    .head_top {
        width: 100%;
        height: @height;
        .head_top_log {
            background: url('../../../assets/img/common/top2.png') no-repeat;
            width: 100%;
            height: @height;
            z-index: -10;
            zoom: 1;
            background-size: cover;
            background-position: center center;
        }
        .user_role {
            float: right;
            font-size: 14px;
            color: #fff;
            position: relative;
            top: -96px;
            width: 200px;
            .sear_p {
                width: 100px;
                i {
                    margin-right: 7px;
                }
            }
            p, .search {
                float: left;
            }
            .ues_ul {
                display: none;
            }
        }
        .user_role:hover .ues_ul {
            display: block;
        }
    }
</style>
