import { useState } from 'react';
import './Liturgy-Editor.css';
import LiturgyElements from "./LiturgyElements.js";
import EntryEditor from "./EntryEditor.js";

function EditorFooter(props) {
    return <button onClick={props.event}>Mentés</button>
}

export default function LiturgyEditor(props) {
    let [nameStatus, setNameStatus] = useState(true);
    let [destStatus, setDestStatus] = useState(true);
    let [ownerStatus, setOwnerStatus] = useState(true);

    if (props.data === null) return <div className="liturgy-edit">Here we will edit the liturgy.</div>;

    if (props.data.type === "missa") {
        const liturgy = props.data
        return (
            <div className="liturgy-edit">
                <EntryEditor tag="h1" state={nameStatus} setState={setNameStatus} liturgyObj={liturgy} targetElement="name" />
                <EntryEditor tag="p" state={destStatus} setState={setDestStatus} liturgyObj={liturgy} targetElement="destination" />
                <EntryEditor tag="p" state={ownerStatus} setState={setOwnerStatus} liturgyObj={liturgy} targetElement="owner" />
                <LiturgyElements data={liturgy.structure} />
                <EditorFooter event={() => props.methods.update(liturgy, props.path.join("-"))} />
            </div>
        )
    }
}