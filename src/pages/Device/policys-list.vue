<template>
    <div class="inner-wrapper">
        <h2>策略列表</h2>
        <div class="operation-wrap">
            <Button type="primary" icon="plus-round" @click="createGroupsModalOptions.isopen = true">创建策略</Button>
            <Poptip trigger="hover" title="提示标题" content="提示内容" placement="right">
                <Icon type="help-circled" size="20"></Icon>
            </Poptip>
        </div>
        <!-- i-table -->
        <div class="table-wrap">
            <Table :context="self" :data="groupsTableOptions.groupsTableData" :columns="groupsTableOptions.groupsTableColumns" stripe></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </div>
        <!-- /i-table -->
        <!-- modal-createDevice -->
        <Modal :value.sync="createGroupsModalOptions.isopen" :mask-closable="false" :closable="false" width="640">
            <p slot="header">
                <span>创建策略</span>
            </p>
            <div>
                <Steps :current="createGroupsModalOptions.currentStepIndex" size="small">
                    <Step title="创建群组"></Step>
                    <Step title="设置策略"></Step>
                    <Step title="配置确认"></Step>
                </Steps>
                <!-- Step-item-0 -->
                <div v-show="createGroupsModalOptions.currentStepIndex == 0" class="Step-item">
                    <Row>
                        <Col span="12">
                        <Form :label-width="100">
                            <Form-item label="群组名称" prop="GroupName">
                                <Input placeholder="请输入群组名称"></Input>
                            </Form-item>
                            <Form-item label="全名" prop="GroupName">
                                <p>
                                    parser_endpoint1489109617900/123123
                                </p>
                            </Form-item>
                            <Form-item label="群组名称" prop="GroupName">
                                <Input placeholder="请输入群组名称"></Input>
                            </Form-item>
                        </Form>
                        </Col>
                    </Row>
                </div>
                <!-- /Step-item-0 -->
                <!-- Step-item-1 -->
                <div v-show="createGroupsModalOptions.currentStepIndex == 1" class="Step-item">
                    <Row>
                        <Col span="15">
                        <Form :label-width="100">
                            <Form-item label="策略" prop="GroupName">
                                <Input placeholder="请选择绑定策略"></Input>
                            </Form-item>
                            <Form-item>
                                <p class="tipMsg">为设备选择策略（包括主题和权限），若没有须创建</p>
                            </Form-item>
                        </Form>
                        </Col>
                    </Row>
                </div>
                <!-- /Step-item-1 -->
                <!-- Step-item-2 -->
                <div v-show="createGroupsModalOptions.currentStepIndex == 2" class="Step-item">
                    <Row>
                        <Col span="15">
                        <Form :label-width="100">
                            <Form-item label="群组">
                                <p>群组名称1</p>
                            </Form-item>
                            <Form-item label="策略">
                                <p>策略名称1</p>
                            </Form-item>
                        </Form>
                        </Col>
                    </Row>
                </div>
                <!-- /Step-item-2 -->
                <!-- Step-item-3 -->
                <div v-show="createGroupsModalOptions.currentStepIndex == 3" class="Step-item">
                    <Row>
                        <Col span="24">
                        <Form :label-width="100">
                            <Form-item label="群组">
                            </Form-item>
                            <Form-item label="名称">
                                <p>群组名称123</p>
                            </Form-item>
                            <Form-item label="策略">
                            </Form-item>
                            <Form-item label="名称">
                                <p>策略名称123</p>
                            </Form-item>
                            <Form-item label="授权">
                            </Form-item>
                            <Form-item label="密钥">
                                <p>
                                    EzytDoFexVUA3h7luX40QvqcG+p3bpmJiNzJjY0i3Vg=
                                    <i-button type="text" size="small">复制</i-button>
                                    <i-button type="text" size="small">导出json</i-button>
                                </p>
                            </Form-item>
                        </Form>
                        </Col>
                    </Row>
                </div>
                <!-- /Step-item-3 -->
            </div>
            <div slot="footer" v-if="createGroupsModalOptions.currentStepIndex !== 3">
                <i-button type="primary" @click="next">下一步</i-button>
                <i-button type="ghost" @click="cancel">取消</i-button>
            </div>
            <div slot="footer" v-else>
                <i-button type="primary" @click="submit">提交</i-button>
                <i-button type="ghost" @click="cancel">取消</i-button>
            </div>
        </Modal>
        <!-- /modal-createDevice  -->
    </div>
</template>
<script>
export default {
    // ---------------------
    // data 管理本页数据和状态
    // ---------------------
    data() {
            return {
                /**
                 * [createGroupsModalOptions 创建群组对话框设置选项]
                 * @type {Object}
                 */
                createGroupsModalOptions: {
                    /**
                     * [isopen modal插件配置参数 - 创建设备的对话框是否显示]
                     */
                    isopen: false,
                    /**
                     * [currentStepIndex modal插件配置参数 - 当前Steps的下标]
                     * @type {Number}
                     */
                    currentStepIndex: 0,
                    /**
                     * [formData 创建群组的表单， 用户输入的数据存放集合]
                     * @type {Object}
                     */
                    formData: {
                        GroupName: '',
                        GroupDesc: '',
                        Enable: '',
                        Note: '',
                        CreatorUser: '',
                        CreateTime: ''
                    }
                },
                /**
                 * [self 存储vue实例]
                 * @type {[type]}
                 */
                self: this,



                groupsTableOptions: {
                    /**
                     * [groupsTableData 群组列表数据]
                     * @type {Array}
                     */
                    groupsTableData: [{
                        GroupName: '1231231',
                        GroupDesc: 'test',
                        Enable: 1,
                        Note: '备注',
                        CreatorUser: '116402157@163.com',
                        CreateTime: '2017-03-15 09:14:04'
                    }],
                    /**
                     * [groupsTableColumns 群组列表表头]
                     * @type {Array}
                     */
                    groupsTableColumns: [{
                        title: '名称',
                        key: 'GroupName',
                        render(row) {
                            return `<i-button type="text" size="small" @click="jumpTo(${row.GroupName})">${row.GroupName}</i-button>`;
                        }

                    }, {
                        title: '描述',
                        key: 'GroupDesc'
                    }, {
                        title: '是否启用',
                        key: 'Enable',
                        render(row) {
                            const color = row.Enable == 1 ? 'green' : 'red';
                            const text = row.Enable == 1 ? '启用' : '未启用';
                            return `<tag type="dot" color="${color}">${text}</tag>`;
                        }
                    }, {
                        title: '备注',
                        key: 'Note'
                    }, {
                        title: '创建者',
                        key: 'CreatorUser'
                    }, {
                        title: '创建时间',
                        key: 'CreateTime'
                    }, {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render(row, column, index) {
                            return `<i-button type="text" size="small" @click="show(${index})">查看</i-button> <i-button type="text" size="small" @click="remove(${index})">删除</i-button>`;
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
                // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
                let mockTableData = [];
                for (let i = 0; i < 10; i++) {
                    mockTableData.push({
                        GroupName: '群组',
                        GroupDesc: '描述',
                        Enable: '1',
                        Note: '备注',
                        CreatorUser: '创建者',
                        CreateTime: 1
                    })
                }

                this.groupsTableOptions.groupsTableData = mockTableData;
            },
            /**
             * [jumpTo 控制页面切换]
             * @param  {[type]} routerName [路由参数]
             */
            jumpTo(routerName) {
                this.$Modal.info({
                    title: '跳转到',
                    content: routerName
                });
            },
            show(index) {
                this.$Modal.info({
                    title: '查看',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>'
                });
            },
            remove(index) {
                this.$Modal.confirm({
                    title: '删除',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    onOk: () => {
                        this.$Message.success('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
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
             * [cancel 创建群组Steps步骤组件中的取消按钮]
             */
            cancel() {
                this.createGroupsModalOptions.isopen = false;
            }
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
</style>
