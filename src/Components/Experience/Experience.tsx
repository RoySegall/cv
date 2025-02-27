import './experience.css';
import {BlockTitle} from "../BlockTitle";
import {JobDescription, JobDescriptionProps} from "../JobDescription";
import {Spacer} from "../Spacer";

const places: JobDescriptionProps[] = [
    {
        placeName: 'Testim.io (later acquired by Tricentis)',
        period: {start: '2021', end: 'present'},
        position: 'Fullstack Developer',
        items: [
            <>
                Developed features for a low-code E2E automation platform, including a Chrome extension, resolved
                complex customer bugs, and handled production issues.
            </>,
            <>
                Contributed to the design of “Testim Mobile,” a product for automating E2E tests for mobile apps,
                which exceeded board expectations and won a significant amount of sales over competitors.
            </>,
            <>
                Promoted Testim through blog posts and facilitated the first meetup for Tricentis Israel customers.
            </>,
        ]
    },
    {
        placeName: 'Dreamed Diabetes',
        period: {start: '2019', end: '2021'},
        position: 'Fullstack Developer',
        items: [
            <>
                Designed features from end-to-end, encompassing the backend, desktop application, and mobile app
                (iOS and Android).
            </>,
            <>
                Contributed to an advisory system for physicians and individuals with diabetes, which enhanced the plans
                for automated insulin pumps for type 1 diabetes and supported the development of a groundbreaking
                treatment for type 2 diabetes. All solutions received FDA approval.
            </>,
            <>
                Enhanced the development cycle and deployment processes by automating workflows and striving for full
                CI/CD integration within the constraints of the medical field. Reduced Selenium test run time by 2-3
                minutes each by leveraging Django ORM over internal Python packages.
            </>,
        ]
    },
    {
        placeName: 'gizra',
        period: {start: '2011', end: '2018'},
        position: 'Fullstack Developer',
        items: [
            <>
                Collaborated with Harvard University on a product aimed at reducing maintenance costs, establishing
                a unified design language, and minimizing IT maintenance headaches.
            </>,
            <>
                Played a key role in designing project architectures, writing automated end-to-end tests, and
                integrating these into continuous integration pipelines.
            </>,
            <>
                Maintained Drupal modules, which had a significant impact on the community, including the White
                House and the EU.
            </>,
            <>
                Organized annual Drupal community events and presented sessions at international Drupal conferences.
            </>
        ]
    },
];

export function Experience() {
    return <div id='experience'>
        <BlockTitle>Experience</BlockTitle>

        {places.map((props, i) => <>
            <JobDescription key={i} {...props} />
            {i < places.length - 1 && <Spacer />}
        </>)}
    </div>
}