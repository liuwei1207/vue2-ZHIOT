<template>
    <div class="out-wrapper">
        <Topbar></Topbar>
        <transition name="page-switch-transition" enter-active-class="animated bounceInLeft" leave-active-class="animated fadeOut speed" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script type="text/javascript">
import Topbar from './components/topbar.vue';
import './assets/styles/reset.css'; // reset
import './assets/styles/common.css'; // common
import './assets/libs/animate/animate.min.css'; // animate

export default {
    data() {
            return {

            }
        },
        components: {
            Topbar,
        }
}
</script>
<style lang="css" scoped>
.speed {
    animation-duration: .3s
}
</style>
