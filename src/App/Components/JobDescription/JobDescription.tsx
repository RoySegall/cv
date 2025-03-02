import "./jobDescription.css";
import {Manifest} from "../../manifest.ts";

type JobDescriptionProps = Manifest['jobs'][0] | Manifest['volunteering'][0];

export function JobDescription({company, start, end, position, ...props}: JobDescriptionProps) {
    const items = 'items' in props ? props.items : undefined;
    const paragraph = 'paragraph' in props ? props.paragraph : undefined;

    return <div id='job-description'>
        <span className='position'>{position}</span>, <span className='place-name'>{company}</span>
        <span className='period'>{start} - {end}</span>

        {paragraph && <p>{paragraph}</p>}
        {items && <ul>{items.map((item,i) => <li key={i}>{item}</li>)}</ul>}
    </div>
}
