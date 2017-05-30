<template>
    <mu-card>
        <mu-card-media>
            <div id="card-input-box">
                <mu-text-field label="手机号或邮箱" labelFloat/><br/>
                <mu-text-field label="密码" type="password" labelFloat/><br/>
                <mu-text-field label="验证码" hintText="图片或声音验证码" labelFloat/><br/>
                <captcha></captcha>
            </div>
        </mu-card-media>
        <mu-card-actions>
            <mu-row gutter>
                <mu-col width="100" tablet="70" desktop="70">
                    <mu-raised-button id="card-action-login-btn" @click="loginExec" label="登录" primary/>
                </mu-col>
                <mu-col width="100" tablet="30" desktop="30">
                    <mu-raised-button id="card-action-reg-btn"   label="注册" backgroundColor="#a4c639" />
                </mu-col>
            </mu-row>
        </mu-card-actions>
    </mu-card>
</template>
<script>
    import Captcha from '../../pages/common/Captcha'

    export default {
        name: 'login',
        data() {
            return {
            }
        },
        methods: {
            loginExec: function () {
                this.$http.get('http://www.baidu.com')
                    .then((response) => {
                        console.log(response)
                    })
                    .catch(function (response) {
                        console.log(response)
                    })
            }
        },
        components: {
            Captcha
        }
    }
</script>
<style scoped lang="less">
    .mu-card{
        width: 50%;
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