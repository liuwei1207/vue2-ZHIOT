<template>
    <div>
        <!-- list-content -->
        <div class="list-content">
            <h2>test</h2>
            <i-button type="ghost" @click="changeTheme">切换主题</i-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        methods: {
            changeTheme() {
                this.$store.commit('THEME_CHANGE');
            }

        }
}
</script>
<style type="text/css">

</style>
