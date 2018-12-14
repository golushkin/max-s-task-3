import "./index.css";
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import {Default_btn} from "../Other/Buttons";

export default class Header extends React.Component{
    render(){
        const { getUser, name, signOut } = this.props;
        return(
            <header>
                <nav>
                    <Link to={'/news'}>Главная</Link>
                </nav>
                <div className="auth">
                    {
                        name === ""
                        ? <Default_btn btnClick={ getUser } text={'Войти'} name={'sign-in'} />
                        : <Default_btn btnClick={ signOut } text={'Выйти'} name={'sign-out'} />
                    }
                </div>
            </header>
        )
    }
}



Header.propTypes = {
    name: propTypes.string.isRequired,
    getUser: propTypes.func.isRequired,
    signOut: propTypes.func.isRequired,
};
