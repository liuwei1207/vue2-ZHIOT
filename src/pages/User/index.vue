<template>
    <MainContent>
        <!-- slot-Menu -->
        <Menu slot="Menu" active-name="groups" theme="dark" width="auto" @on-select="handleRouterSwitch">
            <div class="layout-logo-left"></div>
            <Menu-group title="设备管理">
                <Menu-item name="groups">
                    <Icon type="document-text" :size="iconSize"></Icon>
                    <span class="layout-text">群组列表</span>
                </Menu-item>
            </Menu-group>
        </Menu>
        <!-- /slot-Menu -->
        <!-- slot-Breadcrumb -->
        <Breadcrumb slot="Breadcrumb">
           <Breadcrumb-item href="#">ZHIOT</Breadcrumb-item>
            <Breadcrumb-item>用户列表</Breadcrumb-item>
        </Breadcrumb>
        <!-- /slot-Breadcrumb -->
    </MainContent>
</template>
<script>
import MainContent from '../../components/layout-content.vue';

export default {
    data() {
            return {

            }
        },
        computed: {
            iconSize() {
                return this.$store.state.pageOptions.spanLeft === 4 ? 14 : 24;
            }
        },
        methods: {
            handleRouterSwitch(routerName) {
                // console.log(routerName);
                this.$router.push({
                    path: "/" + routerName,
                    // query: {
                    //     plan: 'private'
                    // }
                });
            }
        },
        components: {
            MainContent
        }
}
</script>
<style>
</style>
