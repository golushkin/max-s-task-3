import "./index.css";
import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import {Article} from "../Other/Article";
import {delNews} from "../../actions/News";
import {Default_btn} from "../Other/Buttons";

class News_read extends React.Component{
    constructor(props){
        super(props);

        this.state={
            redirect_to_edit: false,
        }
        this.onEdit = this.onEdit.bind(this);
        this.onDel = this.onDel.bind(this);
    }

    onEdit(){
        this.setState({redirect_to_edit:true});
    }

    onDel(){
        const { delNews, id } = this.props;
        delNews(id);
        this.setState();
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
                                <Default_btn btnClick={this.onEdit} name={'edit'} text={'Редактировать'} />
                                <Default_btn btnClick={this.onDel} name={'del'} text={'Удалить'} />
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

const mapStateToDipatch = dispatch =>{
    return{
        delNews: (id)=>dispatch(delNews(id)),
    }
};

export default connect(mapStateToProps,mapStateToDipatch)(News_read)