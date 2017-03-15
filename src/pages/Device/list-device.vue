<template>
    <div v-on:click="say()">list-device</div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            page: '404'
        }
    },
    methods: {
        say() {
            this.$store.commit('SIDEBAR_OPEN_CHANGE');
            console.log(this.$store.state.sidebarIsOpenFlag);
        }
    }
}
</script>
