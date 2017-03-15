<template>
    <div id="main-sidebar" class="sidebar-collapsed">
        <a class="logo" target="_blank" href="/">
            <img src="../assets/images/ic_cloud_queue_white_36px.svg" alt="智和安捷">
        </a>
    </div>
</template>
<style>
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
</style>
