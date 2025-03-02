import "./blockTitle.css";
import type {ReactNode} from "react";

export function BlockTitle({children}: {children: ReactNode}) {
    return <span id='blockTitle'>{children}</span>
}
