import {TwoLayout} from "../../Templates/TwoLayout";
import {getManifest, InvalidManifestError, Manifest} from "../../manifest.ts";
import {ReactNode} from "react";
import {InvalidManifest} from "../InvalidManifest";

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
        return templates[template];
    }

    // Default to TwoLayout.
    return <TwoLayout />;
}
