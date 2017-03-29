<template>
    <div class="out-wrapper">
        <Topbar></Topbar>
        <router-view></router-view>
    </div>
</template>
<script>
import Topbar from './components/layout-topbar.vue';
export default {
    data() {
            return {

            }
        },
        components: {
            Topbar
        }
}
</script>
<style>
</style>
