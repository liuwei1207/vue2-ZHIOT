<template>
    <Menu mode="horizontal" :theme="theme" active-name="" @on-select="changeNav">
        <div class="top-bar--left">
            <a class="top-bar__logo" href="" title="">
                <Icon type="ios-cloud-outline" size="36"></Icon>
                <span>智和云物联</span>
            </a>
        </div>
        <div class="top-bar--right">
            <Menu-item name="1">
                <router-link :to="'/thing/list'">
                    <Icon type="ios-paper"></Icon>
                    设备管理
                </router-link>
            </Menu-item>
            <Menu-item name="2">
                <router-link :to="'/platform/list'">
                    <Icon type="ios-albums"></Icon>
                    平台管理
                </router-link>
            </Menu-item>
            <Menu-item name="3">
                <router-link :to="'/user/list'">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </router-link>
            </Menu-item>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="gear-b"></Icon>
                    综合设置
                </template>
                <Menu-group title="个性化">
                    <router-link :to="'/setting/theme'">
                        <Menu-item name="4-1">皮肤设置</Menu-item>
                    </router-link>
                </Menu-group>
                <Menu-group title="系统设置">
                    <router-link :to="'/logout'">
                        <Menu-item name="4-2">退出系统</Menu-item>
                    </router-link>
                </Menu-group>
            </Submenu>
        </div>
    </Menu>
</template>
<script>
export default {
    data() {
            return {
                currentRouter: ''
            }
        },
        computed: {
            theme() {
                return this.$store.state.theme;
            }
        },
        methods: {
            changeNav() {

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
