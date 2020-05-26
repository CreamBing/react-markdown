import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
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
import LeftMenu from './LeftMenu';

const { Header, Content, Footer, Sider } = Layout;


class BasicLayout extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <LeftMenu />
          <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
                <MainBreadcrumb></MainBreadcrumb>
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