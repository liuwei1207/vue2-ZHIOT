<template>
    <MainContent>
        <!-- slot-Menu -->
        <Menu slot="Menu" active-name="1" theme="dark" width="auto">
            <div class="layout-logo-left"></div>
            <Menu-item name="1">
                <Icon type="ios-navigate" :size="iconSize"></Icon>
                <span class="layout-text">选项 11</span>
            </Menu-item>
            <Menu-item name="2">
                <Icon type="ios-keypad" :size="iconSize"></Icon>
                <span class="layout-text">选项 22</span>
            </Menu-item>
            <Menu-item name="3">
                <Icon type="ios-analytics" :size="iconSize"></Icon>
                <span class="layout-text">选项 33</span>
            </Menu-item>
        </Menu>
        <!-- /slot-Menu -->
        <!-- slot-Breadcrumb -->
        <Breadcrumb slot="Breadcrumb">
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>平台列表</Breadcrumb-item>
        </Breadcrumb>
        <!-- /slot-Breadcrumb -->
    </MainContent>
</template>
<script>
import MainContent from '../../components/MainContent.vue';

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

        },
        components: {
            MainContent
        }
}
</script>
<style>
</style>
