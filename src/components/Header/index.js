import "./index.css";
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Button } from 'antd';
import { Avatar } from 'antd';

export default class Header extends React.Component{
    render(){
        const { getUser, name, signOut, img } = this.props;
        return(
            <header>
                <nav>
                    <Link to={'/news'}>Главная</Link>
                </nav>
                <div className="auth">
                    <UserBlock name={name} getUser={getUser} signOut={signOut} img={img} />
                </div>
            </header>
        )
    }
}

function UserBlock(props){
    const { getUser, signOut, name, img } = props;
    if (name !== ""){
        return(
            <div className={'user-block'}>
                <div className="user-avatar">
                    <Avatar src={img} size={30} />
                    <p>{name}</p>
                </div>
                <Button onClick={signOut} htmlType={'button'}>Выйти</Button>
            </div>
        )
    }
    return(
        <div className={'user-block'}>
            <Button onClick={getUser} htmlType={'button'}>Войти</Button>
        </div>
    )
}

Header.propTypes = {
    img: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    getUser: propTypes.func.isRequired,
    signOut: propTypes.func.isRequired,
};
