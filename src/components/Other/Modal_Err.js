import React from 'react';
import './Modal_Err.css';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

export default class Modal_Err extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modal: false,
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.error !== this.props.error){
            if (nextProps.error.length>0) this.setState({modal:true});
        }
    }

    render(){
        const { error } = this.props;
        if (this.state.modal) setTimeout(()=>this.setState({modal:false}),2500)
        return(
            <CSSTransition in={this.state.modal} timeout={500} mountOnEnter classNames={'modal'}>
                <div className={'modal-err'}>
                    {error}
                </div>
            </CSSTransition>
        )
    }

}

Modal_Err.propTypes = {
    error: propTypes.string.isRequired,
};

