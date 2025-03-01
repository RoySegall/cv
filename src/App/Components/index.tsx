import {Header} from "./Header";
import {Experience} from "./Experience";
import {Skills} from "./Skills";
import './index.css';
import {manifest} from "../manifest.ts";

export default function App() {
    return <div className={manifest.color}>
        <Header />

        <div id='content'>
            <Experience />
            <Skills />
        </div>
    </div>
}
