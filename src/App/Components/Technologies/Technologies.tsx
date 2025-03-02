import "./technoligies.css";
import {getManifest} from "../../manifest.ts";

export function Technologies() {
    const manifest = getManifest();

    return <div id='technologies'>
        {manifest.skills.map((skill, i) => <span key={i} className='skill'>{skill}</span>)}
    </div>
}
