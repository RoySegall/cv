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

function Language({language, level, rate}: {language: string, level: string, rate: number}) {
    return <div id='language'>
        <div id='description'>
            <span className='name'>{language}</span>
            <span className='level'>{level}</span>
        </div>

        <ul>
            {Array.from({length: 5}).map((_, i) => <li key={i} className={i + 1 > rate ? 'off' : ''}>&nbsp;</li>)}
        </ul>

    </div>
}

export function Skills() {
    return <div id='skills'>

        <Block title={'Languages'}>
            <Language language='Hebrew' level='Native' rate={5} />
            <span id='spacer'></span>
            <Language language='English' level='Proficient' rate={4} />
        </Block>

        <Block title={'Skills'}>
            asasd
        </Block>

        <Block title={'VOLUNTEERING'}>
            asasd
        </Block>

    </div>
}
