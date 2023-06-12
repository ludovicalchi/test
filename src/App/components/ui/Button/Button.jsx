import React from "react"
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=>{
    console.log(props);
    return (
        <button className={style.Button} onClick={(evt)=>{
            console.log(evt);
            props.onClick();
        }}>
            {props.children}
        </button>
    );
}

Button.propTypes={
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps={
    type:'button',
    onClick: ()=>{}
}

export default Button