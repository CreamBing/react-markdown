import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import test from '../source/test.md';

interface AritclesParams {
    id: string
}

interface AritclesProps extends RouteComponentProps<AritclesParams> {

}

interface AritclesState {
    sourceMarkDown: string,
    htmlMarkDown: string,
}

export default class Aritcles extends Component<AritclesProps, AritclesState>{
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
        });
        this.state = { htmlMarkDown: '',sourceMarkDown:'' };
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        const { id } = this.props.match.params;
        const path = "回溯与递归";
        const source = require(`E:/DEV/front/blog/githubio/hexo-source/hexo/source/_posts/${path}.md`);
        this.setState({ sourceMarkDown: source.default });
        //这里应该是有了markdown得loader就不需要这样了
        // fetch(source).then(res => res.text()).then(text => this.setState({ sourceMarkDown: text }));
    }

    render() {
        const {sourceMarkDown} = this.state;
        debugger;
        const htmlMarkdown = this.mdParser.render(sourceMarkDown);
        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: htmlMarkdown }}
                />
            </div>
        )
    }
}