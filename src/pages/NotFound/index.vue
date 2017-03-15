<template>
    <div>
        <div id="new-sidebar" class="iot-sidebar-box new-sidebar-box">
            <div class="sidebar-wrap sidebar-wrap-l3 submenu-open">
                <ul class="sidebar topmenu">
                    <li class="menu-header " service=""><span class="normal-title">物接入</span><span class="short-title"></span></li>
                    <li class="menu-item menu-item-common endpoint-list" service="endpoint-list"><a href="#/iot/endpoint/list" target="_self" data-anchors="#/iot/endpoint/allStats,#/iot/endpoint/package,#/iot/endpoint/list" data-url="#/iot/endpoint/list"><i class="iconfont icon-list"></i><span class="normal-title">实例列表</span><span class="short-title"></span></a></li>
                </ul>
                <ul class="sidebar submenu" sidetype="endpoint-list-0">
                    <li class="menu-header " action-type="back" action-data="#/iot/endpoint/list" action-url="#/iot/endpoint/list"><span class="normal-title">&lt;返回实例列表</span><span class="short-title"></span></li>
                    <li class="menu-item endpoint-stats" sidetype="endpoint-list-0/endpoint-stats"><a href="#/iot/endpoint/stats~" target="_self" data-anchors="#/iot/endpoint/stats~[uuid," name],#="" iot="" endpoint="" stats="" data-url="#/iot/endpoint/stats~[uuid, name]"><span class="normal-title">用量统计</span><span class="short-title"></span></a></li>
                </ul>
                <ul class="sidebar submenu sidebar-current" sidetype="endpoint-list-1">
                    <li class="menu-header " action-type="back" action-data="#/iot/endpoint/list" action-url="#/iot/endpoint/list"><span class="normal-title">&lt;返回实例列表</span><span class="short-title"></span></li>
                    <li class="menu-item thing-list sidebar-current" sidetype="endpoint-list-1/thing-list"><a href="#/iot/thing/list~endpointName=parser_endpoint1489109617900" target="_self" data-anchors="#/iot/thing/list~[endpointName],#/iot/thing/list" data-url="#/iot/thing/list~[endpointName]"><span class="normal-title">设备列表</span><span class="short-title"></span></a></li>
                    <li class="menu-item principal-list" sidetype="endpoint-list-1/principal-list"><a href="#/iot/principal/list~endpointName=parser_endpoint1489109617900" target="_self" data-anchors="#/iot/principal/list~[endpointName],#/iot/principal/list" data-url="#/iot/principal/list~[endpointName]"><span class="normal-title">身份列表</span><span class="short-title"></span></a></li>
                    <li class="menu-item policy-list" sidetype="endpoint-list-1/policy-list"><a href="#/iot/policy/list~endpointName=parser_endpoint1489109617900" target="_self" data-anchors="#/iot/policy/list~[endpointName],#/iot/policy/list" data-url="#/iot/policy/list~[endpointName]"><span class="normal-title">策略列表</span><span class="short-title"></span></a></li>
                    <li class="menu-item storage-list" sidetype="endpoint-list-1/storage-list"><a href="#/iot/storage/list~endpointName=parser_endpoint1489109617900" target="_self" data-anchors="#/iot/storage/list~[endpointName],#/iot/storage/list" data-url="#/iot/storage/list~[endpointName]"><span class="normal-title">数据存储</span><span class="short-title"></span></a></li>
                </ul>
                <ul class="sidebar submenu" sidetype="endpoint-list">
                    <li class="menu-header "><span class="normal-title"></span><span class="short-title"></span></li>
                    <li class="menu-header "><span class="normal-title"></span><span class="short-title"></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            page: '404'
        }
    }
}
</script>
