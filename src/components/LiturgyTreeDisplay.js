const displayLiturgyElement = async (route, methods) => {
    const response = await fetch("http://127.0.0.1:9001/api/" + route.join("-").toString());
    const liturgyElement = await response.json();
    console.log(liturgyElement)
    methods.setPath(route);
    methods.refresh(liturgyElement)
};

function IntendedText(props) {
    const reducedRoute = props.route.slice(0, props.route.length - 1)
    if (props.data.type === "missa") return (
        <div style={{ margin: `0px 0px 0px ${props.int * 20}px` }} className="tree-element clickable" >
            <span onClick={() => displayLiturgyElement(props.route, props.methods)}>{props.text}</span>
            <button className="tree-modification-button" onClick={() => (props.methods.clone(props.data, reducedRoute.join("-")))}>
                clone
            </button>
            <button className="tree-modification-button" onClick={() => (props.methods.delete(props.route.join("-")))}>
                delete
            </button>
        </div>
    )
    else return <div style={{ margin: `0px 0px 0px ${props.int * 20}px` }} className="tree-element"> {props.text} </div>
}

const recursiveTreeDisplay = (rendersLeft, obj, methods, content = [], route = []) => {
    for (const [key, value] of Object.entries(obj)) {
        content.push(<IntendedText int={3-rendersLeft} text={value.type === "missa" ? value.name : key} route={[...route, key]} methods={methods} data={value} />);
        if (value.type !== "missa" && rendersLeft > 0) content = recursiveTreeDisplay(rendersLeft - 1, value, methods, content, [...route, key],);
    }
    return content;
}

function LiturgyTreeDisplay(props) {
    if (props.data === null) return <div>Not initialized</div>


    let content = recursiveTreeDisplay(3, props.data, props.methods, [], []);

    // for (const [key0, value0] of Object.entries(props.data)) {
    //     content.push(<IntendedText int={0} text={key0} route={[key0]} triggerFn={props.triggerFn} data={value0} />)
    //     for (const [key1, value1] of Object.entries(value0)) {
    //         content.push(<IntendedText int={1} text={`${key1}`} route={[key0, key1]} data={value1} triggerFn={props.triggerFn} />)
    //         for (const [key2, value2] of Object.entries(value1)) {
    //             content.push(<IntendedText int={2} text={`${key2}`} route={[key0, key1, key2]} data={value2} triggerFn={props.triggerFn} />)
    //         }
    //     }
    // }

    return <div className="liturgy-display">{content}</div>
}

export default LiturgyTreeDisplay;