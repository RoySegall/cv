import "./technoligies.css";
import {getManifest} from "../../manifest.ts";

function SkillsByCategory({skills}: {skills: Record<string, string[]>}) {
    return <div id="skill-category">
        {Object.entries(skills).map(([title, skills]) => <div className="category" key={title}>
            <span className="title">{title}</span>
            <ul>
                {skills.map(skill => <li key={skill}><span>{skill}</span></li>)}
            </ul>
        </div>)}
    </div>;
}

export function Technologies() {
    const manifest = getManifest();

    if (Array.isArray(manifest.skills)) {
        return <div id='technologies'>
            {manifest.skills.map((skill, i) => <span key={i} className='skill'>{skill}</span>)}
        </div>
    }

    return <SkillsByCategory skills={manifest.skills} />
}
