import "./language.css";
import type { Manifest } from "../../manifest.ts";

export function Language({name, level, rate}: Manifest['languages'][0]) {
    return <div id='language'>
        <div id='description'>
            <span className='name'>{name}</span>
            <span className='level'>{level}</span>
        </div>

        <ul>
            {Array.from({length: 5}).map((_, i) => <li key={i} className={i + 1 > rate ? 'off' : ''}>&nbsp;</li>)}
        </ul>
    </div>
}
