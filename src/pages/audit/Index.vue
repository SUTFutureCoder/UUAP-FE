<template>
    <div id="audit">
        <Top></Top>
        <router-link :to="AuditAuthorizedList">测试</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    import * as Top from 'pages/common/TemplateAuditAppBar'
    import * as RouterPath from 'constants/RouterPaths'
    import Bus from 'assets/EventBus'

    export default {
        data() {
            return {
                AuditAuthorizedList: RouterPath.PAGES_AUDIT_AUTHORIZED,
            }
        },
        mounted() {
            let vue = this
            Bus.$on('audit_change_router', function (route_path) {
                vue.$router.push({path: route_path})
            });
        },
        methods: {
            //监听头部的指令
            changeRouter: function (router_path){

            }

        },
        components: {
            Top,
        }
    }
</script>
<style>
</style>