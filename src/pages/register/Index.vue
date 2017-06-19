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
                    <!--<RegStep1></RegStep1>-->
                <!--</template>-->
                <!--<template v-if="activeStep == 1">-->
                    <RegStep2></RegStep2>
                </template>
            </div>
        </div>
    </mu-card>
</template>
<script>
    import RegStep1 from './components/RegStep1'
    import RegStep2 from './components/RegStep2'

    export default {
        data () {
            return {
                activeStep: 0
            }
        },
        computed: {
            finished () {
                return this.activeStep > 2
            }
        },
        methods: {

        },
        components: {
            RegStep1,
            RegStep2
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