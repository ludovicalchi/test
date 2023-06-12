import React from "react"
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=>{
    console.log(props);
    return (
        <button 
            type={props.type}
            className={`${style.Button} btn${undefined!==props.className?' '+props.className:''}`}
            onClick={(evt)=>{
                props.onClick('click click');
            }}>
            {props.children}
        </button>
    );
}

Button.propTypes={
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    onClick: PropTypes.func.isRequired,
    className:PropTypes.oneOf(['primary', 'error'])
}

Button.defaultProps={
    type:'button',
    onClick: ()=>{}
}

export default Button