import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component{
    render(){
        return(
            <div className={'wrapper'}>
                Hello world
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{

    }
};

const mapDispatchToProps = dispatch =>{
    return{

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)
