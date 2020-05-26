import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from './action';
import routes from '../routes';
import {Link } from 'react-router-dom';
import { RouteComponentProps,withRouter} from 'react-router';

export interface MainBreadcrumbProps extends RouteComponentProps {
}


export interface MainBreadcrumbState {
    location: string;
}

class MainBreadcrumb extends Component<MainBreadcrumbProps, MainBreadcrumbState>{

    constructor(props: any) {
        super(props);
        this.state = { location: '/' };
    }

    componentDidMount(){
      console.log(this.props)  
    }
    


    render() {
        debugger;
        const { pathname:path } = this.props.location;
        const {location:lo2} = this.state;
        console.log(lo2+"--"+path);
        let obj = routes.filter((e) => e.path === path).map((e) => {
            const path = e.path;
            return (
                <Breadcrumb.Item key={e.path}>
                    <Link to={e.path}>{e.breadcrumbName}</Link>
                </Breadcrumb.Item>
            );
        }
        );
        const home = [
            <Breadcrumb.Item key="home">
                <Link to="/">首页</Link>
            </Breadcrumb.Item>,
        ];
        let breadcrumbItems = home;
        debugger;
        if (path != '/') {
            breadcrumbItems = breadcrumbItems.concat(obj);
        } else {
            breadcrumbItems = home;
        }
        return <div className=''>
            <Breadcrumb style={{ float: 'left' }}>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    }
}

export default withRouter(MainBreadcrumb);
