import './header.css';
import {getManifest} from "../../manifest.ts";
import {useEffect, useState} from "react";

export function Header() {
    const manifest = getManifest();
    const [avatar, setAvatar] = useState<string|undefined>(undefined);

    useEffect(() => {
        import(manifest.information.avatar).then((_avatar) => {
            setAvatar(_avatar.default);
        });
    });

    return <header>
        <div id='description'>
            <h1>{manifest.information.name}</h1>
            <h2>{manifest.information.position}</h2>
            <ul>
                <li><span className="material-symbols-outlined">call</span> {manifest.information.contact.phone}</li>
                <li><span className="material-symbols-outlined">mail</span> {manifest.information.contact.email}</li>
                <li><span className="material-symbols-outlined">link</span> {manifest.information.contact.website}</li>
            </ul>

            <p>{manifest.information.about}</p>
        </div>

        {avatar && <img src={avatar} className='avatar' alt="avatar"/>}
    </header>
}
