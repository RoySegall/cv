import './experience.css';
import {BlockTitle} from "../BlockTitle";
import {JobDescription} from "../JobDescription";
import {Spacer} from "../Spacer";

export function Experience() {
    return <div id='experience'>
        <BlockTitle>Experience</BlockTitle>

        <JobDescription
            placeName={'Company'}
            period={{start: '2021', end: '2021'}}
            position={'Frontend Developer'}
            items={[
                <>asdasd</>,
                <>asdasd</>,
            ]}
        />

        <Spacer />

        <JobDescription
            placeName={'Company'}
            period={{start: '2021', end: '2021'}}
            position={'Frontend Developer'}
            paragraph={<>asdasd</>}
        />
    </div>
}