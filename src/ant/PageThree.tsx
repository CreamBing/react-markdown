import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import test from '../source/test.md';

export default class PageThree extends Component {

  mdParser: any;
  constructor(props: any) {
    super(props);
    this.mdParser = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value
          } catch (__) { }
        }
        return '' // use external default escaping
      }
    })
  }

  render() {
    const sourceMarkdown = require('../source/test.md').default;
    debugger;
    const htmlMarkdown = this.mdParser.render(sourceMarkdown);
    return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div
          dangerouslySetInnerHTML={{ __html: htmlMarkdown }}
        />
      </div>
    )
  }
}