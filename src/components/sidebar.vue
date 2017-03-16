<template>
    <div id="main-sidebar" v-bind:class="{ 'sidebar-collapsed': !isOpen }">
        <a class="logo" target="_blank" href="/">
            <img src="../assets/images/ic_cloud_queue_white_36px.svg" alt="智和安捷">
        </a>
        <ul>
            <li tip="设备管理" class="sidebar-item loaded">
                <router-link to="/thing/list">
                    <i class="iconfont icon-bcc"></i>
                    <span title="设备管理">物接入</span>
                </router-link>
            </li>
            <li tip="平台管理" class="sidebar-item loaded">
                <router-link to="/platform/list">
                    <i class="iconfont icon-bcc"></i>
                    <span title="平台管理">平台管理</span>
                </router-link>
            </li>
            <li tip="用户管理" class="sidebar-item loaded">
                <router-link to="/user/list">
                    <i class="iconfont icon-bcc"></i>
                    <span title="用户管理">用户管理</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            isOpen: this.$store.state.sidebarIsOpenFlag
        }
    }
}
</script>
<style>
/****************
  #main-sidebar
******************/

#main-sidebar {
    width: 180px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: #19233c;
    z-index: 9;
    -webkit-transition: width 0.3s;
    -moz-transition: width 0.3s;
    -ms-transition: width 0.3s;
    -o-transition: width 0.3s;
    transition: width 0.3s;
    -moz-transition: width .3s;
    -webkit-transition: width .3s;
    transition: width .3s;
}

#main-sidebar.sidebar-collapsed {
    width: 50px;
}

#main-sidebar .logo {
    display: block;
    height: 40px;
    padding: 5px 10px 5px 25px;
    background: #121a2c;
    white-space: nowrap;
    overflow: hidden;
}

#main-sidebar.sidebar-collapsed .logo {
    padding-left: 1px;
}

#main-sidebar .logo img {
    padding: 4px;
}


/******
  menu
********/

#main-sidebar .sidebar-item {
    position: relative;
    display: block;
    left: -200px;
}

#main-sidebar .sidebar-item.loaded {
    left: 0;
}

#main-sidebar .sidebar-item>a {
    display: block;
    line-height: 40px;
    height: 40px;
    padding: 0 10px 0 18px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
}
</style>
