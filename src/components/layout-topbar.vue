<template>
    <Menu mode="horizontal" :theme="theme" active-name="devices/groups-list" @on-select="handleRouterSwitch">
        <div class="top-bar--left">
            <a class="top-bar__logo" href="" title="">
                <Icon type="ios-cloud-outline" size="36"></Icon>
                <span>智和云物联</span>
            </a>
        </div>
        <div class="top-bar--right">
            <Menu-item name="devices/groups-list">
                <Icon type="ios-people"></Icon>
                设备管理
            </Menu-item>
            <Menu-item name="platforms">
                <Icon type="ios-people"></Icon>
                平台管理
            </Menu-item>
            <Menu-item name="users">
                <Icon type="ios-people"></Icon>
                用户管理
            </Menu-item>
            <Submenu name="5">
                <template slot="title">
                    <Icon type="settings"></Icon>
                    116402157@163.com
                </template>
                <Menu-group title="个人设置">
                    <Menu-item name="user/center">用户中心</Menu-item>
                </Menu-group>
                <Menu-group title="系统设置">
                    <Menu-item name="logout">退出系统</Menu-item>
                </Menu-group>
            </Submenu>
        </div>
    </Menu>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        computed: {
            // ---------------------
            // 返回当前所选主题名称
            // ---------------------
            theme() {
                return this.$store.state.pageOptions.theme;
            }
        },
        methods: {
            // ---------------------
            // 处理路由切换操作
            // ---------------------
            handleRouterSwitch(routerName) {
                // console.log(routerName);
                this.$router.push({
                    path: "/" + routerName,
                    // query: {
                    //     plan: 'private'
                    // }
                });
            }
        }

}
</script>
<style>
.top-bar--left {
    float: left;
    margin-left: 50px;
}

.ivu-menu-dark .top-bar--left .top-bar__logo {
    color: #fff;
}

.top-bar--left .top-bar__logo .ivu-icon {
    position: relative;
    top: 6px;
}

.top-bar--right {
    float: right;
    margin-right: 50px;
}

.top-bar--right .ivu-menu-item a {
    display: inline-block;
    height: 100%;
}

.ivu-menu-dark .top-bar--right .ivu-menu-item a {
    color: #9ea7b4;
}

.ivu-menu-dark .top-bar--right .ivu-menu-item.ivu-menu-item-selected a {
    color: #fff;
}

.ivu-menu-dark .top-bar--right .ivu-menu-item a:hover {
    color: #9ea7b4;
}
</style>
