import React from "react";
import {BiEdit} from "react-icons/bi";
import {MdOutlineDeleteOutline} from "react-icons/md"
import {AiOutlineCheckCircle} from "react-icons/ai"

export default function(props) {

    const [isChecked, setIsChecked] = React.useState(false)
    const checkTitle = React.useRef()

    return <div className="todolist-item">
        <p ref={checkTitle} className={isChecked? "checked" : ""}>
            {props.title}
        </p>
        <div>
            <button onClick={() => props.handleDel(props.id)}>
                <MdOutlineDeleteOutline className="icon"/> 
            </button>
            <button onClick={() => props.handleEdit(props.id)}>
                <BiEdit className="icon"/>
            </button>
            <button onClick={() => setIsChecked(prev => !prev)}>
                <AiOutlineCheckCircle className="icon"/>
            </button>
        </div>
    </div>
}