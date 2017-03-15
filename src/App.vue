<template>
    <div>
        <Sidebar></Sidebar>
        <div id="bce-content" class="sidebar-collapsed">
            <Topbar></Topbar>
            <div class="main-area">
                <div id="main">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import Topbar from './components/topbar.vue';
import Sidebar from './components/sidebar.vue';

export default {
    data() {
            return {

            }
        },
        components: {
            Topbar,
            Sidebar
        }
}
</script>
<style>
@import './assets/styles/reset.css';

/********
  header
**********/

#bce-content .header {
    top: 0;
    width: auto;
    left: 180px;
    right: 0;
    height: 50px;
    background: #fff;
    color: #666;
    z-index: 5;
    border-bottom: 1px solid #e2e5ec;
}

#bce-content.sidebar-collapsed .header {
    left: 50px;
}


/***********
  main-area
*************/

.main-area {
    margin: 0;
    padding: 0;
    clear: both;
}

#bce-content .main-area {
    min-width: 1100px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e2e5ec;
}


/******
  main
********/

#main {
    z-index: 0;
    margin: 0;
    padding: 0;
    position: relative;
    margin-top: 50px;
    background-color: #d0daf3;
}

#bce-content #main {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 0 !important;
    background-color: #e2e5ec;
}
</style>
