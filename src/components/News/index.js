import "./index.css";
import React from 'react';
import propTypes from 'prop-types';
import { Article } from "../Other/Article";
import {Spinner} from "../Other/Spinner";


export default class News extends React.Component{

    render(){
        const { isNewsLoad, name, news, delNews } = this.props;
        if (isNewsLoad){
            return(
                <div className={'main news'}>
                    <Spinner />
                </div>
            )
        }
        return(
            <div className={'main news'}>
                {news.map((val,i)=>{
                    return <Article key={i}
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


News.propTypes = {
    name: propTypes.string.isRequired,
    news: propTypes.array.isRequired,
    getAllNews: propTypes.func.isRequired,
    isNewsLoad: propTypes.bool.isRequired,
    delNews: propTypes.func.isRequired,
}