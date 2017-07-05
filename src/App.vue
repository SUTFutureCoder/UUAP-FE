<template>
    <div id="app">
        <top v-if="show_top == true"></top>
        <router-view></router-view>
    </div>
</template>

<script>
import Top from 'pages/common/TemplateAppBar'
import Bus from 'assets/EventBus'

export default {
    name: 'app',
    data () {
        return {
            show_top: true,
        }
    },
    mounted (){
        Bus.$on('test', function (msg) {
            alert(msg)
            this.show_top = false
        });
    },
    components: {
        Top
    }
}
</script>

<style>
    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v21/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
    }
    html,body,dl,ul,ol,menu,li,div,p,img,h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
        border: none;
    }
    /*#app{*/
        /*background-image: url('./assets/img/DSC_0309_2-min.jpg');*/
        /*background-size: contain;*/
    /*}*/
</style>
