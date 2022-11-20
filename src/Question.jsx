
import React , { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';


const Question = ({id,title,info}) =>{
    const [ icon , isIcon ] = useState(false)
    return (
        <div className="question">
            <p>{title}</p>
            <button className="toggle-icon" onClick={() =>{isIcon(!icon)}}>
                {icon? <FaMinus/> : <FaPlus/>}
            </button>
            <h4>{icon && info}</h4>
        </div>
    )
}

export default Question;