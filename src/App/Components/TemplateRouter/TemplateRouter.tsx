import {TwoLayout} from "../../Templates/TwoLayout";
import {getManifest, Manifest} from "../../manifest.ts";
import {ReactNode} from "react";

export const TemplateRouter = () => {
    const {template} = getManifest();

    const templates: Record<Manifest['template'], ReactNode> = {
        'TwoLayout': <TwoLayout />,
    };

    if (template in templates) {
        return templates[template];
    }

    // Default to TwoLayout.
    return <TwoLayout />;
}
