import {TwoLayout} from "../../Templates/TwoLayout";
import {getManifest, InvalidManifestError, Manifest} from "../../manifest.ts";
import {ReactNode} from "react";
import {InvalidManifest} from "../InvalidManifest";

const LayoutWrapper = ({children}: {children: ReactNode}) => {
    const manifest = getManifest();
    return <div className={`${manifest.color} ${manifest.direction}`}>{children}</div>;
}

export const TemplateRouter = () => {
    let template: Manifest['template'];

    try {
        const manifest = getManifest();
        template = manifest.template;
    } catch (e) {
        return e instanceof InvalidManifestError && <InvalidManifest zodIssues={e.zodIssues} />;
    }

    const templates: Record<Manifest['template'], ReactNode> = {
        'TwoLayout': <TwoLayout />,
    };

    if (template in templates) {
        return <LayoutWrapper>{templates[template]}</LayoutWrapper>;
    }

    // Default to TwoLayout.
    return <LayoutWrapper><TwoLayout /></LayoutWrapper>;
}
