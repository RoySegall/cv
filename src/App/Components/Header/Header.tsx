import './header.css';
import avatar from './avatar.jpg';
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';
import link from '../../assets/link.svg';
import {getManifest} from "../../manifest.ts";

export function Header() {
    const manifest = getManifest();

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

        <img src={avatar} className='avatar' alt="avatar"/>
    </header>
}