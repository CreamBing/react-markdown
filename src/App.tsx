import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';
import testMd from './source/java编程思想第四版第八章读书笔记.md'
import test2 from './source/test.md'
import CodeBlock from "./md/CodeBlock";
import HeadingBlock from "./md/HeadingBlock";
import { Button } from 'antd';
import MdParser from './md/MdParser';
import {HashRouter,BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AntDemo from './ant/AntDemo';
import BasicLayout from './ant/BasicLayout';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Route path="/" component={BasicLayout}/>
        <Route path="/ant" component={AntDemo} />
      </BrowserRouter>
      {/* <ReactMarkdown
        source={testMd}
        escapeHtml={false}
        renderers={{
          code: CodeBlock
        }}
      /> */}
  
    </div>
  );
}

export default App;
