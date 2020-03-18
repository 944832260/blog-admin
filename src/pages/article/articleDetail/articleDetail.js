import React, { Component } from 'react';
import { Input ,Button } from 'antd';
import './articleDetail.scss'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css';

const { TextArea } = Input;
class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            // 创建一个空的editorState作为初始值
            editorState: BraftEditor.createEditorState(null)
        }
    }

    async componentDidMount () {
        // 假设此处从服务端获取html格式的编辑器内容
        // const htmlContent = await fetchEditorContent()
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        // this.setState({
        //     editorState: BraftEditor.createEditorState(htmlContent)
        // })
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    UNSAFE_componentWillMount(){
        console.log(this.props.match.params.id,'666')
        
    }
    
    render() {
        const { editorState } = this.state
        return (
            <div id='ArticleDetail'>
                <div className='top'>
                    <span className='tip' >新增文章</span>
                    <Button className='preserve' type="primary">保存</Button>
                </div>
                <Input className='title' placeholder="请输入文章标题" />
                <TextArea className='abstract' rows={4} placeholder="请输入文章标题" />
                <BraftEditor
                    className='myEditor'
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
                <div className='zhanweifu'></div>
            </div>
        );
    }
}

export default ArticleDetail;