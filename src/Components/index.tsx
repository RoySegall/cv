import {Header} from "./Header";
import {Experience} from "./Experience";
import {Skills} from "./Skills";
import './index.css';

export default function App() {
    return <>
        <Header />

        <div id='content'>
            <Experience />
            <Skills />
        </div>
    </>
}
