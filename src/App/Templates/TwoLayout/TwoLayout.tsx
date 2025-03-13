import './index.css';
import {Header} from "../../Components/Header";
import {Experience} from "../../Components/Experience";
import {Skills} from "../../Components/Skills";

export function TwoLayout() {
    return <>
        <Header />

        <div id='content'>
            <Experience />
            <Skills />
        </div>
    </>
}
