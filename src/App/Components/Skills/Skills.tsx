import "./skills.css";
import {Fragment} from "react";
import {JobDescription} from "../JobDescription";
import {Spacer} from "../Spacer";
import {getManifest, Manifest} from "../../manifest.ts";
import {Block} from "../Block";

function Language({name, level, rate}: Manifest['languages'][0]) {
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

export function Skills() {
    const manifest = getManifest();

    return <div id='skills'>

        <Block title={'Languages'}>
            {manifest.languages.map((props, i) => <Fragment key={i}>
                <Language {...props} />
                {i < manifest.jobs.length - 1 && <Spacer />}
            </Fragment>)}
        </Block>

        <Block title={'Skills'}>
            <div id='technologies'>
                {manifest.skills.map((skill, i) => <span key={i} className='skill'>{skill}</span>)}
            </div>
        </Block>

        <Block title={'VOLUNTEERING'}>
            {manifest.volunteering.map((props, i) => <Fragment key={i}>
                <JobDescription {...props} />
                {i < manifest.volunteering.length - 1 && <Spacer />}
            </Fragment>)}
        </Block>
    </div>
}
