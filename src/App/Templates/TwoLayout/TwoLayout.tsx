import './index.css';
import {getManifest} from "../../manifest.ts";
import {Header} from "../../Components/Header";
import {Experience} from "../../Components/Experience";
import {Skills} from "../../Components/Skills";

export function TwoLayout() {
    const manifest = getManifest();

    return <div className={`${manifest.color} ${manifest.direction}`}>
        <Header />

        <div id='content'>
            <Experience />
            <Skills />
        </div>
    </div>
}
