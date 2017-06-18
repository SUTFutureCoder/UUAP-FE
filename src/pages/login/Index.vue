<template>
    <mu-card>
        <mu-card-media>
            <div id="card-input-box">
                <mu-text-field label="手机号或邮箱" v-model="login_account" labelFloat/><br/>
                <mu-text-field label="密码" type="password" v-model="login_password" labelFloat/><br/>
                <mu-text-field label="验证码" hintText="图片或声音验证码" v-model="login_captcha" labelFloat/><br/>
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
</template>
<script>
    import Captcha from '../../pages/common/Captcha'
    import * as API from 'constants/API'
    import * as RouterPaths from 'constants/RouterPaths'

    export default {
        name: 'login',
        data() {
            return {
                login_account:  "",
                login_password: "",
                login_captcha:  "",
            }
        },
        methods: {
            loginExec: function () {
                this.$http.get(API.API_GET_IMG_CAPTCHA)
                    .then((response) => {
                        console.log(response)
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
    #captcha-box {
        /*text-align: left;*/
    }
</style>