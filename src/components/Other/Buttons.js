import React from 'react';
import propTypes from 'prop-types';

export function Default_btn(props) {
    return(
        <div onClick={props.btnClick} className={`btn btn-${props.name}`}>
            {props.text}
        </div>
    )
}

Default_btn.propTypes = {
    name: propTypes.string,
    text: propTypes.string.isRequired,
    btnClick: propTypes.func.isRequired,
};