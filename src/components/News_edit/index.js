import "./index.css";
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Default_btn } from "../Other/Buttons";
import { saveFeed } from '../../actions/News';

class News_edit extends React.Component{
    constructor(props){
        super(props);

        this.state={
            redirect: false,
            feed: {
                title: "",
                content:"",
            }
        }
        this.onCancel = this.onCancel.bind(this);
    }

    onCancel(){
        this.setState({redirect:true});
    }

    componentWillMount(){
        let { id, feeds } = this.props;
        let feed = feeds.find((val)=>val._id === id);
        this.setState({feed:{title:feed.title, content: feed.content}});
    }

    render(){
        let { id ,saveFeed, save_success } = this.props;
        if (this.state.redirect) return <Redirect to={`/news/${id}`} />
        if (save_success) return <Redirect to={'/news'} />
        return(
            <div className={'main news-edit'}>
                <article>
                    <div className="title">
                        <input type="text"
                               onChange={(e)=>this.setState({feed:{title:e.currentTarget.value, content: this.state.feed.content}})}
                               defaultValue={this.state.feed.title}/>
                    </div>
                    <div className="text">
                        <textarea onChange={(e)=>this.setState({feed:{title: this.state.feed.title, content: e.currentTarget.value}})}
                                  defaultValue={this.state.feed.content}/>
                    </div>
                    <div className="buttons">
                        <Default_btn btnClick={()=>saveFeed(id, this.state.feed)} name={'save'} text={'Сохранить'} />
                        <Default_btn btnClick={this.onCancel} name={'cancel'} text={'Отменить'} />
                    </div>
                </article>
            </div>
        )
    }
}

News_edit.propTypes = {
    id: propTypes.string.isRequired,
    feeds: propTypes.array.isRequired,
    saveFeed: propTypes.func.isRequired,
    save_success: propTypes.bool.isRequired,
}

const mapStateToProps = state =>{
    return{
        feeds: state.news.feeds,
        save_success: state.news.save_success,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        saveFeed: (id,feed)=>dispatch(saveFeed(id,feed)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News_edit);