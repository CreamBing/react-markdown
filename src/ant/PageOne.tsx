import React, { Component } from 'react';
import MainBreadcrumb from './breadcrumb/MainBreadcrumb';
import {MainBreadcrumbProps} from './breadcrumb/MainBreadcrumb';


export default class PageOne extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                 <MainBreadcrumb {...this.props as MainBreadcrumbProps} ></MainBreadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    pageone
                </div>
            </div>
        )
    }
}