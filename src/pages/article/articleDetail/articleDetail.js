import React, { Component } from 'react';
import './articleDetail.scss'
class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    UNSAFE_componentWillMount(){
        console.log(this.props.match.params.id,'666')
        
    }
    
    render() {
        return (
            <div id='ArticleDetail'>
                文章详情
            </div>
        );
    }
}

export default ArticleDetail;