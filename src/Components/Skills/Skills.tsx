import "./skills.css";
import {BlockTitle} from "../BlockTitle";
import type {ReactNode} from "react";
import {JobDescription} from "../JobDescription";
import {Spacer} from "../Spacer";

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
    const skills = [
        'NodeJS', 'Javascript', 'Typescript', 'PHP', 'React', 'Swift', 'CI/CD', 'NextJS', 'Gatsby',
    ];
    return <div id='skills'>

        <Block title={'Languages'}>
            <Language language='Hebrew' level='Native' rate={5} />
            <Spacer />
            <Language language='English' level='Proficient' rate={4} />
        </Block>

        <Block title={'Skills'}>
            <div id='technologies'>
                {skills.map((skill, i) => <span key={i} className='skill'>{skill}</span>)}
            </div>
        </Block>

        <Block title={'VOLUNTEERING'}>
            <JobDescription
                placeName={'Company'}
                period={{start: '2021', end: '2021'}}
                position={'Frontend Developer'}
                paragraph={<>
                </>}
            />
            <Spacer />
            <JobDescription
                placeName={'Company'}
                period={{start: '2021', end: '2021'}}
                position={'Frontend Developer'}
                paragraph={<>
                </>}
            />
        </Block>

    </div>
}
