<template>
    <div class="inner-wrapper">
        <h2>设备列表</h2>
        <div class="operation-wrap">
            <Button type="primary" icon="plus-round" @click="createGroupsModalOptions.isopen = true">创建设备</Button>
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
                <span>创建设备</span>
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
                            <Form-item label="群组名称" prop="groupName">
                                <Input placeholder="请输入群组名称" v-model="createGroupsModalOptions.formData.group.groupName"></Input>
                            </Form-item>
                            <Form-item label="全名" :label-width="160">
                                <p>
                                    parser_endpoint1489109617900/{{ createGroupsModalOptions.formData.group.groupName }}
                                </p>
                            </Form-item>
                            <Form-item label="群组名称" prop="groupName">
                                <Input placeholder="请输入群组名称"></Input>
                            </Form-item>
                        </Form>
                        </Col>
                    </Row>
                </div>
                <!-- /Step-item-0 -->
                <!-- Step-item-1 -->
                <div v-show="createGroupsModalOptions.currentStepIndex == 1" class="Step-item">
                    <Row v-if="createGroupsModalOptions.isAddingPolicy && (createGroupsModalOptions.currentStepIndex == 1)">
                        <Col span="15">
                        <Form :label-width="100">
                            <Form-item label="策略" prop="groupName">
                                <Select placeholder="请选择" @on-change="handleSelectPolicy">
                                    <Option value="beijing">策略1</Option>
                                    <Option value="shanghai">策略2</Option>
                                    <Option value="">
                                        <a @click="handleResetAddingPolicy">新建策略</a>
                                    </Option>
                                </Select>
                            </Form-item>
                            <Form-item>
                                <p class="tipMsg">为设备选择策略（包括主题和权限），若没有须创建</p>
                            </Form-item>
                        </Form>
                        </Col>
                    </Row>
                    <!-- 新建设备 -->
                    <Row v-if="!createGroupsModalOptions.isAddingPolicy && (createGroupsModalOptions.currentStepIndex == 1)">
                        <Col span="15">
                        <Form ref="createGroupsModalOptions.formData.policy" :model="createGroupsModalOptions.formData.policy" :label-width="80">
                            <Form-item label="策略名称">
                                <Input placeholder="请输入策略名称" v-model="createGroupsModalOptions.formData.policy.policyName"></Input>
                            </Form-item>
                            <div class="topics-wrap">
                                <Form-item v-for="(item, index) in createGroupsModalOptions.formData.policy.policyTopics" :key="item" :label="'主题名称'">
                                    <Row>
                                        <Col span="18">
                                        <Input type="text" v-model="item.topicName" placeholder="请输入..."></Input>
                                        <Checkbox-group v-model="item.Sub_Pub">
                                            <Checkbox label="pub">发布</Checkbox>
                                            <Checkbox label="sub">订阅</Checkbox>
                                        </Checkbox-group>
                                        </Col>
                                        <Col span="4" offset="1">
                                        <Button type="ghost" @click="handleRemoveTopic(index)">删除</Button>
                                        </Col>
                                    </Row>
                                </Form-item>
                            </div>
                            <Form-item>
                                <Row>
                                    <Col span="12">
                                    <Button type="dashed" long @click="handleAddTopic" icon="plus-round">新增主题</Button>
                                    </Col>
                                </Row>
                            </Form-item>
                            <Form-item>
                                <Button type="ghost" @click="handleResetAddingPolicy" style="margin-left: 8px">重置</Button>
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
                                <p>{{createGroupsModalOptions.formData.group.groupName}}</p>
                            </Form-item>
                            <Form-item label="策略">
                                <p>{{createGroupsModalOptions.formData.policy.policyName}}</p>
                                <div v-for="(item, index) in createGroupsModalOptions.formData.policy.policyTopics">
                                    <p>{{item.topicName}}</p>
                                    <p>{{item.Sub_Pub}}</p>
                                </div>
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
                            <Form-item label="群组" class="ivu-form-item--title">
                            </Form-item>
                            <Form-item label="名称">
                                <p>{{createGroupsModalOptions.formData.group.groupName}}</p>
                            </Form-item>
                            <Form-item label="策略" class="ivu-form-item--title">
                            </Form-item>
                            <Form-item label="名称">
                                <p>{{createGroupsModalOptions.formData.policy.policyName}}</p>
                            </Form-item>
                            <Form-item label="名称">
                                <div v-for="(item, index) in createGroupsModalOptions.formData.policy.policyTopics">
                                    <p>{{item.topicName}}</p>
                                    <p>{{item.Sub_Pub}}</p>
                                </div>
                            </Form-item>
                            <Form-item label="授权" class="ivu-form-item--title">
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
            <div slot="footer" v-if="createGroupsModalOptions.currentStepIndex < 2">
                <i-button type="primary" @click="next">下一步</i-button>
                <i-button type="ghost" @click="cancel">取消</i-button>
            </div>
            <div slot="footer" v-else>
                <i-button type="primary" @click="next" v-if="createGroupsModalOptions.currentStepIndex == 2">提交</i-button>
                <i-button type="primary" @click="submit" v-if="createGroupsModalOptions.currentStepIndex == 3">确定</i-button>
                <i-button type="ghost" @click="cancel" v-if="createGroupsModalOptions.currentStepIndex !== 3">取消</i-button>
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
                     * [isAddingPolicy 是否正在新建策略]
                     * @type {Boolean}
                     */
                    isAddingPolicy: true,
                    /**
                     * [formData 创建群组的表单， 用户输入的数据存放集合]
                     * @type {Object}
                     */
                    formData: {
                        group: {
                            groupName: '',
                            groupDesc: '',
                            groupEnable: '',
                            note: '',
                            creatorUser: '',
                            createTime: ''
                        },
                        policy: {
                            policyName: '',
                            policyTopics: [{
                                topicName: '',
                                Sub_Pub: []
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
                            return `<i-button type="text" size="small" @click="jumpTo('${row.groupName}')">${row.groupName}</i-button>`;
                        }

                    }, {
                        title: '描述',
                        key: 'groupDesc'
                    }, {
                        title: '是否启用',
                        key: 'groupgroupEnable',
                        render(row) {
                            const color = row.groupgroupEnable == 1 ? 'green' : 'red';
                            const text = row.groupgroupEnable == 1 ? '启用' : '未启用';
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
                        groupName: '群组',
                        groupDesc: '描述',
                        groupgroupEnable: '1',
                        note: '备注',
                        creator: '创建者',
                        createTime: 1
                    })
                }

                this.groupsTableOptions.groupsTableData = mockTableData;
            },
            /**
             * [jumpTo 控制页面切换]
             * @param  {[type]} routerName [路由参数]
             */
            jumpTo(groupName) {
                this.$router.push({
                    path: '/devices/devices-list',
                    query: {
                        deviceId: groupName
                    }
                })
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
                // 点击取消按钮
                this.createGroupsModalOptions.isopen = false;
                // 在modal 淡出效果结束后， 返回初始界面同时重置数据
                setTimeout(() => {
                    // 返回初始界面
                    this.createGroupsModalOptions.currentStepIndex = 0;
                    // 重置数据
                    // 等待开发
                }, 200)
            },
            submit() {
                // 点击取消按钮
                this.createGroupsModalOptions.isopen = false;
                setTimeout(() => {
                    // 返回初始界面
                    this.createGroupsModalOptions.currentStepIndex = 0;
                    // 重置数据

                    // 重置新建策略中的数据
                    this.createGroupsModalOptions.formData.policy.policyTopics = [{
                            topicName: '',
                            Sub_Pub: []
                        }]
                        // 等待开发
                }, 200)
            },
            /**
             * [handleChange description]
             * @return {[type]} [description]
             */
            handleResetAddingPolicy() {
                this.createGroupsModalOptions.isAddingPolicy = !this.createGroupsModalOptions.isAddingPolicy;
            },
            /**
             * [handleAddTopic 新增主题功能]
             * @return {[type]} [description]
             */
            handleAddTopic() {
                this.createGroupsModalOptions.formData.policy.policyTopics.push({
                    topicName: '',
                    Sub_Pub: []
                });
            },
            /**
             * [handleRemoveTopic 移除主题功能]
             * @param  {[type]} index [description]
             * @return {[type]}       [description]
             */
            handleRemoveTopic(index) {
                this.createGroupsModalOptions.formData.policy.policyTopics.splice(index, 1);
            },

            /**
             * [getGroupsList description]
             * @return {[type]} [description]
             */
            getGroupsList() {
                //发送get请求， 获取去组列表数据
                // method: GET
                this.$http.get(ajaxServer + '/groups?groupType=0').then((res) => {
                    if (res.status === 200) {
                        // console.log(res.data.data.list)
                        this.groupsTableOptions.groupsTableData = res.data.data.list;
                    } else {
                        console.log('请求资源错误')
                    }
                })
            }
        },
        // ---------------------
        // created 页面生命周期
        // ---------------------
        created() {
            this.getGroupsList();
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
