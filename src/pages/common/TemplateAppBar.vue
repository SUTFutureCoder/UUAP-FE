<template>
    <mu-appbar title="测试头部">
        <!--<mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>-->
        <!--<mu-flat-button color="white" label="登录/注册" slot="left"/>-->
        <a color="white" label="登录/注册" slot="left">登录/注册</a>
        <mu-flat-button color="white" label="接入" slot="right"/>
        <mu-flat-button color="white" label="关于" slot="right"/>
    </mu-appbar>
</template>
<script>
    export default {
        name: 'common',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style lang="less">
    .appbar-search-field{
        color: #FFF;
        margin-bottom: 0;
    &.focus-state {
         color: #FFF;
     }
    .mu-text-field-hint {
        color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
        color: #FFF;
    }
    .mu-text-field-focus-line {
        background-color: #FFF;
    }
    }
    .mu-appbar-title {
        margin-left: 0;
    }
</style>