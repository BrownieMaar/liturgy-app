import { useState } from "react";
import EntryEditor from "../../EntryEditor";
import GradRender from "./GradRender";
import "./GradEditor.css"

function GradEditor(props) {

    console.log("now logging currentPart")
    console.log(props.part)

    return (
        <>
            <EntryEditor label="lang" tag="p" liturgyObj={props.part} targetElement="lang" />
            {props.part.source.map((src, i) => <EntryEditor label={`source ${i}`} tag="p" liturgyObj={props.part.source} targetElement={i} />)}
            {props.part.text.map((versus, i) => {
                return (
                    <div className="versus-box">
                        <div><p>{i}.</p></div>
                        <div className="versus-edit">
                            {versus.map((el, i) => <EntryEditor tag="p" liturgyObj={versus} targetElement={i} />)}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default function GradualeElement(props) {
    const currentPart = props.data.variations[0];
    console.log(currentPart)
    return (
        <div>
            <h2>Graduále</h2>
            <GradEditor part={currentPart} />
            <GradRender part={currentPart.text} />
        </div>
    )
}