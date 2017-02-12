<template>
    <mu-card>
        <mu-card-media>
            <div id="card-input-box">
                <mu-text-field label="手机号或邮箱" labelFloat/><br/>
                <mu-text-field label="密码" type="password" labelFloat/><br/>
                <mu-text-field label="验证码" hintText="图片或声音验证码" labelFloat/><br/>
                <div id="captcha-box">
                    <img src="~assets/img/DoorGod.png" @click="reloadCaptcha"/>
                    <a>声音验证码</a>
                    <mu-icon alt="声音验证码" value="headset_black" size="50"/>
                </div>
            </div>
        </mu-card-media>
        <mu-card-actions>
            <mu-row gutter>
                <mu-col width="100" tablet="70" desktop="70">
                    <mu-raised-button id="card-action-login-btn" label="登录" primary/>
                </mu-col>
                <mu-col width="100" tablet="30" desktop="30">
                    <mu-raised-button id="card-action-reg-btn"   label="注册" backgroundColor="#a4c639" />
                </mu-col>
            </mu-row>
        </mu-card-actions>
    </mu-card>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {

            }
        },
        methods: {
            reloadCaptcha: function (){
                //使用vue resource重新请求一个图片
                alert('testestsetset');
            }
        }
    }
</script>
<style scoped lang="css">
    .mu-card{
        width: 50%;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 10px;
        text-align: center;
    }
    .mu-card-media{
        position: relative;
        margin: 0 auto;
    }
    .mu-card-actions{
        margin: 0 auto;
        width: 256px;
    }
    .mu-raised-button{
        width: 100%;
    }
</style>