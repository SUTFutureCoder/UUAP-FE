<template>
    <div id="login">
        <top v-if="show_top == true"></top>
        <mu-card>
            <mu-card-media>
                <div id="card-input-box">
                    <mu-row gutter>
                        <mu-text-field label="手机号或邮箱" v-model="login_account" labelFloat/>
                    </mu-row>
                    <mu-row gutter>
                        <mu-text-field label="密码" type="password" v-model="login_password" labelFloat/>
                    </mu-row>
                    <mu-row gutter>
                        <mu-text-field label="验证码" hintText="图片或声音验证码" v-model="login_captcha" labelFloat/>
                    </mu-row>
                    <captcha></captcha>

                </div>
            </mu-card-media>
            <mu-card-actions>
                <mu-row gutter>
                    <mu-col width="100" tablet="70" desktop="70">
                        <mu-raised-button id="card-action-login-btn" @click="loginExec" label="登录" primary/>
                    </mu-col>
                    <mu-col width="100" tablet="30" desktop="30">
                        <mu-raised-button id="card-action-reg-btn" @click="regExec" label="注册" backgroundColor="#a4c639" />
                    </mu-col>
                </mu-row>
            </mu-card-actions>
        </mu-card>
    </div>
</template>
<script>
    import Captcha from '../../pages/common/Captcha'
    import Top from 'pages/common/TemplateAppBar'
    import * as API from 'constants/API'
    import * as RouterPaths from 'constants/RouterPaths'

    export default {
        name: 'login',
        data() {
            return {
                login_account:  "",
                login_password: "",
                login_captcha:  "",

                show_top: true,
            }
        },
        methods: {
            loginExec: function () {
                this.$http.post(API.API_LOGIN, this.$data, {
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
            },
            regExec: function () {
                this.$router.push({path: RouterPaths.PAGES_REGISTER})
            }

        },
        components: {
            Top,
            Captcha
        }
    }
</script>
<style scoped lang="less">
    .mu-card{
        width: 90%;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 10px;
        text-align: center;
    }
    .mu-card-media{
        position: relative;
        margin: 50px auto;

        #card-input-box{
            position: relative;

            .mu-text-field{
                margin-left: 50%;
                transform: translateX(-50%);            }
        }
    }
    .mu-card-actions{
        margin: 0 auto;
        width: 256px;
    }
    .mu-raised-button{
        width: 100%;
    }
    .captcha {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>