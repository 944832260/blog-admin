
import React, { Component } from 'react';
import { Table, Button , Pagination ,Upload,message ,Modal,Input } from 'antd';
import './articleList.scss'
class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state={
            userList:[{
                key:1,
                username:'和珅',
                user:'admin',
                id:1,
                email:'944832260@qq.com',
            }],
            usertable:[
                {
                  title: '文章编号',
                  dataIndex: 'id',
                  key: 'id',
                },{
                    title: '文章标题',
                    dataIndex: 'username',
                    key: 'username',
                },
                {
                  title: '用户账号',
                  dataIndex: 'user',
                  key: 'user',
                },{
                    title: '操作',
                    dataIndex: 'id',
                    key: 'id',
                    render: (text,index) => {
                        return (
                            <p>
                                <a onClick={()=>{console.log(text)}} style={{paddingRight:'15px'}}>{'编辑'}</a>
                                <a onClick={()=>{this.deleteads(text)}} style={{paddingRight:'15px'}}>{'删除'}</a>
                            </p>
                            
                        )
                    },
                },
            ],
            page:1,
            pageSize:10,
            total:100,
            IsModal:false,//Modal是否显示
            loading:false,
            username:'',
            user:'',
            password1:'',
            password2:'',
        }
    }
    pageChange = (page, pageSize) =>{
        this.setState({page},()=>{
            this.getUserList()
        })
    }
    getUserList = () =>{

    }
    usernameChange = (ev) =>{
        let {value:username} = ev.target;
        this.setState({username})
    }
    userChange = (ev) =>{
        let {value:user} = ev.target;
        this.setState({user})
    }
    password1Change = (ev) =>{
        let {value:password1} = ev.target;
        this.setState({password1})
    }
    password2Change = (ev) =>{
        let {value:password2} = ev.target;
        this.setState({password2})
    }
    submitUser = ()=>{
        let {username,user,password1,password2} = this.state;
        console.log(username,user,password1,password2)
    }
    openModal = () =>{
        this.setState({IsModal:true,})
    }
    closeModal = () =>{
        this.setState({IsModal:false,})
    }
    render() {
        return (
            <div id='ArticleList'>
                <Modal
                    className='UserModal'
                    title={'新增'}
                    visible={this.state.IsModal}
                    onOk={this.submitUser}
                    onCancel={this.closeModal}
                    centered= {true}
                    maskClosable= {false}
                    centered = {true}
                    okText='确定'
                    cancelText='取消'
                    >
                    <div className='content'>
                        <div className='item'>
                            <span className='tip'>用户名称: </span>
                            <Input placeholder="请输入用户名称" value={this.state.username} onChange={(ev)=>{this.usernameChange(ev)}} />
                        </div>
                        <div className='item'>
                            <span className='tip'>用户账号: </span>
                            <Input placeholder="请输入用户账号"  value={this.state.user} onChange={(ev)=>{this.userChange(ev)}}/>
                        </div>
                        <div className='item'>
                            <span className='tip'>用户密码: </span>
                            <Input.Password placeholder="请输入用户密码"  value={this.state.password1} onChange={this.password1Change}/>
                        </div>
                        <div className='item'>
                            <span className='tip'>重复密码: </span>
                            <Input.Password placeholder="请重复输入密码"  value={this.state.password2} onChange={this.password2Change} />
                        </div>
                    </div>
                </Modal>
                <div className='edit'>
                    <Button className='add' type="primary" onClick={this.openModal} >新增</Button>
                </div>
                <Table  columns={this.state.usertable} dataSource={this.state.userList} pagination={false} />
                <Pagination className='page' onChange={this.pageChange} total={this.state.total} pageSize={this.state.pageSize} current = {this.state.page}  />
            </div>
        );
    }
}

export default ArticleList;