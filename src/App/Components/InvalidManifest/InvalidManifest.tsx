import "./invalidManifest.css";
import type {ZodIssue} from "zod";

export function InvalidManifest({zodIssues}: {zodIssues: ZodIssue[]}) {
    return <div id='invalid-manifest'>

        <div className='content'>
            <span className='top'>‼️ Ooops... seems like we have a problem ‼️</span>

            <div className='errors'>
                It seems we have an issue with the <em>manifest.yaml</em> file:

                <ul>
                    {zodIssues.map((issue, index) => <li key={index}>
                        <code>{issue.path.join(".")}</code>: {issue.message}
                    </li>)}
                </ul>
            </div>
        </div>
    </div>
}
