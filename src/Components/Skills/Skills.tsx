import "./skills.css";
import {BlockTitle} from "../BlockTitle";
import {Fragment, ReactNode} from "react";
import {JobDescription, JobDescriptionProps} from "../JobDescription";
import {Spacer} from "../Spacer";

function Block({title, children}: {title: string, children: ReactNode}) {
    return <div id='block'>
        <BlockTitle>{title}</BlockTitle>
        {children}
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

const places: JobDescriptionProps[] = [
    {
        placeName: 'Hasadna',
        period: {start: '2014', end: '2021'},
        position: 'Fullstack Developer',
        paragraph: <>
           Assisted a non-profit organization focused on providing social activists and journalists with tools that
            used open government data. These tools aimed to enhance transparency, accountability, and informed
            decision-making within communities.
        </>
    },
    {
        placeName: 'Cat Tales',
        period: {start: '2024', end: 'present'},
        position: 'Owner',
        paragraph: <>
            Wrote kids book about my black cat. Later on this will be a side hustle dedicated to author kids books about
            cats which eventually donate half of the incomes to animals in need. The book can be purchased through a
            dedicated site or in "steimatzky" – one of israel top books store.
        </>
    },
]

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
            {places.map((props, i) => <Fragment key={i}>
                <JobDescription {...props} />
                {i < places.length - 1 && <Spacer />}
            </Fragment>)}
        </Block>
    </div>
}
