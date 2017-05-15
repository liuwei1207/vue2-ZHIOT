<template>
    <MainContent>
        <!-- slot-Menu -->
        <Menu slot="Menu" active-name="devices/groups-list" theme="dark" width="auto" @on-select="handleRouterSwitch">
            <div class="layout-logo-left">{{clock}}</div>
            <Menu-group title="设备管理" v-if="currentRouterPath == '/devices/groups-list'">
                <!-- 判断当前路由是群组列表，则显示对应的左侧导航栏内容 -->
                <Menu-item name="devices/groups-list">
                    <Icon type="document-text" :size="iconSize"></Icon>
                    <span class="layout-text">群组列表</span>
                </Menu-item>
            </Menu-group>
            <Menu-group v-else>
                <!-- else -->
                <Menu-item name="devices/devices-list">
                    <Icon type="document-text" :size="iconSize"></Icon>
                    <span class="layout-text">设备列表</span>
                </Menu-item>
                <Menu-item name="devices/policys-list">
                    <Icon type="document-text" :size="iconSize"></Icon>
                    <span class="layout-text">策略列表</span>
                </Menu-item>
            </Menu-group>
        </Menu>
        <!-- /slot-Menu -->
        <!-- slot-Breadcrumb -->
        <Breadcrumb slot="Breadcrumb">
            <Breadcrumb-item>
                <router-link :to="'/'">ZHIOT</router-link>
            </Breadcrumb-item>
            <Breadcrumb-item v-if="currentRouterPath !== '/devices/groups-list'">
                <!-- 判断当前路由是群组列表，则不显示对应的面包屑导航 -->
                <router-link :to="'groups-list'">群组列表</router-link>
            </Breadcrumb-item>
            <Breadcrumb-item>{{currentRouterName}}</Breadcrumb-item>
        </Breadcrumb>
        <!-- /slot-Breadcrumb -->
    </MainContent>
</template>
<script>
import MainContent from '../../components/layout-content.vue';
import moment from 'moment';

export default {
    data() {
            return {
                clock: '正在加载中..请稍后'
            }
        },
        computed: {
            iconSize() {
                return this.$store.state.pageOptions.spanLeft === 4 ? 14 : 24;
            },
            currentRouterPath() {
                return this.$route.path;
            },
            currentRouterName() {
                return this.$route.name;
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
            },
            getClock() {
                this.clock = moment().format('YYYY-MM-DD HH:mm:ss');
            }
        },
        components: {
            MainContent
        },
        mounted() {
            setInterval(this.getClock, 1000);
        }
}
</script>
<style>
</style>
