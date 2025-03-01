import './header.css';
import avatar from './avatar.jpg';
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';
import link from '../../assets/link.svg';

export function Header() {
    return <header>
        <div id='description'>
            <h1>Roy Segall</h1>
            <h2>Full Stack Developer</h2>
            <ul>
                <li><img src={phone} /> 0546857077</li>
                <li><img src={email} /> roy@segall.io</li>
                <li><img src={link}/> www.segall.io</li>
            </ul>

            <p>
                Enthusiastic, self-learned, highly motivated, loves to explore new technologies, contributes to open-source
                projects, speaks at local meetups, makes the best Tahini you can imagine, and is an amateur chef.
            </p>
        </div>

        <img src={avatar} className='avatar' alt="avatar"/>
    </header>
}