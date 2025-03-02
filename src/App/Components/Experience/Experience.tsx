import './experience.css';
import {BlockTitle} from "../BlockTitle";
import {JobDescription} from "../JobDescription";
import {Spacer} from "../Spacer";
import {Fragment} from "react";
import {getManifest} from "../../manifest.ts";

export function Experience() {
    const manifest = getManifest();

    return <div id='experience'>
        <BlockTitle>Experience</BlockTitle>

        {manifest.jobs.map((props, i) => <Fragment key={i}>
            <JobDescription {...props} />
            {i < manifest.jobs.length - 1 && <Spacer />}
        </Fragment>)}
    </div>
}
