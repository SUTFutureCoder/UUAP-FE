<template>
    <mu-card>
        <div class="step-container">
            <mu-stepper :activeStep="activeStep">
                <mu-step>
                    <mu-step-label>
                        注册
                    </mu-step-label>
                </mu-step>
                <mu-step>
                    <mu-step-label>
                        完善
                    </mu-step-label>
                </mu-step>
                <mu-step>
                    <mu-step-label>
                        欢迎
                    </mu-step-label>
                </mu-step>
            </mu-stepper>
            <div class="step-content">
                <template v-if="activeStep == 0">
                    <RegStep1 @next="nextStep"></RegStep1>
                </template>
                <template v-if="activeStep == 1">
                    <RegStep2 @next="nextStep" :lastStepRet="lastStepRet"></RegStep2>
                </template>
                <template v-if="activeStep == 2">
                    <RegStep3 :lastStepRet="lastStepRet"></RegStep3>
                </template>
            </div>
        </div>
    </mu-card>
</template>
<script>
    import RegStep1 from './components/RegStep1'
    import RegStep2 from './components/RegStep2'
    import RegStep3 from './components/RegStep3'

    export default {
        data () {
            return {
                activeStep: 0,
                lastStepRet: {},
            }
        },
        computed: {
            finished () {
                return this.activeStep > 2
            }
        },
        methods: {
            nextStep: function(childData){
                this.lastStepRet = childData
                this.activeStep++
            }
        },
        components: {
            RegStep1,
            RegStep2,
            RegStep3,
        }
    }
</script>
<style>
    .mu-card{
        width: 90%;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 10px;
        text-align: center;
    }
    .step-container {
        width: 100%;
        max-width: 700px;
        margin: auto;
    }
    .step-content {
        padding: 8px 8px 8px 8px;
    }
</style>