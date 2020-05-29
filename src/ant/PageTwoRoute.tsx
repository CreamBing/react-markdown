import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';

interface PageTwoRouteProps{
    routes:[];
}

export default class PageTwoRoute extends Component<PageTwoRouteProps>{
    constructor(props:any){
        super(props);
    }

    render(){
        debugger;
        const {routes} = this.props;
        let route;
        if(routes!=undefined){
             route = routes.map((route:any, i:any) => {
                const { path, exact ,routes} = route;
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
              });
        }
        return (
                <Switch>
                {route}
              </Switch>
        )
    }
}