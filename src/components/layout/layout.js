import React, { Component } from 'react'
import { Layout, Menu,Icon  } from 'antd';
import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined , } from '@ant-design/icons';
import { Router, Route, Switch, Redirect } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import './layout.scss'
import Navconfig from './nav.config.js'

export default class Layouto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,//菜单收缩
            openKeys: ['/home'],//当前展开的 SubMenu 菜单项 key 数组
            rootSubmenuKeys: [],//menu所有有子菜单的key
            currentMenu:['/home'],//刷新的时候根据路由判断是那个目录
        }

    }
    componentWillMount() {
        let {history} = this.props;
        let token = ''
        // if (!token) {
        //     console.log(this.props)
        //     history.push('/login')
        // }
        this.menuOnlyKey()
        this.currentMenu()
    }
    //设置当前的menu颜色
    currentMenu(){
        let currentMenu = [],openKeys=[];
        let current = this.props.location.pathname;
        if (current == '/') {
            current = '/home'
        }
        // 如果没有子菜单有这个就可以
        currentMenu.push(current)
        // 如果有子菜单要加这个循环，展开当前子菜单
        Navconfig.forEach((e,i)=>{
            if (e.children) {
                e.children.forEach((ee,ii)=>{
                    if (ee.path == current) {
                        openKeys.push(e.path)
                    }
                }) 
            }
        })
        this.setState({currentMenu,openKeys})
    }
    // menu获取所有有子菜单的key
    menuOnlyKey() {
        let rootSubmenuKeys = [];
        Navconfig.forEach(e => {
            if (e.children) {
                rootSubmenuKeys.push(e.path)
            }
        })
        this.setState({ rootSubmenuKeys })
    }
    // 通过menu的key只展开一个菜单
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    // 左侧边栏展开收起
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    // 导航路由切换
    router(path) {
        let { history } = this.props;
        history.push(path)
    }

    render() {
        let { collapsed ,currentMenu} = this.state
        let { routes } = this.props.route;
        return (
            <div className='layouD'>
                <Layout className='layouDD'>
                    <Sider trigger={null} collapsible collapsed={collapsed}
                    >
                        <div className="logo" >我的博客</div>
                        <Menu
                            className='icons'
                            defaultSelectedKeys={currentMenu}
                            mode="inline"
                            theme="dark"
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                        >
                            {
                                Navconfig.map((e, i) => {
                                    if (e.children) {
                                        return (
                                            <SubMenu
                                                key={e.path}
                                                title={
                                                    <span>
                                                    <HomeOutlined />
                                                        <span>{e.name}</span>
                                                    </span>
                                                }
                                            >
                                                {
                                                    e.children.map((ee, ii) => {
                                                        return <Menu.Item key={ee.path} onClick={() => { this.router(ee.path) }}>{ee.name}</Menu.Item>
                                                    })
                                                }
                                            </SubMenu>
                                        )
                                    } else {
                                        return (
                                            <Menu.Item key={e.path} onClick={() => { this.router(e.path) }}>
                                                <HomeOutlined />
                                                <span>{e.name}</span>
                                            </Menu.Item>
                                        )
                                    }
                                })
                            }

                        </Menu>
                    </Sider>
                    <Layout className='layoutCD'>
                        <Header style={{ background: '#fff', padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        </Header>
                        <Content
                            style={{

                            }}
                            className='layoutContent'
                        >
                            <div className='contentMain'>
                                <Switch>
                                    {
                                        routes.map((e) => {
                                            return (
                                                <Route
                                                    key={e.path}
                                                    path={e.path}
                                                    component={e.component}
                                                    // {...props}
                                                    exact={e.exact}
                                                ></Route>
                                            )
                                        })
                                    }
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

