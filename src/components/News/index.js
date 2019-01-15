import "./index.css";
import React from 'react';
import { connect } from 'react-redux';
import { Article } from "../Other/Article";
import {Spinner} from "../Other/Spinner";
import { Empty } from 'antd';
import {delNews, getAllNews} from "../../actions/News";

class News extends React.Component{

    render(){
        const { isNewsLoad, name, news, delNews,img } = this.props;
        if (isNewsLoad){
            return(
                <div className={'main news'}>
                    <Spinner />
                </div>
            )
        }
        if (news.length===0){
            return (
                <div className={'main news'}>
                    <Empty description={<span>Новостей нет</span>} />
                </div>
            )
        }
        return(
            <div className={'main news'}>
                {news.map((val,i)=>{
                    return <Article key={i}
                                    img={img}
                                    delNews={delNews}
                                    name={name}
                                    info={val} />
                })}
            </div>
        )
    }

    componentDidMount(){
        this.props.getAllNews();
    }
}

const mapStateToProps = state =>{
    return{
        img: state.user.img,
        name: state.user.name,
        news: state.news.feeds,
        isNewsLoad: state.news.isLoad_news,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getAllNews:()=>dispatch(getAllNews()),
        delNews: ()=>dispatch(delNews()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
