<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left" :class="{'layout-menu-dark': theme == 'dark'}">
                <Menu active-name="1" :theme="theme" width="auto">
                    <div class="layout-time-left">
                        2017-03-15 11:57
                    </div>
                    <Menu-item name="1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">用户列表</span>
                    </Menu-item>
                    <Menu-item name="2">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                        <span class="layout-text">角色列表</span>
                    </Menu-item>
                    <Menu-item name="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">权限管理</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">ZHIot</Breadcrumb-item>
                        <Breadcrumb-item href="#">用户管理</Breadcrumb-item>
                        <Breadcrumb-item>用户列表</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2017-2018 &copy; ZHIOT
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
            return {
                spanLeft: 4,
                spanRight: 20
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 4 ? 16 : 24;
            },
            theme() {
                return this.$store.state.theme;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 4) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            }
        }
}
</script>
<style>

</style>
