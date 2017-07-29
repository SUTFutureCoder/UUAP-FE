<template>
    <mu-appbar>
        <div class="appbar-title-img"><img src="~assets/img/DoorGod.png"></div>
        <div class="appbar-title-title"><a slot="left">门神-Alpha</a></div>
        <mu-flat-button color="white" label="接入" slot="right"/>
        <mu-flat-button color="white" label="关于" slot="right"/>
        <mu-flat-button color="white" v-if="loged" :label="msg" @click="redirect(routerLogin)"/>
    </mu-appbar>
</template>
<script>
    import * as RouterPath from 'constants/RouterPaths'
    export default {
        name: 'common',
        data() {
            return {
                msg: 'Hello World',
                loged: false,
                routerLogin: RouterPath.PAGES_LOGIN
            }
        },
        methods: {
            redirect: id => {
                switch (id){
                    case RouterPath.PAGES_LOGIN:
                        alert('tsttst');
                    break;
                };
            }
        }
    }
</script>
<style scoped lang="less">
    .mu-appbar {
        position: fixed;
        overflow: hidden;
        top: 0;
        .appbar-title-img {
            img {
                margin-top: 6px;
                height: 50px;
                float: left;
            }
        }
        .appbar-title-title{
            float: left;
            margin-left: 20px;
            a {
                color: #FFF;
            }
        }
    }
</style>