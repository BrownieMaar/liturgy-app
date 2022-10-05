/**
 * @param {object} props : where all the props are 
 * @prop  tag : What tag to use
 * @prop  state : the variable of the useState hook
 * @prop  setState : the func of the useState hook
 * @prop  liturgyObj : the object to modify by element
 * @prop  targetElement : the object's element to modify
 * @returns an div with an element, which can be edited using an input tag
 */
export default function EntryEditor(props) {
    const CustomTag = `${props.tag}`
    return (
        <div className={`for-${props.tag}`}>
            {
                props.state ?
                    <CustomTag>{props.liturgyObj[props.targetElement]}</CustomTag> :
                    <input
                        autoFocus
                        defaultValue={props.liturgyObj[props.targetElement]}
                        onChange={(event) => props.liturgyObj[props.targetElement] = event.target.value}
                        onKeyUp={(e) => { if (e.key === "Enter") props.setState(!props.state) }}
                    />
            }
            <button onClick={() => props.setState(!props.state)}>
                {props.state ? "modify" : "✔"}
            </button>
        </div>
    )
}