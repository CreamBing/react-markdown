import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AntDemo from '../ant/AntDemo';
import PageOne from '../ant/PageOne';
import PageTwo from '../ant/PageTwo';

const { Header, Content, Footer, Sider } = Layout;

class BasicLayout extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/"><span>nav 1</span></Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/one"><span>nav 2</span></Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/two"><span>nav 3</span></Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <Route exact path="/" component={AntDemo} />
              <Route path="/one" component={PageOne} />
              <Route path="/two" component={PageTwo} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default BasicLayout;