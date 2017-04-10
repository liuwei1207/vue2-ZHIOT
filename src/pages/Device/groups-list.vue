<template>
    <div class="inner-wrapper">
        <h2>群组列表</h2>
        <div class="operation-wrap">
            <Button type="primary" icon="plus-round" @click="addGroupBtn">创建群组</Button>
            <Poptip trigger="hover" title="提示标题" content="提示内容" placement="right">
                <Icon type="help-circled" size="20"></Icon>
            </Poptip>
        </div>
        <!-- i-table -->
        <div class="table-wrap">
            <Table :context="self" :data="groupsTableOptions.groupsTableData" :columns="groupsTableOptions.groupsTableColumns" stripe></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" @on-change="changePage" :page-size="1"></Page>
                </div>
            </div>
        </div>
        <!-- /i-table -->
        <!-- modal-createDevice -->
        <Modal :value.sync="createGroupsModalOptions.isOpen" :mask-closable="false" :closable="false" width="640">
            <p slot="header" v-show="createGroupsModalOptions.isEdit">
                <span>编辑群组</span>
            </p>
            <p slot="header" v-show="!createGroupsModalOptions.isEdit">
                <span>创建群组</span>
            </p>
            <div>
                <!-- Step-item-0 -->
                <div class="Step-item">
                    <Row>
                        <Col span="15">
                        <Form :label-width="100" ref="createGroupsModalOptions.formData.group" :model="createGroupsModalOptions.formData.group" :rules="createGroupsModalOptions.formData.groupRules">
                            <Form-item label="群组名称" prop="groupName" v-model="createGroupsModalOptions.formData.group.groupName">
                                <Input placeholder="请输入群组名称" v-model="createGroupsModalOptions.formData.group.groupName" :disabled="createGroupsModalOptions.isEdit"></Input>
                            </Form-item>
                            <Form-item label="地址" :label-width="100">
                                <p style="white-space:nowrap;">
                                    tcp://{{ createGroupsModalOptions.formData.group.groupName }}.mqtt.iot.gz.baiduce.com:1883
                                </p>
                            </Form-item>
                            <Form-item label="是否启用" prop="groupEnable">
                                <Radio-group v-model="createGroupsModalOptions.formData.group.groupEnable">
                                    <Radio label="1">
                                        <span>已启用</span>
                                    </Radio>
                                    <Radio label="0">
                                        <span>未启用</span>
                                    </Radio>
                                </Radio-group>
                            </Form-item>
                            <Form-item label="描述" prop="groupDesc">
                                <Input v-model="createGroupsModalOptions.formData.group.groupDesc" placeholder="描述..."></Input>
                            </Form-item>
                            <Form-item label="备注" prop="note">
                                <Input v-model="createGroupsModalOptions.formData.group.note" type="textarea" placeholder="备注..."></Input>
                            </Form-item>
                        </Form>
                        </Col>
                    </Row>
                </div>
                <!-- /Step-item-0 -->
            </div>
            <div slot="footer">
                <i-button type="primary" @click="handleSubmit('add')" v-show="!createGroupsModalOptions.isEdit">新建</i-button>
                <i-button type="primary" @click="handleSubmit('edit')" v-show="createGroupsModalOptions.isEdit">保存</i-button>
                <i-button type="ghost" @click="handleCancel">取消</i-button>
            </div>
        </Modal>
        <!-- /modal-createDevice  -->
    </div>
</template>
<script>
import config from '../../../config/index.js';
let ajaxServer = 'http://' + config.ajax.host + ':' + config.ajax.port + '/cms_manage/api';

export default {
    // ---------------------
    // data 管理本页数据和状态
    // ---------------------
    data() {
            //'群组名称'的rules验证函数
            const validateName = (rule, value, callback) => {
                //正则表达式验证输入框
                let regex = /^[A-Za-z0-9_]+$/;
                if (!value) {
                    return callback(new Error('群组名称不能为空'));
                }
                //正则判断
                if (regex.test(value)) {
                    //发送get请求， 检验群组名称是否重名
                    // method: GET
                    this.$http.get(ajaxServer + '/groups/' + value).then((res) => {
                        if (res.status === 200) {
                            // ajax连接正常
                            // 判断返回值
                            if (res.data.success === "true") {
                                console.log("命名可以使用");
                                callback();
                            } else {
                                callback(new Error('命名重复'));
                            }
                        } else {
                            // ajax连接异常
                            callback(new Error('网络异常'));
                        }
                    });
                } else {
                    callback(new Error('命名不符合规则'));
                }
            };
            return {
                /**
                 * [createGroupsModalOptions 创建群组对话框设置选项]
                 * @type {Object}
                 */

                createGroupsModalOptions: {
                    /**
                     * [isOpen modal插件配置参数 - 创建群组的对话框是否显示]
                     */
                    isOpen: false,

                    /**
                     * [isEdit 是否是编辑模式 - 在编辑模式下， 一些字段是不允许用户修改的]
                     * @type {Boolean}
                     */
                    isEdit: false,

                    /**
                     * [formData 创建群组的表单， 用户输入的数据存放集合]
                     * @type {Object}
                     */
                    formData: {
                        group: {
                            groupId: '',
                            groupName: '',
                            groupDesc: '',
                            groupEnable: '1',
                            note: '',
                            creator: '1',
                        },
                        /**
                         * [g设置表单的相应rules]
                         * @type {Object}
                         */
                        groupRules: {
                            //群组名称rules
                            groupName: [{
                                validator: validateName,
                                trigger: 'blur'
                            }]
                        }
                    }
                },
                /**
                 * [self 存储vue实例]
                 * @type {[type]}
                 */
                self: this,
                /**
                 * [groupsTableOptions 群组列表设置选项]
                 * @type {Object}
                 */
                groupsTableOptions: {
                    /**
                     * [groupsTableData 群组列表数据]
                     * @type {Array}
                     */
                    groupsTableData: [],
                    /**
                     * [groupsTableColumns 群组列表表头]
                     * @type {Array}
                     */
                    groupsTableColumns: [{
                        title: '名称',
                        key: 'groupName',
                        render(row) {
                            return `<i-button type="text" size="small" @click="jumpTo('${row.groupId}')">${row.groupName}</i-button>`;
                        }

                    }, {
                        title: '描述',
                        key: 'groupDesc'
                    }, {
                        title: '是否启用',
                        key: 'groupgroupEnable',
                        render(row) {
                            const color = row.groupEnable == 1 ? 'green' : 'red';
                            const text = row.groupEnable == 1 ? '已启用' : '未启用';
                            return `<tag type="dot" color="${color}">${text}</tag>`;
                        }
                    }, {
                        title: '备注',
                        key: 'note'
                    }, {
                        title: '创建者',
                        key: 'creator'
                    }, {
                        title: '创建时间',
                        key: 'createTime'
                    }, {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render(row, column, index) {
                            return `<i-button type="text" size="small" @click="handleEdit(${index})">编辑</i-button> <i-button type="text" size="small" @click="remove('${row.groupId}','${row.groupName}')">删除</i-button>`;
                        }
                    }]
                }
            }
        },
        // ---------------------
        // methods 管理交互操作
        // ---------------------
        methods: {
            /**
             * [changePage 群组列表的分页切换]
             */
            changePage() {
                // // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
                // let mockTableData = [];
                // for (let i = 0; i < 10; i++) {
                //     mockTableData.push({
                //         groupName: '群组',
                //         groupDesc: '描述',
                //         groupEnable: '1',
                //         note: '备注',
                //         creator: '创建者',
                //         createTime: 1
                //     })
                // }

                // this.groupsTableOptions.groupsTableData = mockTableData;
            },
            /**
             * [jumpTo 控制页面切换]
             * @param  {[type]} groupName [群组名称]
             * @return {[type]}           [description]
             */
            jumpTo(groupId) {
                this.$router.push({
                    path: '/devices/devices-list',
                    query: {
                        groupId: groupId
                    }
                })
            },
            /**
             * [handleEdit 编辑群组数据]
             * @param  {[type]} index [所选数据索引]
             * @return {[type]}       [description]
             */
            handleEdit(index) {
                // 更新表单数据
                this.createGroupsModalOptions.formData.group = this.groupsTableOptions.groupsTableData[index];
                // 打开编辑模式
                this.createGroupsModalOptions.isEdit = true;
                // 打开表单
                this.createGroupsModalOptions.isOpen = true;

            },
            remove(groupId, groupName) {
                this.$Modal.confirm({
                    title: '删除',
                    content: `该操作会删除群组： ${groupName}`,
                    onOk: () => {
                        // 请求服务器， 删除一条群组
                        this.delGroupsList(groupId);
                    },
                    // onCancel: () => {
                    //     this.$Message.info('点击了取消');
                    // }
                });
            },
            /**
             * [next 创建群组Steps步骤组件中的下一步按钮]
             */
            next() {
                if (this.createGroupsModalOptions.currentStepIndex == 3) {
                    this.createGroupsModalOptions.currentStepIndex = 0;
                } else {
                    this.createGroupsModalOptions.currentStepIndex += 1;
                }
            },
            /**
             * 点击创建群组按钮
             */
            addGroupBtn() {
                this.createGroupsModalOptions.isOpen = true;
                this.$refs["createGroupsModalOptions.formData.group"].resetFields();
            },
            /**
             * [handleCancel 创建群组组件中的取消按钮]
             */
            handleCancel() {
                // 点击取消按钮
                //如果不是在编辑状态，清空输入框
                // if (this.createGroupsModalOptions.isEdit === false) {
                //     this.$refs["createGroupsModalOptions.formData.group"].resetFields();
                // }
                // 关闭modal
                this.createGroupsModalOptions.isOpen = false;
                // 退出编辑模式
                this.createGroupsModalOptions.isEdit = false;
                // 在modal 淡出效果结束后， 返回初始界面同时重置数据
                setTimeout(() => {
                    // 返回初始界面
                    this.createGroupsModalOptions.currentStepIndex = 0;
                    // 重置数据
                    // 等待开发
                }, 200)
            },

            /**
             * [handleSubmit 创建群组组件中的提交按钮]
             */
            handleSubmit(action) {



                if (action === 'add') {
                    // 获取表单新建数据
                    let listData = {
                        groupName: this.createGroupsModalOptions.formData.group.groupName,
                        groupDesc: this.createGroupsModalOptions.formData.group.groupDesc,
                        groupEnable: this.createGroupsModalOptions.formData.group.groupEnable,
                        note: this.createGroupsModalOptions.formData.group.note,
                        creator: this.createGroupsModalOptions.formData.group.creator
                    }

                    this.addGroupsList(listData);

                } else if (action === 'edit') {

                    // 获取表单编辑数据
                    let newListData = {
                        groupId: this.createGroupsModalOptions.formData.group.groupId,
                        groupName: this.createGroupsModalOptions.formData.group.groupName,
                        groupDesc: this.createGroupsModalOptions.formData.group.groupDesc,
                        groupEnable: this.createGroupsModalOptions.formData.group.groupEnable,
                        note: this.createGroupsModalOptions.formData.group.note,
                        creator: this.createGroupsModalOptions.formData.group.creator
                    }

                    this.editGroupsList(newListData);
                }
            },

            /**
             * [getGroupsLists 从服务器获取群组列表数据]
             * @return {[type]} [description]
             */
            getGroupsLists() {
                //发送get请求， 获取去组列表数据
                // method: GET
                this.$http.get(ajaxServer + '/groups?groupType=0').then((res) => {
                    if (res.status === 200) {
                        // console.log(res.data.data.list)
                        this.groupsTableOptions.groupsTableData = res.data.data.list;
                        console.log(res.data.data.list);
                    } else {
                        console.log('请求资源错误');
                    }
                })
            },
            /**
             * [addGroupsList 创建一条群组数据]
             * @param {[type]} listData [新数据json集合]
             */
            addGroupsList(listData) {
                //先进行一次总的正则验证
                this.$refs["createGroupsModalOptions.formData.group"].validate((valid) => {
                    //验证成功进行ajax
                    if (valid) {
                        //发送post请求， 添加一条群组数据
                        // method: POST
                        this.$http.post(ajaxServer + '/groups', listData).then((res) => {
                            if (res.status === 200) {
                                // ajax连接正常
                                if (res.data.success == 'true') {
                                    // 操作成功调用通知提醒
                                    this.$Message.success('创建群组成功!');
                                    // 重新加载列表数据
                                    this.getGroupsLists();

                                    // 创建群组成功，取消关闭modal
                                    this.createGroupsModalOptions.isOpen = false;
                                    this.resetGroupsData();
                                } else {
                                    // 操作失败调用通知提醒
                                    this.$Message.error(res.data.data.msg);
                                }

                            } else {
                                // ajax连接异常
                                this.$Message.error('网络异常!');
                            }
                        });

                    } else {
                        this.$Message.error("表单校验失败");
                    }
                })
            },
            editGroupsList(newListData) {

                this.$http.put(ajaxServer + '/groups', newListData).then((res) => {
                    if (res.status === 200) {
                        // ajax连接正常
                        if (res.data.success == 'true') {
                            // 操作成功调用通知提醒
                            this.$Message.success('编辑群组成功!');
                            // 重新加载列表数据
                            this.getGroupsLists();

                            // 创建群组成功，取消关闭modal
                            this.resetGroupsData();
                            //关闭modal
                            this.createGroupsModalOptions.isOpen = false;
                            //退出编辑模式
                            this.createGroupsModalOptions.isEdit = false;

                        } else {
                            // 操作失败调用通知提醒
                            this.$Message.error(res.data.data.msg);
                        }

                    } else {
                        // ajax连接异常
                        this.$Message.error('网络异常!');
                    }
                });

            },
            /**
             * [delGroupsList 删除群组纪录]
             * @param  {[type]} groupId   [群组id]
             * @param  {[type]} groupName [群组名称]
             * @return {[type]}           [description]
             */
            delGroupsList(groupId) {
                //发送delete请求， 添加一条群组数据
                // method: DELETE
                this.$http.delete(ajaxServer + '/groups?groupId=' + groupId).then((res) => {
                    if (res.status === 200) {
                        // ajax连接正常
                        if (res.data.success == 'true') {
                            // 操作成功调用通知提醒
                            this.$Message.success('删除群组成功!');
                            // 重新加载列表数据
                            this.getGroupsLists();

                        } else {
                            // 操作失败调用通知提醒
                            this.$Message.error(res.data.data.msg);
                        }

                    } else {
                        // ajax连接异常
                        this.$Message.error('网络异常!');
                    }
                })
            },
            resetGroupsData() {
                setTimeout(() => {
                    // 返回初始界面
                    // 重置表单数据
                    this.createGroupsModalOptions.formData.group = {
                        groupName: '',
                        groupDesc: '',
                        groupEnable: '1',
                        note: '',
                        creator: '1',
                    }
                }, 200)
            }
        },
        // ---------------------
        // created 页面生命周期
        // ---------------------
        created() {
            // 加载群组列表
            this.getGroupsLists();
        }
}
</script>
<style scoped>
.inner-wrapper h2 {
    line-height: 55px;
    border-bottom: 1px solid #e8ebee;
}

.inner-wrapper .operation-wrap {
    padding: 10px 20px;
    position: relative;
    z-index: 100;
}

.inner-wrapper .operation-wrap .ivu-icon {
    position: relative;
    top: 4px;
    color: #d7dde4;
}

.inner-wrapper .operation-wrap .ivu-icon:hover {
    cursor: pointer;
}

.ivu-modal .ivu-steps {
    margin-bottom: 20px;
}

.ivu-modal .tipMsg {
    color: #1da653;
}

.ivu-modal .ivu-steps-item:first-child {
    margin-left: 60px;
}

.ivu-modal .ivu-steps-item {
    width: 200px!important;
}

.ivu-modal .ivu-steps-item:last-child {
    width: 100px!important;
}

.ivu-modal .Step-item:last-child .ivu-form-item--title {
    background-color: #F5F5F5;
    margin-bottom: 10px;
    font-weight: bold;
}

.topics-wrap {
    max-height: 300px;
    overflow: auto;
}
</style>
