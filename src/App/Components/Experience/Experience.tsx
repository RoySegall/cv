import './experience.css';
import {BlockTitle} from "../BlockTitle";
import {JobDescription} from "../JobDescription";
import {getManifest} from "../../manifest.ts";
import {ItemsWithSpacer} from "../ItemsWithSpacer/ItemsWithSpacer.tsx";

export function Experience() {
    const manifest = getManifest();

    return <div id='experience'>
        <BlockTitle>Experience</BlockTitle>
        <ItemsWithSpacer items={manifest.jobs} component={JobDescription} />
    </div>
}
