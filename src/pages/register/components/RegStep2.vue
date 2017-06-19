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
    </div>
</template>
<script>
    export default {
        name: 'reg_step_2',
        data () {
            return {
                reg_email:  "",
                reg_user_name:  "",
                reg_password:   "",
                reg_password_confirm:   "",
            }
        }
    }
</script>
<style>
    .mu-text-field {
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>