import {reviewAbout} from "./assitant/reviewCV.ts";
import {processManifest} from "./assitant/utils.ts";

(async () => {
    const originalManifest = processManifest();

    const foo = await reviewAbout(originalManifest!.information.about);

    console.log(foo);
})();