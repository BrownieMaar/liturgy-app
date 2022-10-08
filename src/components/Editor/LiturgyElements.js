import GradualeElement from "./Types/Graduale/GradualeElement.js"


const makeEditableDivsFromLitObject = part => {
    if (part.type === "Graduale") return <GradualeElement data={part}/>
}



export default function LiturgyElements(props) {
    const liturgy = props.data;
    const litDivElements = liturgy.map(makeEditableDivsFromLitObject)
    return <>
        <div className="lit-structure" onClick={() => console.log(liturgy)}><p>{JSON.stringify(props.data)}</p></div>
        <div className="lit-structure">{litDivElements}</div>
        </>
}