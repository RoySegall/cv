import {ReactNode} from "react";
import {BlockTitle} from "../BlockTitle";
import "./block.css";

export function Block({title, children}: {title: string, children: ReactNode}) {
    return <div id='block'>
        <BlockTitle>{title}</BlockTitle>
        {children}
    </div>
}
