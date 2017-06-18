<template>
    <div class="reg_step_1">
        <mu-text-field label="手机号" v-model="reg_phone" labelFloat/>
        <mu-raised-button label="发送验证码"  class="reg_phone_captcha_btn" v-if="reg_phone_captcha_send == false" @click="send_phone_captcha()"/>
        <mu-raised-button label="验证码已发送" disabled="disabled" class="reg_phone_captcha_btn" v-if="reg_phone_captcha_send == true"/>
        <br/>
        <mu-text-field label="验证码" v-model="reg_phone_captcha" class="reg_phone_captcha_input" labelFloat/>
        <br/>
        <mu-raised-button label="完善信息" fullWidth primary/>

    </div>
</template>
<script>
    import * as API from 'constants/API'
    export default {
        name: 'reg_step_1',
        data () {
            return {
                reg_phone: '',
                reg_phone_captcha: '',

                reg_phone_captcha_send: false,

            }
        },
        methods: {
            send_phone_captcha: function () {
                //发送验证码
                this.$http.post(API.API_SEND_PHONE_CAPTCHA, {
                        "reg_phone": this.reg_phone
                    }, {
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

                this.reg_phone_captcha_send = true
            },
        }
    }
</script>
<style>
    .reg_step_1 {
        display: inline-block;
        width: auto;
    }
    .reg_phone_captcha_btn {
        margin-left: 10px;
    }
    .reg_phone_captcha_input {
        width: 100%;
    }
    .mu-raised-button {
        margin-bottom: 20px;
    }
</style>