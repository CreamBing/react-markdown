import React from 'react';
import logo from './logo.svg';
import './App.css';
import  ReactMarkdown from 'react-markdown';
import testMd from './source/Ant Design Pro 初体验.md'
import CodeBlock from "./md/CodeBlock";
import HeadingBlock from "./md/HeadingBlock";

function App() {
  return (
    <div className="App">
      <ReactMarkdown
        source={testMd}
        escapeHtml={false}
        renderers={{
          code: CodeBlock,
          heading: HeadingBlock
        }}
      />
    </div>
  );
}

export default App;
