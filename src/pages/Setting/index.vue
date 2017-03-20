<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left" :class="{'layout-menu-dark': theme == 'dark'}">
                <Menu active-name="1" :theme="theme" width="auto">
                    <div class="layout-time-left">
                        2017-03-15 11:57
                    </div>
                    <Menu-group title="个性化">
                        <Menu-item name="1">
                            <Icon type="document-text"></Icon>
                            皮肤设置
                        </Menu-item>
                    </Menu-group>
                    <Menu-group title="系统设置">
                        <Menu-item name="3">
                            <Icon type="heart"></Icon>
                            退出系统
                        </Menu-item>
                    </Menu-group>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">ZHIot</Breadcrumb-item>
                        <Breadcrumb-item href="#">设备管理</Breadcrumb-item>
                        <Breadcrumb-item>设备列表</Breadcrumb-item>
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
<style scoped>
</style>
