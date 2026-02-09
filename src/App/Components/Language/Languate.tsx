import "./language.css";
import {getManifest} from "../../manifest.ts";

export function Languages() {
    const manifest = getManifest();

    return <div id='languages'>
        {manifest.languages.map((language, index) => <div className='language' key={language.name}>
            <span className='name'>{language.name}</span> <span className='level'>({language.level})</span>
            {index !== manifest.languages.length - 1 && <>,</>}
        </div>)}
    </div>
}
