import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AntDemo from '../ant/AntDemo';
import PageOne from '../ant/PageOne';
import PageTwo from '../ant/PageTwo';
import MainBreadcrumb from './breadcrumb/MainBreadcrumb';
import routes from './routes';
import { createStore } from 'redux';
import { BreadcrumbReducer } from './breadcrumb/reduce';
import { Provider } from 'react-redux';
import {update,UPDATEACTION, UPDATE} from './breadcrumb/action';

const { Header, Content, Footer, Sider } = Layout;

let store = createStore(BreadcrumbReducer,{location:'/'});

class BasicLayout extends Component {
  constructor(props: any) {
    super(props);
  }

  hello = (e:any,path:any) => {
    console.log(path);
    let update:UPDATEACTION = {type:UPDATE,path:path}
    store.dispatch(update);
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
                <Link to="/" onClick={(e:any,path:any)=>this.hello(e,"/")}><span>nav 1</span></Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/one" onClick={(e:any,path:any)=>this.hello(e,'/one')}><span>nav 2</span></Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/two" onClick={(e:any,path:any)=>this.hello(e,'/two')}><span>nav 3</span></Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <Provider store={store}>
                <MainBreadcrumb></MainBreadcrumb>
              </Provider>
              <Switch>
                {routes.map((route, i) => {
                  const { path, exact } = route;
                  return (
                    <Route
                      key={i}
                      path={path}
                      exact={exact}
                      render={(routeProps: any) => (
                        <route.component routes={routes} {...routeProps} />
                      )}
                    />
                  );
                })}
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default BasicLayout;