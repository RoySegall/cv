import "./skills.css";
import {JobDescription} from "../JobDescription";
import {getManifest} from "../../manifest.ts";
import {Block} from "../Block";
import {ItemsWithSpacer} from "../ItemsWithSpacer/ItemsWithSpacer.tsx";
import {Language} from "../Language";
import {Technologies} from "../Technologies";

export function Skills() {
    const manifest = getManifest();

    return <div id='skills'>
        <Block title={'Languages'} children={<ItemsWithSpacer items={manifest.languages} component={Language} />} />
        <Block title={'Skills'} children={<Technologies />} />
        <Block title={'VOLUNTEERING'} children={<ItemsWithSpacer items={manifest.volunteering} component={JobDescription} />} />
    </div>
}
