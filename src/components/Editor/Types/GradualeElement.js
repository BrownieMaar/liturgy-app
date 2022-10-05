import { useState } from "react";
import EntryEditor from "../EntryEditor";

function GradPreview(props) {
    const GradVerse = props => (props.verse.length === 2 ?
        <>
            {props.verse[0]}&nbsp;<span className="lit-markup">* </span>
            {props.verse[1]}
        </> :
        <>{props.verse[0]}&nbsp;<span className="lit-markup">† </span>
            {props.verse[1]}&nbsp;<span className="lit-markup">* </span>
            {props.verse[2]}
        </>);

    return <div className="grad-preview">
        <GradVerse verse={props.part[0]} />
        <span className="lit-font"> V.&nbsp;</span><GradVerse verse={props.part[1]} />
        <span className="lit-font"> V.&nbsp;</span><GradVerse verse={props.part[2]} />
    </div>
}

function GradEditor(props) {
    const gradVerse = verse => {

    }

    // const gradEditorObj = 

    return <></>
}

export default function GradualeElement(props) {
    const currentPart = props.data.variations.filter(grad => grad.lang === "magyar")[0];
    console.log(currentPart)
    return (
        <div>
            <h2>Graduále</h2>
            <GradEditor part={currentPart}/>
            <GradPreview part={currentPart.text} />
        </div>
    )
}