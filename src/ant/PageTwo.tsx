import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageTwo extends Component{
    constructor(props:any){
        super(props);
    }

    render(){
        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Link to='/two/test'><span>测试markdown</span></Link>
                </div>
        )
    }
}