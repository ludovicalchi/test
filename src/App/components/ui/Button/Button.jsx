import React from "react";
import style from './Button.module.css'

const Button=(props)=>{
    console.log(props);
    return <button className={style.Button}>
        {undefined !== props.children ?
        props.children : props.label}</button>;
}

export default Button