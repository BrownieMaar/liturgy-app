export default function GradRender(props) {
    const GradVerse = ({verse}) => (verse.length === 2 ?
        <>
            {verse[0]}&nbsp;<span className="lit-markup">* </span>
            {verse[1]}
        </> :
        <>{verse[0]}&nbsp;<span className="lit-markup">† </span>
            {verse[1]}&nbsp;<span className="lit-markup">* </span>
            {verse[2]}
        </>
    );

    const GradReturn = ({ part }) => {
        const makeUpperCaseStart = str => {
            if (str.length < 1) return str;
            return [Object.values({...str, 0: str[0].toUpperCase()})]
        };

        const makeGrammaticallyCorrectAbbrevFromString = str => {
            const strArr = str.split(" ");
            let returnStr = "";
            if (strArr[0].length + strArr[1].length > 8) return [strArr[0], strArr[1]].join(" ") + "...";
            if (strArr[0].length + strArr[1].length + strArr[2].length > 8) return [strArr[0], strArr[1], strArr[2]].join(" ") + "...";
            if (strArr[0].length + strArr[1].length > 10) return [strArr[0], strArr[1], strArr[2], strArr[3]].join(" ") + "...";
            return returnStr;
        }
        

        return (part[part.length - 1].split(" ").length <= 2 ? 
        <><span className="lit-font"> R.&nbsp;</span>{makeUpperCaseStart(part[part.length - 1])}</>
        :
        <><span className="lit-font"> R.&nbsp;</span>{makeUpperCaseStart(makeGrammaticallyCorrectAbbrevFromString(part[part.length - 1]))}</>
        )
    };



    return <div className="grad-preview">
        <GradVerse verse={props.part[0]} />
        <span className="lit-font"> V.&nbsp;</span><GradVerse verse={props.part[1]} /> <GradReturn part={props.part[0]}/>
        <span className="lit-font"> V.&nbsp;</span><GradVerse verse={props.part[2]} /> <GradReturn part={props.part[0]}/>
    </div>
}