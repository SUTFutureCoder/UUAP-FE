<template>
    <div class="reg_step_3">
        <mu-row>
            <mu-sub-header id="reg_step_3_header">欢迎！</mu-sub-header>
            <mu-content-block>
                {{message}}
            </mu-content-block>
        </mu-row>
    </div>
</template>
<script>
    import * as API from 'constants/API'
    import Bus from '../../../assets/EventBus'
    export default {
        name: 'reg_step_3',
        data (){
            return {
                message: "hello world",
            }
        },
        mounted (){
            //判断来源
            if (this.$route.query.refer != undefined){
                //跳认证
                this.message = "how are you"
            } else {
                //跳
                this.message = "are you ok?"
            }
            Bus.$emit('test', "are you ok?");
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