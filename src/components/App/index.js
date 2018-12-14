import React from 'react';
import './index.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from "../Header";
import News from "../News";
import News_read from "../News_Read";
import Footer from "../Footer";
import News_edit from "../News_edit";
import Not_Found from "../PageNotFount";
import {getUser, signOut} from "../../actions/User";
import { getAllNews, delNews } from '../../actions/News';
import Modal_Err from "../Other/Modal_Err";


class App extends React.Component{
    render(){
        const { name, getUser, signOut,
            getAllNews, news,isNewsLoad,
            delNews, error } = this.props;
        return(
            <div className={'wrapper'}>
                <Header name={name} getUser={getUser} signOut={signOut}/>
                <Switch>
                    <Route exact path={'/news'} render={()=> <News getAllNews={getAllNews}
                                                                   delNews={delNews}
                                                                   news={news}
                                                                   isNewsLoad={isNewsLoad}
                                                                   name={name} />} />
                    <Route exact path={'/news/:id'} render={(props)=> <News_read id={props.match.params.id}
                                                                                 name={name} />} />
                    <Route path={'/news/:id/edit'} render={(props)=> <News_edit id={props.match.params.id}
                                                                                name={name} />} />
                    <Route component={Not_Found}/>
                </Switch>
                <Modal_Err error={error} />
                <Footer />
            </div>
        )
    }
    componentDidMount(){
        window.gapi.load("auth2",()=>{
            window.gapi.auth2
                .init({
                    client_id: "175833474443-jfe1ctl97om9suq7pt3na2me79deur7j.apps.googleusercontent.com"
                })
                .then(null,()=>console.log("Init false"))
        })
    }
}

const mapStateToProps = state =>{
    return{
        name: state.user.name,
        news: state.news.feeds,
        isNewsLoad: state.news.isLoad_news,
        error: state.errors.error,
    }
};

const mapDipatchToProps = dispatch =>{
    return {
        getUser: () => dispatch(getUser()),
        signOut:()=> dispatch(signOut()),
        getAllNews:()=>dispatch(getAllNews()),
        delNews: id=>dispatch(delNews(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDipatchToProps)(App));