import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component{
    render(){
        return(
            <div className={'wrapper'}>Hello world</div>
        )
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(App)
