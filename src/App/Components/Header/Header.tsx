import './header.css';
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';
import link from '../../assets/link.svg';
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
                <li><img src={phone} /> {manifest.information.contact.phone}</li>
                <li><img src={email} /> {manifest.information.contact.email}</li>
                <li><img src={link}/> {manifest.information.contact.website}</li>
            </ul>

            <p>{manifest.information.about}</p>
        </div>

        {avatar && <img src={avatar} className='avatar' alt="avatar"/>}
    </header>
}
