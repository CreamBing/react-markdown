import React, { Component } from 'react';
import { Button } from 'antd';

export default class AntDemo extends Component{
    constructor(props:any){
        super(props);
    }

    render(){
        return (
            <Button type="primary">Button</Button>
        )
    }
}