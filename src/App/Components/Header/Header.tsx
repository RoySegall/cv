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
            <div className='contact'>
                <h2>{manifest.information.position}</h2>

                <ul>
                    <li>{manifest.information.contact.phone} |</li>
                    <li>{manifest.information.contact.email} |</li>
                    <li>{manifest.information.contact.website}</li>
                </ul>
            </div>

            <p className='about'>{manifest.information.about}</p>
        </div>

        {avatar && <img src={avatar} className='avatar' alt="avatar"/>}
    </header>
}
