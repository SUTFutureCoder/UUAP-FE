<template>
    <div class="reg_step_3">
        <mu-row>
            <mu-sub-header id="reg_step_3_header">欢迎！</mu-sub-header>
            <mu-content-block>
                <div v-if="$route.query.refer != undefined">
                    <mu-raised-button label="授权并登录" backgroundColor="#a4c639" fullWidth/>
                </div>
                <div v-else>
                    <mu-raised-button label="进入个人中心" :to="Audit" primary fullWidth/>
                </div>
            </mu-content-block>
        </mu-row>
    </div>
</template>
<script>
    import * as API from 'constants/API'
    import * as RouterPath from 'constants/RouterPaths'
    import Bus from '../../../assets/EventBus'
    export default {
        name: 'reg_step_3',
        data (){
            return {
                message: "hello world",

                //Router
                Audit: RouterPath.PAGES_AUDIT,
            }
        },
        mounted (){
            //判断来源
//            Bus.$emit('test', "are you ok?");
        },
        methods: {

        }
    }
</script>
<style>
    #reg_step_3_header {
        color: red;
        font-size: 20px;
    }
</style>