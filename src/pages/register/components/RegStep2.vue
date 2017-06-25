<template>
    <div class="reg_step_2">
        <mu-row>
            <mu-text-field label="邮箱" v-model="reg_email" labelFloat />
        </mu-row>
        <mu-row>
            <mu-text-field label="用户名" v-model="reg_user_name" labelFloat />
        </mu-row>
        <mu-row>
            <mu-text-field label="密码" v-model="reg_password" labelFloat />
        </mu-row>
        <mu-row>
            <mu-text-field label="密码确认" v-model="reg_password_confirm" labelFloat />
        </mu-row>
        <mu-raised-button label="完成" class="reg_step_2_btn" @click="finnish" fullWidth primary/>
    </div>
</template>
<script>
    import * as API from 'constants/API'
    import bus from '../../../assets/EventBus'
    export default {
        props: ["lastStepRet"],
        name: 'reg_step_2',
        data (){
            return {
                reg_email:  "",
                reg_user_name:  "",
                reg_password:   "",
                reg_password_confirm:   "",
            }
        },
        methods: {
            finnish: function () {
                console.log(this.lastStepRet)
                //完善用户信息
                this.$http.post(API.API_COMPLETE_INFO, this.$data, {
                    emulateJSON: true
                })
                    .then((response) => {
                        var ret = response.body
                        if (ret['error_no'] != 0) {
                            alert(ret['error_msg'])
                            this.reg_phone_captcha_send = false
                        }
                    })
                    .catch(function (response) {
                        console.log(response)
                    })
                this.$emit('next', {

                })
            },
        }
    }
</script>
<style>
    .reg_step_2 {
        display: inline-block;
        width: auto;
    }
    .reg_step_2_btn {
        margin-bottom: 20px;
    }
</style>