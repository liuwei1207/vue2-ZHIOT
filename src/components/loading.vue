<template>
    <transition name="page-switch-transition" leave-active-class="animated fadeOut" mode="out-in">
        <div class="site-loading__wrapper">
            <div class="site-loading__img"></div>
        </div>
    </transition>
</template>
<style type="text/css">
.site-loading__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: #fff
}

.site-loading__img {
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    margin: -60px 0 0 -60px;
    display: inline-block;
    background: url(../assets/images/loading-pen.gif) no-repeat;
    background-position: 53.9622641509434% 0;
    width: 120px;
    height: 120px;
}
</style>
