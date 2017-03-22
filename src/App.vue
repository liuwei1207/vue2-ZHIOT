<template>
    <div class="out-wrapper">
        <Loading v-if="loading"></Loading>
        <Topbar v-if="!loading"></Topbar>
        <transition v-if="!loading" name="page-switch-transition" enter-active-class="animated slideInLeft speed" leave-active-class="animated fadeOut speed" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script type="text/javascript">
import Topbar from './components/topbar.vue';
import Loading from './components/loading.vue';
import './assets/styles/reset.css'; // reset
import './assets/styles/common.css'; // common
import './assets/libs/animate/animate.min.css'; // animate

export default {
    data() {
            return {
                loading: true,
            }
        },
        components: {
            Topbar,
            Loading
        },
        mounted() {
            setTimeout(() => {
                this.loading = false;
            }, 3000)
        }
}
</script>
<style lang="css" scoped>
.speed {
    animation-duration: .5s
}
</style>
