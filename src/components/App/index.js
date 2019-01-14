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
import { ToastContainer, toast,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

class App extends React.Component{

    notify = (err) =>{
        toast.error(err);
    }

    render(){
        const { name, getUser, signOut,
            getAllNews, news,isNewsLoad,
            delNews, error } = this.props;
        const arr_errors = Object.values(error).filter(value => value.length>0)

        if (arr_errors.length>0){
            this.notify(arr_errors[0]);
        }
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
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

const mapDsipatchToProps = dispatch =>{
    return {
        getUser: () => dispatch(getUser()),
        signOut:()=> dispatch(signOut()),
        getAllNews:()=>dispatch(getAllNews()),
        delNews: ()=>dispatch(delNews()),
    }
}

export default withRouter(connect(mapStateToProps, mapDsipatchToProps)(App));