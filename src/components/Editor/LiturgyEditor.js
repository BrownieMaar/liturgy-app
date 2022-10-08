import { useState } from 'react';
import './Liturgy-Editor.css';
import LiturgyElements from "./LiturgyElements.js";
import EntryEditor from "./EntryEditor.js";

function EditorFooter(props) {
    return <button onClick={props.event}>Mentés</button>
}

export default function LiturgyEditor(props) {
    if (props.data === null) return <div className="liturgy-edit">Here we will edit the liturgy.</div>;

    if (props.data.type === "missa") {
        const liturgy = props.data
        return (
            <div className="liturgy-edit">
                <EntryEditor tag="h1" liturgyObj={liturgy} targetElement="name" />
                <EntryEditor tag="p" liturgyObj={liturgy} targetElement="destination" />
                <EntryEditor tag="p" liturgyObj={liturgy} targetElement="owner" />
                <LiturgyElements data={liturgy.structure} />
                <EditorFooter event={() => props.methods.update(liturgy, props.path.join("-"))} />
            </div>
        )
    }
}