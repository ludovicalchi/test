import React from "react"
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=>{
    console.log(props);
    return (
        <button style={{background: props.bgColor}} className={style.Button} onClick={(evt)=>{
            props.onClick('click click');
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