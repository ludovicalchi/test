import React, {useState, useEffect} from "react"
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=>{
    //console.log(props);

    const [isClicked, setIsClicked] = useState(false)

    useEffect(()=> {
        //console.log('valeur post setCounter', isClicked)

        if (isClicked) {
            setTimeout(() => {
                setIsClicked(false)
                //console.log('you can\'t see me after 400 ms')
            }, 1000);
        }
      }, [isClicked])
    
    return (
        <button 
            type={props.type}
            className={`${style.Button} btn${undefined!==props.className?' '+props.className:''} ${isClicked===true?' '+style.clicked:''}`}
            onClick={(evt)=>{
                setIsClicked(true)
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