import "./index.css";
import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import {Article} from "../Other/Article";
import {delNews} from "../../actions/News";
import {Button} from "antd";

class News_read extends React.Component{
    constructor(props){
        super(props);

        this.state={
            redirect_to_edit: false,
        }
    }

    onEdit = () =>{
        this.setState({redirect_to_edit:true});
    }

    onDel = () =>{
        const { delNews } = this.props;
        if (window.confirm("Удалить ?")){
            delNews();
            this.setState();
        }
    }

    render(){
        const { id, name, feed, feed_del} = this.props;
        let info = feed.find((el)=>{
            if(el._id = id){
                return el;
            }
        });
        if (this.state.redirect_to_edit){
            return(
                <Redirect to={`/news/${id}/edit`}/>
            )
        }
        if (feed_del){
            return(
                <Redirect to={`/news/`}/>
            )
        }
        return(
            <div className={'main news-read'}>
               <Article name={name} delNews={delNews} info={info}/>
                    {
                        name !== ""
                        ?   (
                            <div className="buttons">
                                <Button onClick={this.onEdit} htmlType={'button'}>Редактировать</Button>
                                <Button onClick={this.onDel} htmlType={'button'}>Удалить</Button>
                            </div>
                        )
                        :""
                    }
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        feed: state.news.feeds,
        name: state.user.name,
        feed_del: state.news.feed_del,
    }
};

const mapStateToDispatch = dispatch =>{
    return{
        delNews: (id)=>dispatch(delNews(id)),
    }
};

export default connect(mapStateToProps,mapStateToDispatch)(News_read)