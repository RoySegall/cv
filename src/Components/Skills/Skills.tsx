import "./skills.css";
import {BlockTitle} from "../BlockTitle";
import type {ReactNode} from "react";

function Block({title, children}: {title: string, children: ReactNode}) {
    return <div id='block'>
        <BlockTitle>{title}</BlockTitle>
        <p>
            {children}
        </p>
    </div>
}

export function Skills() {
    return <div id='skills'>

        <Block title={'Languages'}>
            asasd
        </Block>

        <Block title={'Skills'}>
            asasd
        </Block>

        <Block title={'VOLUNTEERING'}>
            asasd
        </Block>

    </div>
}
