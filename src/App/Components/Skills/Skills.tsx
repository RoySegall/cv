import "./skills.css";
import {JobDescription} from "../JobDescription";
import {getManifest} from "../../manifest.ts";
import {Block} from "../Block";
import {ItemsWithSpacer} from "../ItemsWithSpacer/ItemsWithSpacer.tsx";
import {Languages} from "../Language";
import {Technologies} from "../Technologies";

export function Skills() {
    const manifest = getManifest();

    return <div id='skills'>
        <Block title={'Languages'} children={<Languages />} />
        <Block title={'Skills'} children={<Technologies />} />
        <Block title={'VOLUNTEERING'} children={<ItemsWithSpacer items={manifest.volunteering} component={JobDescription} />} />
    </div>
}
