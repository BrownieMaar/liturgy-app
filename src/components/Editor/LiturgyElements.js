import GradualeElement from "./Types/GradualeElement.js"


const makeEditableDivsFromLitObject = part => {
    if (part.type === "Graduale") return <GradualeElement data={part}/>
}



export default function LiturgyElements(props) {
    const liturgy = props.data;
    const litDivElements = liturgy.map(makeEditableDivsFromLitObject)
    return <>
        <div className="lit-structure"><p>{JSON.stringify(props.data, null, 4)}</p></div>
        <div className="lit-structure">{litDivElements}</div>
        </>
}