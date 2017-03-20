<template>
    <div>
        <!-- list-content -->
        <div class="list-content">
            <h2>用户列表</h2>
            <div class="table-full-wrap">
                <div class="operation-wrap">
                    <i-button type="primary" @click="modalCreateDevice = true" icon="plus">添加用户</i-button>
                    <Poptip trigger="hover" title="提示标题" content="最多可创建10000个设备，可提交工单申请更多额度">
                        <i-button type="ghost" shape="circle" icon="help" size="small"></i-button>
                    </Poptip>
                    <i-input class="search-box" icon="search" @on-click="btnSearch" placeholder="请输入设备名称" style="width: 200px"></i-input>
                </div>
            </div>
            <!-- i-table -->
            <i-table :content="self" :columns="tableColumns1" :data="tableData1" width="100%"></i-table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
            <!-- /i-table -->
        </div>
        <!-- /list-content -->
        <!-- modal-createDevice -->
        <Modal :value.sync="modalCreateDevice" width="640">
            <p slot="header">
                <span>添加用户</span>
            </p>
            <div style="text-align:center">
                <Steps :current="modalStepCurrent" size="small">
                    <Step title="创建设备"></Step>
                    <Step title="设置身份"></Step>
                    <Step title="设置策略"></Step>
                    <Step title="配置确认"></Step>
                </Steps>
            </div>
            <div slot="footer">
                <i-button type="primary" @click="createDeviceNext">下一步</i-button>
                <i-button type="ghost" @click="createDeviceCancel">取消</i-button>
            </div>
        </Modal>
        <!-- /modal-createDevice  -->
    </div>
</template>
<script>
import moment from 'moment'; // moment.js 日期格式化插件

export default {
    /**
     * [data 页面数据]
     * @return {[type]} [description]
     */
    data() {
            return {

                /**
                 * [modalCreateDevice modal插件配置参数 - 创建设备的对话框]
                 * @type {Boolean}
                 */
                modalCreateDevice: false,

                /**
                 * [modalStepCurrent modal插件配置参数 - 创建设备的步骤记录]
                 * @type {Number}
                 */
                modalStepCurrent: 0,

                /**
                 * [self table插件配置参数]
                 * @type {[type]}
                 */
                self: this,
                /**
                 * [tableColumns1 table插件配置参数 - 设备列表的页头数据]
                 * @type {Array}
                 */
                tableColumns1: [{
                        title: '设备名称',
                        key: 'deviceName',
                        render(row, column, index) {
                            return `<a href="#/thing/${row.deviceName}/detail">${row.deviceName}</a>`
                        }
                    }, {
                        title: '描述',
                        key: 'description'
                    }, {
                        title: '用户名',
                        key: 'username'
                    },

                    {
                        title: '创建时间',
                        key: 'createTime'
                    }, {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'left',
                        render(row, column, index) {
                            return `<button class="cmd-button" @click="btnEdit(${row.deviceName})">编辑</button><button class="cmd-button" @click="btnDel(${row.deviceName})">删除</button>`
                        }
                    }
                ],
                /**
                 * [tableData1 table插件配置参数 - 设备列表的正式数据]
                 * @type {Array}
                 */
                tableData1: [{
                    deviceName: '1231231',
                    description: '',
                    username: 'parser_endpoint1489109617900/1231231',
                    createTime: '2017-03-15 09:14:04',
                }]
            }
        },
        /**
         * [methods 页面操作集中处理]
         * @type {Object}
         */
        methods: {
            /**
             * [mockTableData1 mock数据的方法]
             * @return {[type]} [description]
             */
            mockTableData1() {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        deviceName: '1231231',
                        description: '',
                        username: 'parser_endpoint1489109617900/1231231',
                        createTime: '2017-03-15 09:14:04',
                    })
                }
                return data;
            },
            /**
             * [btnEdit 设备列表操作栏里的编辑按钮]
             * @param  {[type]} deviceName [前后数据交互的主键为deviceName]
             * @return {[type]}            [description]
             */
            btnEdit(deviceName) {
                this.$Message.info(deviceName);
            },
            /**
             * [btnDel 设备列表操作栏里的删除按钮]
             * @param  {[type]} deviceName [前后数据交互的主键为deviceName]
             * @return {[type]}            [description]
             */
            btnDel(deviceName) {
                this.$Message.info(deviceName);
            },
            /**
             * [btnSearch 搜索设备按钮]
             * @return {[type]} [description]
             */
            btnSearch() {
                this.$Message.info('btnSearch');
            },
            /**
             * [changePage 设备列表的分页按钮]
             * @return {[type]} [description]
             */
            changePage() {
                // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
                this.tableData1 = this.mockTableData1();
            },
            createDeviceNext() {
                if (this.modalStepCurrent == 3) {
                    this.modalStepCurrent = 0;
                } else {
                    this.modalStepCurrent += 1;
                }
            },
            createDeviceCancel() {
                this.modalCreateDevice = false;
            }
        },
        /**
         * [components 组件加载]
         * @type {Object}
         */
        components: {

        }
}
</script>
<style type="text/css" scoped>

</style>
