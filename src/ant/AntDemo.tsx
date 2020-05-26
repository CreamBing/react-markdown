import React, { Component } from 'react';
import { Button } from 'antd';
import MainBreadcrumb from './breadcrumb/MainBreadcrumb';
import {MainBreadcrumbProps} from './breadcrumb/MainBreadcrumb';

export default class AntDemo extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainBreadcrumb {...this.props as MainBreadcrumbProps} ></MainBreadcrumb>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}