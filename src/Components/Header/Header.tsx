import './header.css';
import avatar from './avatar.jpg';

export function Header() {
    return <header>
        <div id='description'>
            <h1>Roy Segall</h1>
            <h2>Full Stack Developer</h2>
            <ul>
                <li>0546857077</li>
                <li>roy@segall.io</li>
                <li>www.segall.io</li>
            </ul>

            <p>
                Enthusiastic, self-learned, highly motivated, loves to explore new technologies, contributes to open-source
                projects, speaks at local meetups, makes the best Tahini you can imagine, and is an amateur chef.
            </p>
        </div>

        <img src={avatar} alt="avatar"/>
    </header>
}