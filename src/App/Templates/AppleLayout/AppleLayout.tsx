import './index.css';
import {getManifest} from '../../manifest.ts';
import {useEffect, useState} from 'react';

export function AppleLayout() {
    const manifest = getManifest();
    const [avatar, setAvatar] = useState<string | undefined>(undefined);

    useEffect(() => {
        import(manifest.information.avatar).then((_avatar) => {
            setAvatar(_avatar.default);
        });
    });

    const skills = manifest.skills;
    const isSkillsRecord = !Array.isArray(skills);

    return (
        <div id="apple-layout">
            <aside id="apple-sidebar">
                {avatar && (
                    <img src={avatar} className="apple-avatar" alt="avatar"/>
                )}
                <h1 className="apple-name">{manifest.information.name}</h1>
                <p className="apple-position">{manifest.information.position}</p>

                <div className="apple-contact">
                    <span>{manifest.information.contact.phone}</span>
                    <a href={`mailto:${manifest.information.contact.email}`}>
                        {manifest.information.contact.email}
                    </a>
                    <a href={manifest.information.contact.website}>
                        {manifest.information.contact.website.replace(/^https?:\/\//, '')}
                    </a>
                </div>

                <div className="apple-sidebar-block">
                    <h3 className="apple-section-label">About</h3>
                    <p className="apple-about-text">{manifest.information.about}</p>
                </div>

                <div className="apple-sidebar-block">
                    <h3 className="apple-section-label">Languages</h3>
                    {manifest.languages.map((lang) => (
                        <div key={lang.name} className="apple-language">
                            <span className="apple-language-name">{lang.name}</span>
                            <div className="apple-language-dots">
                                {Array.from({length: 5}).map((_, i) => (
                                    <span key={i} className={`apple-dot ${i < lang.rate ? 'filled' : ''}`}/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="apple-sidebar-block">
                    <h3 className="apple-section-label">Skills</h3>
                    {isSkillsRecord ? (
                        Object.entries(skills as Record<string, string[]>).map(([category, items]) => (
                            <div key={category} className="apple-skill-category">
                                <p className="apple-skill-category-name">{category}</p>
                                <div className="apple-skill-tags">
                                    {items.map((skill) => (
                                        <span key={skill} className="apple-skill-tag">
                                            {skill.replace(/,\s*$/, '')}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="apple-skill-tags">
                            {(skills as string[]).map((skill) => (
                                <span key={skill} className="apple-skill-tag">{skill}</span>
                            ))}
                        </div>
                    )}
                </div>
            </aside>

            <main id="apple-main">
                <section className="apple-section">
                    <h2 className="apple-section-title">Experience</h2>
                    {manifest.jobs.map((job, index) => (
                        <div key={index}>
                            <div className="apple-job">
                                <div className="apple-job-header">
                                    <span className="apple-job-title">{job.position}</span>
                                    <span className="apple-job-period">{job.start} – {job.end}</span>
                                </div>
                                <p className="apple-job-company">{job.company}</p>
                                <ul className="apple-job-items">
                                    {job.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {index < manifest.jobs.length - 1 && (
                                <hr className="apple-job-divider"/>
                            )}
                        </div>
                    ))}
                </section>

                <section className="apple-section">
                    <h2 className="apple-section-title">Volunteering</h2>
                    {manifest.volunteering.map((vol, index) => (
                        <div key={index}>
                            <div className="apple-job">
                                <div className="apple-job-header">
                                    <span className="apple-job-title">{vol.position}</span>
                                    <span className="apple-job-period">{vol.start} – {vol.end}</span>
                                </div>
                                <p className="apple-job-company">{vol.company}</p>
                                <p className="apple-volunteer-paragraph">{vol.paragraph}</p>
                            </div>
                            {index < manifest.volunteering.length - 1 && (
                                <hr className="apple-job-divider"/>
                            )}
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
