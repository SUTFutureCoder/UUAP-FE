<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    html,body,dl,ul,ol,menu,li,div,p,img,h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
        border: none;
    }
    body {
        width: 100%;
        height: 100%;
    }
    #app{
        background-image: url('./assets/img/DSC_0309_2-min.jpg');
        background-size: contain;
    }
</style>
