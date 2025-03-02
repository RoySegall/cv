import "./skills.css";
import {JobDescription} from "../JobDescription";
import {getManifest} from "../../manifest.ts";
import {Block} from "../Block";
import {ItemsWithSpacer} from "../ItemsWithSpacer/ItemsWithSpacer.tsx";
import {Language} from "../Language";

export function Skills() {
    const manifest = getManifest();

    return <div id='skills'>

        <Block title={'Languages'}>
            <ItemsWithSpacer items={manifest.languages} component={Language} />
        </Block>

        <Block title={'Skills'}>
            <div id='technologies'>
                {manifest.skills.map((skill, i) => <span key={i} className='skill'>{skill}</span>)}
            </div>
        </Block>

        <Block title={'VOLUNTEERING'}>
            <ItemsWithSpacer items={manifest.volunteering} component={JobDescription} />
        </Block>
    </div>
}
