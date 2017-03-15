<template>
    <div style="height:100%;">
        <div id="new-sidebar" class="iot-sidebar-box new-sidebar-box">
            <div class="sidebar-wrap sidebar-wrap-l3 submenu-open">
                <ul class="sidebar submenu sidebar-current" sidetype="endpoint-list-1">
                    <li class="menu-header">
                        <span class="normal-title">用户管理</span>
                        <span class="short-title"></span>
                    </li>
                    <li class="menu-item user-list sidebar-current">
                        <router-link to="/user/list">
                            <span class="normal-title">用户列表</span>
                            <span class="short-title"></span>
                        </router-link>
                    </li>
                    <li class="menu-item user-list">
                        <router-link to="/user/list">
                            <span class="normal-title">角色列表</span>
                            <span class="short-title"></span>
                        </router-link>
                    </li>
                    <li class="menu-item user-list">
                        <router-link to="/user/list">
                            <span class="normal-title">权限列表</span>
                            <span class="short-title"></span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div id="main">
            <div class="iot-main-wrap iot-thing-list main-wrap-new">
                <div class="content-wrap">
                    <!-- /thing/* -->
                    <router-view></router-view>
                    <!-- /thing/* -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {

        }
    }
}
</script>
<style type="text/css">
a,
a:visited,
a:hover,
a:active {
    text-decoration: none;
    color: #108cee;
}


/*****************
  new-sidebar-box
*******************/

.new-sidebar-box {
    position: fixed;
    z-index: 2;
    float: left;
    left: 0;
    top: 0;
    width: 180px;
    height: 100%;
    overflow: hidden;
    background-color: #d0daf3;
    -webkit-transition: width 0.4s;
    -moz-transition: width 0.4s;
    -ms-transition: width 0.4s;
    -o-transition: width 0.4s;
    transition: width 0.4s;
    -moz-transition: width .4s;
    -webkit-transition: width .4s;
    transition: width .4s;
}

.new-sidebar-box .sidebar-wrap {
    position: absolute;
    top: 50px;
    left: 0;
    width: 200%;
    -webkit-transition: -webkit-transform 0.4s;
    -moz-transition: -moz-transform 0.4s;
    -ms-transition: -ms-transform 0.4s;
    -o-transition: -o-transform 0.4s;
    transition: transform 0.4s;
    -moz-transition: transform .4s;
    -webkit-transition: transform .4s;
    transition: transform .4s;
}

.sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    height: calc(100% - 50px);
    width: 180px;
    color: #2c4a93;
    font-size: 14px;
    background-color: #d0daf3;
}

.new-sidebar-box .sidebar-wrap .sidebar {
    position: static;
    float: left;
    width: 50%;
}

#bce-content .main-area .sidebar .menu-header {
    border-bottom-color: #e2e5ec;
    line-height: 50px;
}

#bce-content .main-area .sidebar li {
    line-height: 40px;
}

#bce-content .main-area .sidebar {
    left: 180px;
    top: 50px;
    bottom: 0;
    width: 160px;
    background: #f6f7fb;
    height: auto !important;
}

.new-sidebar-box .sidebar-wrap .menu-header {
    line-height: 40px;
}

.new-sidebar-box .sidebar-wrap.sidebar-wrap-l3 .submenu .menu-item a {
    padding-left: 26px;
    background-image: none;
}

.sidebar .menu-header {
    font-size: 12px;
    color: #666;
    padding-left: 20px;
    line-height: 51px;
    border-bottom: 1px solid #a8bae6;
}

.sidebar li {
    line-height: 50px;
}

#bce-content.sidebar-collapsed .main-area .sidebar {
    left: 50px;
}

#bce-content .main-area .new-sidebar-box {
    left: 180px;
    background-color: #f6f7fb;
    width: 160px;
}

#bce-content.sidebar-collapsed .main-area .new-sidebar-box {
    left: 50px;
}

#bce-content .main-area .sidebar .menu-item-common.sidebar-current a {
    padding-left: 23px;
}

#bce-content .main-area .sidebar .menu-item:hover a,
#bce-content .main-area .sidebar .sidebar-current a {
    color: #fff;
}

#bce-content .main-area .sidebar .menu-item a {
    color: #666;
    background: none;
}

#bce-content .main-area .sidebar .menu-item:hover,
#bce-content .main-area .sidebar .sidebar-current {
    border-left: none;
    background-color: #108cee;
}

#bce-content .main-area .sidebar .menu-item:hover a,
#bce-content .main-area .sidebar .sidebar-current a {
    color: #fff;
}

.iot-sidebar-box .sidebar-wrap .sidebar .endpoint-list.sidebar-current a {
    background-position: 17px 16px;
}

.iot-sidebar-box .sidebar-wrap .sidebar .endpoint-list a {
    background-position: 20px 16px;
}

.sidebar .menu-item-common.sidebar-current a {
    padding-left: 20px;
}

.sidebar .menu-item-common a {
    background: none;
    padding: 0 23px;
}

.sidebar .sidebar-current a {
    padding-left: 43px;
    background-position: 17px 0;
}

.sidebar .menu-item a {
    display: block;
    color: #2c4a93;
    padding-left: 46px;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
}


/*******
  #main
*********/

.content-wrap {
    margin: 0;
    padding: 20px;
    background-color: #e3e8f7;
    position: relative;
    z-index: 2;
}

.main-wrap-new .content-wrap {
    padding-top: 0;
}

.iot-main-wrap .content-wrap {
    margin-left: 160px;
    padding-top: 0;
}

.ui-v5 .iot-main-wrap .content-wrap {
    margin-left: 160px;
}

#bce-content .main-area .content-wrap {
    background-color: #e2e5ec;
}
</style>
