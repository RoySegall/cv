import "./jobDescription.css";
import type {ReactNode} from "react";

export interface JobDescriptionProps {
    placeName: string;
    position: string;
    period: {
        start: string;
        end: string;
    },
    items?: ReactNode[];
    paragraph?: ReactNode;
}

export function JobDescription({placeName, period, position, items, paragraph}: JobDescriptionProps) {
    return <div id='job-description'>
        <span className='position'>{position}</span>, <span className='place-name'>{placeName}</span>
        <span className='period'>{period.start} - {period.end}</span>

        {paragraph && <p>{paragraph}</p>}
        {items && <ul>{items.map((item,i) => <li key={i}>{item}</li>)}</ul>}
    </div>
}