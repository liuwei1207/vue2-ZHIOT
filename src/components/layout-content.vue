<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <transition name="router-transiton" enter-active-class="animated fadeIn" leave-active-class="animated fadeOutLeft" mode="out-in">
                    <slot name="Menu"></slot>
                </transition>
                <i-button type="text" class="layout-toggleBtn" @click="toggleClick">
                    <Icon type="chevron-left" size="32" :class="[spanLeft < 4 ? 'layout-fold-icon' : 'layout-open-icon']"></Icon>
                </i-button>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-breadcrumb">
                    <transition name="router-transiton" enter-active-class="animated fadeIn" leave-active-class="animated fadeOutLeft" mode="out-in">
                        <slot name="Breadcrumb"></slot>
                    </transition>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2016-2017 &copy; ZHIOT
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
            return {
                show: true
            }
        },
        computed: {
            // 返回左侧导航区宽度
            spanLeft() {
                return this.$store.state.pageOptions.spanLeft;
            },
            // 返回右侧内容区宽度
            spanRight() {
                return this.$store.state.pageOptions.spanRight;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 4) {
                    this.$store.state.pageOptions.spanLeft = 2;
                    this.$store.state.pageOptions.spanRight = 22;
                } else {
                    this.$store.state.pageOptions.spanLeft = 4;
                    this.$store.state.pageOptions.spanRight = 20;
                }
            }
        }
}
</script>
<style>
.layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    height: calc(100% - 60px);
}

.layout>.ivu-row-flex {
    height: 100%;
    min-height: 200px;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #464c5b;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    transition: width .2s ease-in-out;
}


/* toggle按钮 */

.layout-toggleBtn {
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%)!important;
}

.layout-open-icon {
    transform: rotate(0deg);
    transition: transform ease .36s;
}

.layout-fold-icon {
    transform: rotate(180deg);
    transition: transform ease .36s;
}


/* 切换页面时候， css过渡效果 */

.router-transiton-enter-active,
.router-transiton-leave-active {
    transition: all 0.5s linear;
}

.router-transiton-enter,
.router-transiton-leave-active {
    opacity: 0
}
</style>
