<template>
    <div class="reg_step_2">
        <mu-row>
            <mu-text-field label="邮箱" v-model="reg_email" labelFloat />
        </mu-row>
        <mu-row>
            <mu-text-field label="用户名" v-model="reg_user_name" labelFloat />
        </mu-row>
        <mu-row>
            <mu-text-field label="密码" type="password" v-model="reg_password" labelFloat />
        </mu-row>
        <mu-row>
            <mu-text-field label="密码确认" type="password" v-model="reg_password_confirm" labelFloat />
        </mu-row>
        <mu-row>
            <mu-checkbox label="我已阅读并同意" v-model="reg_uela_confirm"/><a href='/static/UELA.txt' target="_blank">门神开放平台开发者协议</a>
        </mu-row>
        <mu-row>
            <mu-raised-button label="完成" class="reg_step_2_btn" v-if="reg_uela_confirm==false" fullWidth disabled/>
            <mu-raised-button label="完成" class="reg_step_2_btn" v-if="reg_uela_confirm==true" @click="finnish" fullWidth primary/>
        </mu-row>
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

                reg_uela_confirm: false
            }
        },
        methods: {
            finnish: function () {
                if (this.lastStepRet.reg_phone == '' || this.lastStepRet.reg_phone_captcha == ''
                        || this.reg_email == '' || this.reg_user_name == ''
                        || this.reg_password == '' || this.reg_password_confirm == ''){
                    alert('请填写完整');
                    return;
                }

                if (this.reg_password != this.reg_password_confirm ){
                    alert('两次密码请输入一致');
                    return;
                }

                if (false == this.reg_uela_confirm){
                    alert('请同意最终用户协议');
                    return;
                }

                //完善用户信息
                this.$http.post(API.API_COMPLETE_INFO, Object.assign(this.$data, this.lastStepRet), {
                        emulateJSON: true
                    })
                    .then((response) => {
                        var ret = response.body
                        if (ret['error_no'] != 0) {
                            alert(ret['error_msg'])
                            return
                        }
                        this.$emit('next', {

                        })
                    })
                    .catch(function (response) {
                        console.log(response)
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