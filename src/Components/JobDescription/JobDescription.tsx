import "./jobDescription.css";
import type {ReactNode} from "react";

interface JobDescription {
    placeName: string;
    position: string;
    period: {
        start: string;
        end: string;
    },
    items?: ReactNode[];
    paragraph?: ReactNode;
}

export function JobDescription({placeName, period, position, items, paragraph}: JobDescription) {
    return <div id='job-description'>
        {placeName}
        {period.end}
        {position}

        {paragraph && <>hi {paragraph}</>}
        {items && <ul>{items.map((item,i) => <li key={i}>{item}</li>)}</ul>}
    </div>
}