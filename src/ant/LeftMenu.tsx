import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';
import routes from './routes';

const { Sider } = Layout;

interface LeftMenuProps extends RouteComponentProps {

}

interface LeftMenuState {
    selectedKeys: Array<string>;
}

class LeftMenu extends Component<LeftMenuProps, LeftMenuState> {

    constructor(props: any) {
        super(props);
        this.state = {
            selectedKeys: ['/']
        }
    }

    menuClick = (e: any, path: string) => {
        const newSelectedKeys = [path];
        this.setState({
            selectedKeys: newSelectedKeys
        });
    }

    componentDidMount() {
        const {pathname} = this.props.location;
        const newSelectedKeys = [pathname];
        this.setState({
            selectedKeys: newSelectedKeys
        });
    }


    render() {

        const { selectedKeys } = this.state;
        const {pathname} = this.props.location;
        let newSelectedKeys = selectedKeys;
        if(pathname!=selectedKeys[0]){
            newSelectedKeys=[pathname];
        }
        const menuItems = routes.map((e) => {
            return (
                <Menu.Item key={e.path} onClick={(x) => this.menuClick(x, e.path)} icon={React.createElement(e.icon)}>
                    <Link to={e.path}><span>{e.breadcrumbName}</span></Link>
                </Menu.Item>
            )
        });

        return (
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
                <Menu theme="dark" mode="inline" selectedKeys={newSelectedKeys} defaultSelectedKeys={['/']}>
                    {menuItems}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(LeftMenu);