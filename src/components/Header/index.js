import "./index.css";
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Button } from 'antd';

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
                            ?  <Button onClick={getUser} htmlType={'button'}>Войти</Button>
                            : <Button onClick={signOut} htmlType={'button'}>Выйти</Button>
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
