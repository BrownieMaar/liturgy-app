import { useState } from "react"

/**
 * @param {object} props : where all the props are 
 * @prop  tag : What tag to use
 * @prop  liturgyObj : the object to modify by element
 * @prop  targetElement : the object's element to modify
 * @prop  {array} secondaryButton : first element the text to display, second the onclick
 * @returns an div with an element, which can be edited using an input tag
 */
export default function EntryEditor(props) {
    const CustomTag = `${props.tag}`
    const [isEdited, setIsEdited] = useState(false);
    return (
        <span className={`for-${props.tag}`}>
            {props.label ?
                <CustomTag style={{ "marginRight": "0.5rem" }} >{props.label}:</CustomTag>
                :
                <></>
            }
            {
                !isEdited ?
                    <CustomTag onClick={() => setIsEdited(!isEdited)} className="entry-static">{props.liturgyObj[props.targetElement]}</CustomTag>
                    :
                    <input
                        autoFocus
                        defaultValue={props.liturgyObj[props.targetElement]}
                        onChange={(event) => props.liturgyObj[props.targetElement] = event.target.value}
                        onKeyUp={(e) => { if (e.key === "Enter") setIsEdited(!isEdited) }}
                    />
            }
            {isEdited ?
            <>
                <button onClick={() => setIsEdited(!isEdited)}>✔</button>
                {props.secondaryButton ? <button onClick={() => props.secondaryButton[1]()}>{props.secondaryButton[0]}</button> : <></>} 
            </>
                :
                <></>}
        </span>
    )
}