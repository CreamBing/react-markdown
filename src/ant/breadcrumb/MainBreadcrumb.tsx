import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from './action';
import routes from '../routes';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export interface MainBreadcrumbProps {
    location: string;
    update: any
}


export interface MainBreadcrumbState {
    location: string;
}

class MainBreadcrumb extends Component<MainBreadcrumbProps, MainBreadcrumbState>{

    constructor(props: any) {
        super(props);
        this.state = { location: '/' };
    }

    hello = (e:any,path:any) => {
        const {update} = this.props;
        debugger;
        console.log(path);
        update(path);
      }
    


    render() {
        debugger;
        const { location } = this.props;
        const {location:lo2} = this.state;
        console.log(lo2+"--"+location);
        let obj = routes.filter((e) => e.path === location).map((e) => {
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
                <Link  onClick={(e:any,path:any)=>this.hello(e,"/")} to="/">首页</Link>
            </Breadcrumb.Item>,
        ];
        let breadcrumbItems = home;
        debugger;
        if (location != '/') {
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

export function mapStateToProps({ location }: MainBreadcrumbState) {
    return {
        location
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ACTION>) {
    return {
        update: (path: string) => dispatch(actions.update(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBreadcrumb);
